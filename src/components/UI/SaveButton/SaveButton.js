import React from 'react';

import { SaveAltRounded } from '@material-ui/icons';

import classes from './SaveButton.module.css'

const SaveButton = (props) => {
    return (
        <div className={classes.SaveButton}>
            <button title="saveBtn">
                <SaveAltRounded
                    style={{ fontSize: "35px" }}
                    onClick={props.clicked} />
            </button>
        </div>
    )
};

export default SaveButton;
