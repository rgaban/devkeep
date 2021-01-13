import React, { useState, useEffect } from 'react';
import { addNote, useStore } from '../../utility/useStore';
import NotesList from '../../components/NotesList/NotesList';
import NoteEditor from '../../components/NoteEditor/NoteEditor';
import CodeEditor from '../../components/CodeEditor/CodeEditor';

import classes from './Notes.module.css';
import { SentimentSatisfied } from '@material-ui/icons';

export default function Notes() {
    const { notes } = useStore();
    const [noteId, setNoteId] = useState('');
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
        console.log(e);
        setNoteDescription(e);
    };

    const handleCodeChange = (e) => {

    };

    const initializeAddNewNote = () => {
        setNoteId('');
        setNoteTitle('');
        setNoteDescription('');
        setCode('');
        // addNote()
    };

    useEffect(() => {
        // wait 500ms to set event
        const timeOut = setTimeout(() => null, 2000);
        return () => clearTimeout(timeOut);
    }, [noteTitle, noteDescription, code]);

    const handleDeleteNote = (noteId) => {

    };

    const handleSaveNote = (noteId) => {

    };


    return (
        <div>
            <div className={classes.Container}>
                <NotesList
                    notes={notes}
                    noteClicked={handleNoteClick}
                    addNoteClicked={initializeAddNewNote} />
                <NoteEditor
                    noteTitle={noteTitle}
                    noteDescription={noteDescription}
                    noteTitleChanged={handleNoteTitleChange}
                    noteDescriptionChanged={handleNoteDescriptionChange}
                    deleteClicked={handleDeleteNote}
                    saveClicked={handleSaveNote} />
                <CodeEditor
                    value={code}
                    codeChanged={handleCodeChange} />
            </div>
        </div>
    )
}
