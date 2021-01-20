import React from 'react';

// import Navigation from '../components/Navigation';
import Toolbar from '../components/Navigation/Toolbar/Toolbar';

import classes from './Layout.module.css';
const Layout = (props) => {
    return (
        <div>
            <Toolbar />
            <main className={classes.Content}>{props.children}</main>
        </div>
    )
};

export default Layout;
