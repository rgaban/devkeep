import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../utility/Store';

const UserContext = createContext();

export const useAuth = () => {
    return useContext(UserContext);
};

export const UserProvider = (props) => {
    const [currentUser, setCurrentUser] = useState();
    const [isLoading, setIsLoading] = useState(true);

    const signup = async (email, password) => {
        try {
            const { user, error } = await supabase.auth.signUp({
                email: email,
                password: password
            });
            if (error) {
                throw new Error(error);
            }
            setCurrentUser(user);
            return user;
        } catch (error) {
            console.log('error', error);
        }
    };

    const login = async (email, password) => {
        try {
            const { user, error } = await supabase.auth.signIn({
                email: email,
                password: password
            });
            if (error) {
                throw new Error(error);
            }
            setCurrentUser(user);
            return user;
        } catch (error) {
            console.log('error', error);
        }
    };

    const logout = async () => {
        try {
            const { error } = await supabase.auth.signOut();
            if (error) {
                throw new Error(error);
            }
            setCurrentUser(null);
        } catch (error) {
            console.log('error', error);
        }
    };

    useEffect(() => {
        const unsubscribe = supabase.auth.onAuthStateChange((event, session) => {
            if (session) {
                setCurrentUser(session.user);
            }
            setIsLoading(false);
        });
        return unsubscribe;
    }, []);

    const value = {
        currentUser,
        signup,
        login,
        logout
    };

    return (
        <UserContext.Provider value={value}>
            {props.children}
        </UserContext.Provider>
    );
};
