import React, { useState, useRef } from 'react';
// import { useAuth } from '../../context/AuthContext';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../context/UserContext';
import classes from './Signup.module.css';

const Login = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const { login } = useAuth();
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setError('');
            setIsLoading(true);
            await login(emailRef.current.value, passwordRef.current.value)
                .then(setIsLoading(false));
                history.push('/');
        } catch {
            setError('Failed to sign in');
        }
    };

    return (
        <div className={classes.Container}>
            <div>
                <div className={classes.Card}>
                    <div className={classes.CardBody}>
                        <h2>Log In</h2>
                        {error}
                        <form onSubmit={handleSubmit}>
                            <div id="email" className={classes.FormGroup}>
                                <label>Email</label>
                                <input type="email" ref={emailRef} required></input>
                            </div>
                            <div id="password" className={classes.FormGroup}>
                                <label>Password</label>
                                <input type="password" ref={passwordRef} required></input>
                            </div>
                            <button disabled={isLoading} type="submit" className={classes.BtnSubmit}>Log In</button>
                        </form>
                    </div>
                </div>
                <div className={classes.Login}>
                    Need an account? <Link to ="/signup">Sign Up</Link>
                </div>
            </div>
        </div>
    );

};

export default Login;
