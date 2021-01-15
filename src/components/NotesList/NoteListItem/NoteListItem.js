import React from 'react';
import { ListItem } from '@material-ui/core';

const NoteListItem = (props) => {
    return (
        <div>
            <ListItem
                onClick={props.noteClicked}
                data-id={props.noteId}
                selected={props.selected}
                button={true}>
                {props.title}
            </ListItem>
        </div>
    )
};

export default NoteListItem;
