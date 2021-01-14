import React, { useState, useEffect } from 'react';
import { addNote, deleteNote, useStore } from '../../utility/useStore';
import NotesList from '../../components/NotesList/NotesList';
import NoteEditor from '../../components/NoteEditor/NoteEditor';
import CodeEditor from '../../components/CodeEditor/CodeEditor';

import classes from './Notes.module.css';

export default function Notes() {
    const { notes, setNotes } = useStore();
    const [noteId, setNoteId] = useState(null);
    const [noteTitle, setNoteTitle] = useState('');
    const [noteDescription, setNoteDescription] = useState('');
    const [code, setCode] = useState('');
    const [isAddingNote, setIsAddingNote] = useState(false);

    const handleNoteClick = (e) => {
        const selectedNoteIndex = notes.findIndex(note => note.id === parseInt(e.target.dataset.id));
        setNoteId(notes[selectedNoteIndex].id);
        setNoteTitle(notes[selectedNoteIndex].title);
        setNoteDescription(notes[selectedNoteIndex].description);
        setCode(notes[selectedNoteIndex].code);
    };

    const handleNoteTitleChange = (e) => {
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
        setNoteId('');
        setNoteTitle('');
        setNoteDescription('');
        setCode('');


    };

    useEffect(() => {
        // wait 500ms to set event
        const timeOut = setTimeout(() => null, 2000);
        return () => clearTimeout(timeOut);
    }, [noteTitle, noteDescription, code]);

    const handleDeleteNote = (noteId) => {
        setIsAddingNote(false);
        deleteNote(noteId);
        setNotes(notes.filter(note => note.id !== noteId));
    };

    const handleSaveNote = (noteId) => {
        if (isAddingNote) {
            addNote(noteTitle, noteDescription, code);
            setIsAddingNote(false);
            setNotes([...notes]);
        }
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
                    saveClicked={handleSaveNote} />
                <CodeEditor
                    value={code}
                    codeChanged={handleCodeChange} />
            </div>
        </div>
    )
}
