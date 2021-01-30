import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Signup.module.css';

const SignUp = (props) => {
    return (
        <div className={classes.Container}>
            <div>
                <div className={classes.Card}>
                    <div className={classes.CardBody}>
                        <h2>Sign Up</h2>
                        {props.error}
                        <form onSubmit={props.onSubmit}>
                            <div id="email" className={classes.FormGroup}>
                                <label>Email</label>
                                <input type="email" ref={props.emailRef} required></input>
                            </div>
                            <div id="password" className={classes.FormGroup}>
                                <label>Password</label>
                                <input type="password" ref={props.passwordRef} required></input>
                            </div>
                            <div id="password-confirm" className={classes.FormGroup}>
                                <label>Password Confirmation</label>
                                <input type="password" ref={props.passwordConfirmRef} required></input>
                            </div>
                            <button disabled={props.btnDisabled} type="submit" className={classes.BtnSubmit}>Sign Up</button>
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
