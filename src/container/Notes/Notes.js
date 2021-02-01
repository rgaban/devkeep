import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../../context/UserContext';
import { addNote, deleteNote, updateNote, fetchNotes } from '../../utility/Store';
import NotesList from '../../components/NotesList/NotesList';
import NoteEditor from '../../components/NoteEditor/NoteEditor';
import CodeEditor from '../../components/CodeEditor/CodeEditor';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import classes from './Notes.module.css';

export default function Notes() {
    const { currentUser } = useAuth() || {};
    const [notes, setNotes] = useState([]);
    const [selectedNoteIndex, setSelectedNoteIndex] = useState(0);
    const [noteId, setNoteId] = useState(null);
    const [noteTitle, setNoteTitle] = useState('');
    const [noteDescription, setNoteDescription] = useState('');
    const [code, setCode] = useState('');
    const [language, setLanguage] = useState('javascript');
    const [theme, setTheme] = useState('github');
    const [isAddingNote, setIsAddingNote] = useState(false);
    const [isNoteEdited, setIsNoteEdited] = useState(false);
    // const [isNoteRequestPending, setIsNoteRequestPending] = useState(false);
    const titleInputEl = useRef();

    useEffect(() => {
        let isSubscribed = true;
        if (currentUser) {
            let fetchedNotes = [];
            fetchNotes(currentUser.id)
                .then(response => {
                    if (isSubscribed && response.length > 0) {
                        console.log(response);
                        fetchedNotes = response.sort((a, b) => b.id - a.id);
                        setNotes(fetchedNotes);
                        setNoteId(fetchedNotes[selectedNoteIndex].id);
                        setNoteTitle(fetchedNotes[selectedNoteIndex].title);
                        setNoteDescription(fetchedNotes[selectedNoteIndex].description);
                        setCode(fetchedNotes[selectedNoteIndex].code);
                        setLanguage(fetchedNotes[selectedNoteIndex].language);
                    };
                }
            );
        }
        return () => (isSubscribed = false);
    }, []);

    useEffect(() => {
        titleInputEl.current.focus();
        if (notes && notes.length > 0 && !isNoteEdited) {
            setNoteId(notes[selectedNoteIndex].id);
            setNoteTitle(notes[selectedNoteIndex].title);
            setNoteDescription(notes[selectedNoteIndex].description);
            setCode(notes[selectedNoteIndex].code);
            setLanguage(notes[selectedNoteIndex].language);
        }
    }, [notes, setNotes, selectedNoteIndex]);


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

    const handleLanguageChange = (e) => {
        setLanguage(e.target.value);
        setIsNoteEdited(true);

    };

    const handleThemeChange = (e) => {
        setTheme(e.target.value);
    };

    const initializeAddNewNote = () => {
        setIsAddingNote(true);
        setIsNoteEdited(false);
        setNoteId(null);
        setNoteTitle('');
        setNoteDescription('');
        setCode('');
        setLanguage('javascript');
        titleInputEl.current.focus();
    };

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

    const notifySaveError = () => {
        toast.error("There was an issue saving your note, please try again!", {
            position: "bottom-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
        });
    };

    const notifyDeleteError = () => {
        toast.error("There was an issue deleting your note, please try again!", {
            position: "bottom-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined
        });
    }

    const handleDeleteNote = (noteId) => {
        setIsAddingNote(false);
        deleteNote(noteId, currentUser.id)
            .then(response => {
                if (response) {
                    notifyDelete();
                    setNotes(notes.filter(note => note.id !== noteId));
                } else {
                    notifyDeleteError();
                };
            });
    };

    const handleSaveNote = () => {
        // need to handle how to save untitled notes
        if (isAddingNote) {
            setSelectedNoteIndex(0);
            let title = '';
            if (noteTitle === '') {
                title = 'Untitled'
            } else {
                title = noteTitle;
            }

            addNote(title, noteDescription, code, language, currentUser.id)
                .then(response => {
                    if (response) {
                        notifySave();
                        setNotes([{
                            id: response[0].id,
                            title: response[0].title,
                            description: response[0].description,
                            code: response[0].code,
                            language: response[0].language,
                            user_id: response[0].user_id
                        }, ...notes]);
                    } else {
                        notifySaveError();
                    }
                });
            setIsAddingNote(false);
            setIsNoteEdited(false);
        } else {
            updateNote(noteId, noteTitle, noteDescription, code, language)
                .then(response => {
                    if (response) {
                        notifySave();
                        const newNotes = [...notes];
                        newNotes[selectedNoteIndex] = {
                            id: response[0].id,
                            title: response[0].title,
                            description: response[0].description,
                            code: response[0].code,
                            language: response[0].language,
                            user_id: response[0].user_id
                        };
                        setNotes(newNotes);
                    } else {
                        notifySaveError();
                    };
                });
            setIsNoteEdited(false);
        };
    };

    const handleNoteClick = (e) => {
        titleInputEl.current.focus();
        setIsAddingNote(false);
        setSelectedNoteIndex(notes.findIndex(note => note.id === parseInt(e.target.dataset.id)));
    };

    useEffect(() => {
        const timeOut = setTimeout(() => {
            if (isNoteEdited) {
                handleSaveNote()
            }
            setIsNoteEdited(false);
        }, 3000);
        return () => {
            clearTimeout(timeOut);
        }
    }, [isAddingNote, isNoteEdited, noteTitle, noteDescription, code, language]);


    return (
        <div>
            <div className={classes.Container}>
                <NotesList
                    notes={notes}
                    noteClicked={handleNoteClick}
                    addNoteClicked={initializeAddNewNote}
                    noteId={noteId} />
                <NoteEditor
                    inputRef={titleInputEl}
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
