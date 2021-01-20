import React from 'react';
import { useAuth } from '../../context/UserContext';

const Profile = () => {
    const { currentUser } = useAuth();

    let profile = <div></div>;

    if (currentUser) {
        profile = (
            <div>
                <div>
                    <label>UserID: </label>
                    <div>{currentUser.id}</div>
                </div>
                <div>
                    <label>Email: </label>
                    <div>{currentUser.email}</div>
                </div>
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
