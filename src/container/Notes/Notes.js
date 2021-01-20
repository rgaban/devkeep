import React, { useState, useEffect } from 'react';
import { addNote, deleteNote, updateNote, useStore, fetchNotes } from '../../utility/useStore';
import NotesList from '../../components/NotesList/NotesList';
import NoteEditor from '../../components/NoteEditor/NoteEditor';
import CodeEditor from '../../components/CodeEditor/CodeEditor';

import classes from './Notes.module.css';

export default function Notes() {
    const { notes, setNotes } = useStore();
    const [selectedNoteIndex, setSelectedNoteIndex] = useState(0);
    const [noteId, setNoteId] = useState(null);
    const [noteTitle, setNoteTitle] = useState('');
    const [noteDescription, setNoteDescription] = useState('');
    const [code, setCode] = useState('');
    const [isAddingNote, setIsAddingNote] = useState(false);
    const [isNoteEdited, setIsNoteEdited] = useState(false);

    useEffect(() => {
        // console.log(`[Notes.js] useEffect selectedNoteIndex ${selectedNoteIndex}`)
        fetchNotes()
            .then(response => {
                if (!isAddingNote || isNoteEdited) {
                    setNotes(response.sort((a, b) => b.id - a.id));
                    setNoteId(notes[selectedNoteIndex].id);
                    setNoteTitle(notes[selectedNoteIndex].title);
                    setNoteDescription(notes[selectedNoteIndex].description);
                    setCode(notes[selectedNoteIndex].code);
                } else {
                    setSelectedNoteIndex(0);
                    setNoteId(notes[0].id);
                }
            })
            .catch(console.error)
            .finally(
                setIsNoteEdited(false)
            );
    }, [isNoteEdited, isAddingNote, selectedNoteIndex]);

    const handleNoteClick = (e) => {
        if (!isAddingNote) {
            // setSelectedNoteIndex(notes.findIndex(note => note.id === parseInt(e.target.dataset.id)));

            const noteClickedIndex = notes.findIndex(note => note.id === parseInt(e.target.dataset.id));
            setNoteId(notes[noteClickedIndex].id);
            setNoteTitle(notes[noteClickedIndex].title);
            setNoteDescription(notes[noteClickedIndex].description);
            setCode(notes[noteClickedIndex].code);
        }
    };

    const handleNoteTitleChange = (e) => {
        // console.log('[Notes.js] handleNoteTitleChange...');
        setNoteTitle(e.target.value);
    };

    const handleNoteDescriptionChange = (e) => {
        setNoteDescription(e);
    };

    const handleCodeChange = (e) => {
        setCode(e);
    };

    const initializeAddNewNote = () => {
        setIsAddingNote(true);
        setNoteId(null);
        setNoteTitle('');
        setNoteDescription('');
        setCode('');
        setSelectedNoteIndex(null);
    };

    const handleDeleteNote = (noteId) => {
        setIsAddingNote(false);
        setIsNoteEdited(true);
        deleteNote(noteId);
        setNotes(notes.filter(note => note.id !== noteId));
    };

    const handleSaveNote = () => {
        // need to handle how to save untitled notes
        if (isAddingNote) {
            addNote(noteTitle, noteDescription, code);
            setNotes([...notes]);
            setTimeout(() => null, 1000);
            alert(`New note created!`);
        } else {
            updateNote(noteId, noteTitle, noteDescription, code);
            setNotes([...notes]);
            // setSelectedNoteIndex(selectedNoteIndex - 1);
            alert(`NoteId: ${noteId} saved!`);
        }
        setIsAddingNote(false);
        // console.log(`[Notes.js] isAddingNote ${isAddingNote}`);
        // console.log(`[Notes.js] selectedNoteIndex ${selectedNoteIndex}`);
    };

    useEffect(() => {
        // wait 2000ms to set notes
        const timeOut = setTimeout(() => null, 5000);
        return () => clearTimeout(timeOut);
    }, [noteTitle, noteDescription, code]);


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
                    codeChanged={handleCodeChange} />
            </div>
        </div>
    )
}
