import React, { createContext, useContext, useEffect, useState } from 'react';
import { supabase } from '../utility/useStore';
import { useHistory } from 'react-router-dom';

const UserContext = createContext();

export const useAuth = () => {
    return useContext(UserContext);
};

export const UserProvider = (props) => {
    const history = useHistory();
    const [session, setSession] = useState();
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
            console.log(user);
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
            setSession(null);
            setCurrentUser(null);
        } catch (error) {
            console.log('error', error);
        } finally {
            // setSession(null);
            // setCurrentUser(null);
        }
    };

    useEffect(() => {
        const unsubscribe = supabase.auth.onAuthStateChange((event, session) => {
            if (session) {
                setCurrentUser(session.user);
            }
            setIsLoading(false);
            console.log(event, session);
        });
        return unsubscribe;
    }, []);

    const value = {
        session,
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
