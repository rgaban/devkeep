import React from 'react';
import NoteListItem from './NoteListItem/NoteListItem';
import AddButton from '../UI/AddButton/AddButton';
import { List } from '@material-ui/core';

import classes from './NotesList.module.css';

const NotesList = (props) => {
    let notesList = <div>No Notes to Load..</div>;

    if (props.notes.length > 0) {
        notesList = props.notes.map(note => (
            <NoteListItem
                key={note.id}
                noteId={note.id}
                title={note.title}
                noteClicked={props.noteClicked}
                selected={note.id === props.noteId}
            />
        ));
    }

    return (
        <div className={classes.Container}>
            <div className={classes.HeaderContainer}>
                <h4 className={classes.Header}>Notes</h4>
                <AddButton clicked={props.addNoteClicked} />
            </div>
            <List>
                {notesList}
            </List>
        </div>
    )
}

export default NotesList;
