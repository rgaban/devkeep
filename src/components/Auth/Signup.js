import React, { useState, useRef } from 'react';
import { useAuth } from '../../context/UserContext';
import { Link, useHistory } from 'react-router-dom';

import classes from './Signup.module.css';

const SignUp = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmRef = useRef();
    const { signup } = useAuth();
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Passwords do not match');
        };

        try {
            setError('');
            setIsLoading(true);
            await signup(emailRef.current.value, passwordRef.current.value)
                .then(setIsLoading(false));
            history.push('/');
        } catch {
            setError('Failed to create an account');
        };
    };

    return (
        <div className={classes.Container}>
            <div>
                <div className={classes.Card}>
                    <div className={classes.CardBody}>
                        <h2>Sign Up</h2>
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
                            <div id="password-confirm" className={classes.FormGroup}>
                                <label>Password Confirmation</label>
                                <input type="password" ref={passwordConfirmRef} required></input>
                            </div>
                            <button disabled={isLoading} type="submit" className={classes.BtnSubmit}>Sign Up</button>
                        </form>
                    </div>
                </div>
                <div className={classes.Login}>
                    Already have an account? <Link to ="/login">Log In</Link>
                </div>
            </div>
        </div>
    );

};

export default SignUp;


// <div className={classes.Container}>
//             <div>
//                 <div className={classes.Card}>
//                     <div className={classes.CardBody}>
//                         <h2>Sign Up</h2>
//                         <form onSubmit={handleSubmit}>
//                             <div id="email" className={classes.FormGroup}>
//                                 <label>Email</label>
//                                 <input type="email" ref={emailRef} required></input>
//                             </div>
//                             <div id="password" className={classes.FormGroup}>
//                                 <label>Password</label>
//                                 <input type="password" ref={passwordRef} required></input>
//                             </div>
//                             <div id="password-confirm" className={classes.FormGroup}>
//                                 <label>Password Confirmation</label>
//                                 <input type="password" ref={passwordConfirmRef} required></input>
//                             </div>
//                             <button disabled={isLoading} type="submit" className={classes.BtnSubmit} />
//                         </form>
//                     </div>
//                 </div>
//                 <div className={classes.Login}>
//                     Already have an account? <Link to ="login">Log In</Link>
//                 </div>
//             </div>
//         </div>
