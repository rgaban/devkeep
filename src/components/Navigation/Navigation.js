import React, { useState } from 'react';
import { useAuth } from '../../context/UserContext';
import { useHistory } from 'react-router-dom';
import NavigationItem from './NavigationItem/NavigationItem';

import classes from './Navigation.module.css';

const Navigation = (props) => {
    const { currentUser, logout } = useAuth();
    const history = useHistory();
    const [error, setError] = useState('');

    const logoutHandler = async () => {
        setError('');
        try {
            await logout()
                .then(history.push('/login'));
        } catch {
            setError('Failed to logout');
            alert(error);
        };
    };

    return (
        <ul className={classes.NavigationItems}>
            {currentUser ? <NavigationItem exact link="/">Notes</NavigationItem> : null}
            {currentUser ? <NavigationItem link="/profile">Profile</NavigationItem> : null}
            {!currentUser ? null : <NavigationItem link="/login" clicked={logoutHandler}>Log Out</NavigationItem>}
        </ul>
    )
};

export default Navigation;
