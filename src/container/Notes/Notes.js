import React, { useState, useEffect } from 'react';
import { addNote, deleteNote, updateNote, useStore } from '../../utility/useStore';
import NotesList from '../../components/NotesList/NotesList';
import NoteEditor from '../../components/NoteEditor/NoteEditor';
import CodeEditor from '../../components/CodeEditor/CodeEditor';

import classes from './Notes.module.css';

export default function Notes() {

    const { notes, setNotes, selectedNoteIndex, setSelectedNoteIndex } = useStore();
    // const [selectedNoteIndex, setSelectedNoteIndex] = useState('');
    const [noteId, setNoteId] = useState(null);
    const [noteTitle, setNoteTitle] = useState('');
    const [noteDescription, setNoteDescription] = useState('');
    const [code, setCode] = useState('');
    const [isAddingNote, setIsAddingNote] = useState(false);

    useEffect(() => {
        const handleAsync = () => {
            if (selectedNoteIndex) {
                setNoteId(notes[selectedNoteIndex].id);
                setNoteTitle(notes[selectedNoteIndex].title);
                setNoteDescription(notes[selectedNoteIndex].description);
                setCode(notes[selectedNoteIndex].code);
            }
        }
        handleAsync();
    }, [notes, selectedNoteIndex])

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

    const handleDeleteNote = (noteId) => {
        setIsAddingNote(false);
        deleteNote(noteId);
        setNotes(notes.filter(note => note.id !== noteId));
    };

    const handleSaveNote = () => {
        // need to handle how to save untitled notes

        if (isAddingNote) {
            addNote(noteTitle, noteDescription, code);
            setIsAddingNote(false);
            setNotes([...notes]);
            setTimeout(() => null, 500);
            setNoteId(notes[0].id);
            alert(`New note created!`);
        } else {
            updateNote(noteId, noteTitle, noteDescription, code);
            setNotes([...notes]);
            alert(`NoteId: ${noteId} saved!`);
        }
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
                    titleDefaultValue={'Untitled'}
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
