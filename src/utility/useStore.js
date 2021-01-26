import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';
import { useAuth } from '../context/UserContext';

export const supabase = createClient(
    process.env.REACT_APP_SUPABASE_URL,
    process.env.REACT_APP_SUPABASE_KEY
);

export const useStore = (props) => {
    const { currentUser } = useAuth();
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        fetchNotes(currentUser.id)
            .then(response => {
                setNotes(response.sort((a, b) => b.id - a.id));
            })
            .catch(console.error)
    }, [currentUser.id]);

    return { notes, setNotes };
};

export const fetchNotes = async (user_id) => {
    try {
        let { data, error } = await supabase
            .from('notes')
            .select()
            .eq('user_id', user_id);
        if (error) {
            throw new Error(error);
        }
        return data;
    } catch (error) {
        console.log('error', error);
    };
};

export const addNote = async (title, description, code, language, user_id) => {
    try {
        let { data, error } = await supabase
            .from('notes')
            .insert([{
                title,
                description,
                code,
                user_id,
                language
            }]);
            if (error) {
                throw new Error(error);
            }
            return data;
    } catch (error) {
        console.log('error', error);
    };
};

export const deleteNote = async (noteId, user_id) => {
    try {
        const { data, error } = await supabase
            .from('notes')
            .delete()
            .match({
                id: noteId,
                user_id: user_id
            });
            if (error) {
                throw new Error(error);
            }
            return data;
    } catch (error) {
        console.log(error);
    }
};

export const updateNote = async (noteId, title, description, code, language) => {
    try {
        const { data, error } = await supabase
            .from('notes')
            .update({
                title: title,
                description: description,
                code: code,
                language: language
            })
            .match({ id: noteId });
            if (error) {
                throw new Error(error);
            }
            return data;
    } catch (error) {
        console.log('error', error);
    }
};

export const getNote = async (noteId) => {
    try {
        let { data, error } = await supabase
            .from('notes')
            .select()
            .eq('id', noteId)
        if (error) {
            throw new Error(error);
        }
        console.log(data);
        return data;
    } catch (error) {
        console.log('error', error);
    }
}
