import React from 'react';
import ReactQuill from 'react-quill';

import SaveButton from '../UI/SaveButton/SaveButton';
import DeleteButton from '../UI/DeleteButton/DeleteButton';

import classes from './NoteEditor.module.css';
import 'react-quill/dist/quill.snow.css';

const NoteEditor = (props) => {
    return (
        <div className={classes.Container}>
            <input
                autoFocus="autofocus"
                value={props.noteTitle}
                type="text"
                onChange={props.noteTitleChanged}
                placeholder="Title..." >
            </input>
            <ReactQuill
                value={props.noteDescription}
                onChange={props.noteDescriptionChanged}
                style={{
                    height: "50vh"
                }}>

            </ReactQuill>
            <div className={classes.ActionsContainer}>
                <DeleteButton clicked={props.deleteClicked} />
                <SaveButton clicked={props.saveClicked} />
            </div>
        </div>
    )
};

export default NoteEditor;

// ReactQuill onChange={editText}
