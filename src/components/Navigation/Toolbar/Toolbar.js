import React from 'react';

import Navigation from '../Navigation';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <div className={classes.Logo}>
            <Logo />
        </div>
        <div>

        </div>
        <nav className={classes.DesktopOnly}>
            <Navigation />
        </nav>
    </header>
);

export default toolbar;
