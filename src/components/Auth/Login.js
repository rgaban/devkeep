import React from 'react';
// import { useAuth } from '../../context/AuthContext';
import { Link } from 'react-router-dom';
import classes from './Signup.module.css';

const Login = (props) => {
    return (
        <div className={classes.Container}>
            <div>
                <div className={classes.Card}>
                    <div className={classes.CardBody}>
                        <h2>Log In</h2>
                        {props.error}
                        <form onSubmit={props.onSubmit} data-testid="form">
                            <div className={classes.FormGroup}>
                                <label htmlFor="email">Email</label>
                                <input id="email" label="email" type="email" ref={props.emailRef} required></input>
                            </div>
                            <div className={classes.FormGroup}>
                                <label htmlFor="password">Password</label>
                                <input id="password" label="password" type="password" ref={props.passwordRef} required></input>
                            </div>
                            <button disabled={props.btnDisabled} type="submit" className={classes.BtnSubmit}>Log In</button>
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
