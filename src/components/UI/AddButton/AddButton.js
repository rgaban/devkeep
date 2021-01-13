import React from 'react';

import { AddCircle } from '@material-ui/icons';

import classes from './AddButton.module.css';

const AddButton = (props) => {
    return (
        <div className={classes.AddButton}>
            <button><AddCircle onClick={props.clicked}/></button>
        </div>
    )
};

export default AddButton;
