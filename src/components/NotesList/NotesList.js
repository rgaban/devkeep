import React from 'react';
import NoteListItem from './NoteListItem/NoteListItem';
import AddButton from '../UI/AddButton/AddButton';
import { List } from '@material-ui/core';

import classes from './NotesList.module.css';

const NotesList = (props) => {
    let notesList = <div>Loading Notes..</div>;

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
    };

    if (props.notes === undefined) {
        notesList = <div>No Notes Found</div>
    };

    return (
        <div className={classes.Container}>
            <div className={classes.HeaderContainer}>
                <h4 className={classes.Header}>Notes</h4>
                <AddButton clicked={props.addNoteClicked} />
            </div>
            <div className={classes.List}>
                <List>
                    {notesList}
                </List>
            </div>
        </div>
    )
}

export default NotesList;
