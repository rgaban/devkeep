import React from 'react';

import { Delete } from '@material-ui/icons';

import classes from './DeleteButton.module.css';

const DeleteButton = (props) => {
    return (
        <div className={classes.DeleteButton}>
            <button>
                <Delete
                    style={{ fontSize: "35px" }}
                    onClick={props.clicked} />
            </button>
        </div>
    )
};

export default DeleteButton;
