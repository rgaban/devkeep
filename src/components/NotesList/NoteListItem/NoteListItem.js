import React from 'react';
import { ListItem } from '@material-ui/core';

import classes from './NoteListItem.module.css';

const NoteListItem = (props) => {
    const removeHTMLTags = (str) => {
        return str.replace(/<[^>]*?/gm, '');
    };

    const convertNoteTitleString = (str) => {
        let titleString = removeHTMLTags(str);
        let newTitleString;
        if (titleString.length >= 30) {
            newTitleString = titleString.substring(0, 30) + '...';
        } else {
            newTitleString = titleString;
        }
        return newTitleString;
    }

    return (
        <div className={classes.Container}>
            <ListItem
                onClick={props.noteClicked}
                data-id={props.noteId}
                selected={props.selected}
                button={true}>
                {convertNoteTitleString(props.title)}
            </ListItem>
        </div>
    )
};

export default NoteListItem;
