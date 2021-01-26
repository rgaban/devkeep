import React from 'react';
import { useAuth } from '../../context/UserContext';

import classes from './Profile.module.css';

const Profile = () => {
    const { currentUser } = useAuth();

    let profile = <div></div>;

    if (currentUser) {
        profile = (
            <div className={classes.Container}>
                <table>
                    <thead>
                        <tr>
                            <th>User Information</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className={classes.Uppercase}>User ID</td>
                            <td>
                                <input
                                    value={currentUser.id}
                                    type="text"
                                    readOnly>
                                </input>
                            </td>
                        </tr>
                        <tr>
                            <td className={classes.Uppercase}>Email</td>
                            <td>
                                <input
                                        value={currentUser.email}
                                        type="text"
                                        readOnly>
                                </input>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }

    return (
        <div>
            {profile}
        </div>
    )
};

export default Profile;

// <div className={classes.Container}>
//                 <div className={classes.UserIdContainer}>
//                     <label>UserID: </label>
//                     <div>{currentUser.id}</div>
//                 </div>
//                 <div className={classes.EmailContainer}>
//                     <label>Email: </label>
//                     <div>{currentUser.email}</div>
//                 </div>
//             </div>
