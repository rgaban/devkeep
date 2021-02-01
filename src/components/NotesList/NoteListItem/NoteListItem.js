import React from 'react';
import { ListItem } from '@material-ui/core';

const NoteListItem = (props) => {
    const removeHTMLTags = (str) => {
        return str.replace(/<[^>]*?/gm, '');
    };

    return (
        <div>
            <ListItem
                onClick={props.noteClicked}
                data-id={props.noteId}
                selected={props.selected}
                button={true}>
                {removeHTMLTags(props.title.substring(0, 30) + '...')}
            </ListItem>
        </div>
    )
};

export default NoteListItem;
