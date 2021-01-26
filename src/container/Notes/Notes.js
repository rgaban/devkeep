import React, { useState, useEffect } from 'react';
import { useAuth } from '../../context/UserContext';
import { addNote, deleteNote, updateNote, useStore, fetchNotes } from '../../utility/useStore';
import { useDebounce } from '../../utility/useDebounce';
import NotesList from '../../components/NotesList/NotesList';
import NoteEditor from '../../components/NoteEditor/NoteEditor';
import CodeEditor, { languages } from '../../components/CodeEditor/CodeEditor';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import classes from './Notes.module.css';

const debounce = (fn, delay) => {
    let handler = setTimeout(() => null, );
    return () => clearTimeout(handler);
};

export default function Notes() {
    const { currentUser } = useAuth();
    const { notes, setNotes } = useStore();
    const [selectedNoteIndex, setSelectedNoteIndex] = useState(0);
    const [noteId, setNoteId] = useState(null);
    const [noteTitle, setNoteTitle] = useState('');
    const [noteDescription, setNoteDescription] = useState('');
    const [code, setCode] = useState('');
    const [language, setLanguage] = useState('javascript');
    const [theme, setTheme] = useState('github');
    const [isAddingNote, setIsAddingNote] = useState(false);
    const [isNoteEdited, setIsNoteEdited] = useState(false);

    const notifySave = () => {
        toast.dark("Note successfully saved!", {
            position: "bottom-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
        });
    };

    const notifyDelete = () => {
        toast.dark("Note deleted!", {
            position: "bottom-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
        });
    };

    useEffect(() => {
        if (notes && notes.length > 0 && (!isAddingNote || !isNoteEdited)) {
            setNoteId(notes[selectedNoteIndex].id);
            setNoteTitle(notes[selectedNoteIndex].title);
            setNoteDescription(notes[selectedNoteIndex].description);
            setCode(notes[selectedNoteIndex].code);
            setLanguage(notes[selectedNoteIndex].language);
        }
    }, [notes, setNotes]);

    useEffect(() => {
        if (notes && notes.length > 0 && !isAddingNote) {
            let fetchedNotes = [];
            fetchNotes(currentUser.id)
                .then(response => {
                    fetchedNotes = response.sort((a,b) => b.id - a.id);
                    setNotes(fetchedNotes);
                    setNoteId(fetchedNotes[selectedNoteIndex].id);
                    setNoteTitle(fetchedNotes[selectedNoteIndex].title);
                    setNoteDescription(fetchedNotes[selectedNoteIndex].description);
                    setCode(fetchedNotes[selectedNoteIndex].code);
                    setLanguage(fetchedNotes[selectedNoteIndex].language);
                }
            );
        }
    }, [currentUser, isAddingNote, selectedNoteIndex]);

    const handleNoteClick = (e) => {
        const noteClickedIndex = notes.findIndex(note => note.id === parseInt(e.target.dataset.id));
        setNoteId(notes[noteClickedIndex].id);
        setNoteTitle(notes[noteClickedIndex].title);
        setNoteDescription(notes[noteClickedIndex].description);
        setCode(notes[noteClickedIndex].code);
        setLanguage(notes[noteClickedIndex].language);

        setSelectedNoteIndex(notes.findIndex(note => note.id === parseInt(e.target.dataset.id)));
    };

    const handleNoteTitleChange = (e) => {
        setNoteTitle(e.target.value);
        setIsNoteEdited(true);
    };

    const handleNoteDescriptionChange = (value, delta, source) => {
        setNoteDescription(value);
        if (source === 'user') {
            setIsNoteEdited(true);
        }
    };

    const handleCodeChange = (value) => {
        setCode(value);
        setIsNoteEdited(true);
    };

    const initializeAddNewNote = () => {
        setIsAddingNote(true);
        setSelectedNoteIndex(null);
        setNoteId(null);
        setNoteTitle('');
        setNoteDescription('');
        setCode('');
        setLanguage('javascript');
    };

    const handleDeleteNote = (noteId) => {
        setNotes(notes.filter(note => note.id !== noteId));
        setIsAddingNote(false);
        deleteNote(noteId, currentUser.id);
        setSelectedNoteIndex(selectedNoteIndex);
        notifyDelete();
    };

    const handleSaveNote = () => {
        // need to handle how to save untitled notes
        if (isAddingNote) {
            addNote(noteTitle, noteDescription, code, language, currentUser.id);
            setSelectedNoteIndex(0);
            setTimeout(() => null, 1000);
        } else {
            updateNote(noteId, noteTitle, noteDescription, code, language);
        }
        notifySave();
        setIsAddingNote(false);
    };

    useEffect(() => {
        const timeOut = setTimeout(() => {
            if (isNoteEdited) {
                handleSaveNote();
            }
            setIsNoteEdited(false);
        }, 1000);
        return () => {
            clearTimeout(timeOut);
        }
    }, [isNoteEdited, noteTitle, noteDescription, code, language]);


    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
        setIsNoteEdited(true);

    };

    const handleThemeChange = (e) => {
        setTheme(e.target.value);
    };

    return (
        <div>
            <div className={classes.Container}>
                <NotesList
                    notes={notes}
                    noteClicked={handleNoteClick}
                    addNoteClicked={initializeAddNewNote}
                    noteId={noteId} />
                <NoteEditor
                    noteTitle={noteTitle}
                    noteDescription={noteDescription}
                    noteTitleChanged={handleNoteTitleChange}
                    noteDescriptionChanged={handleNoteDescriptionChange}
                    deleteClicked={() => handleDeleteNote(noteId)}
                    saveClicked={() => handleSaveNote()} />
                <CodeEditor
                    value={code}
                    codeChanged={handleCodeChange}
                    LanguageChanged={handleLanguageChange}
                    language={language}
                    ThemeChanged={handleThemeChange}
                    theme={theme} />
                <ToastContainer />
            </div>
        </div>
    )
}
