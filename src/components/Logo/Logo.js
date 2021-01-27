import React from 'react';

import devKeepLogo from '../../assets/devKeep.png';
import classes from './Logo.module.css';

const logo = (props) => (
    <div
        className={classes.Logo}
        style={{height: props.height}}
    >
        <img src={devKeepLogo} alt="DevKeep"/>
    </div>
);

export default logo;
