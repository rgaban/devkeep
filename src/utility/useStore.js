import React, { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
    process.env.REACT_APP_SUPABASE_URL,
    process.env.REACT_APP_SUPABASE_KEY
);

export const useStore = (props) => {
    const [notes, setNotes] = useState([]);
    const [newNote, handleNewNote] = useState();
    const [noteListener, setNoteListener] = useState(null);

    useEffect(() => {
        fetchNotes()
            .then(response => {
                setNotes(response);
            })
            .catch(console.error)
    }, []);

    return { notes, newNote, noteListener };
};

export const fetchNotes = async () => {
    try {
        let { data, error } = await supabase
            .from('notes')
            .select();
        if (error) {
            throw new Error(error);
        }
        return data;
    } catch (error) {
        console.log('error', error);
    }
};

export const addNote = async (title, description, code) => {
    try {
        let { data, error } = await supabase
            .from('notes')
            .insert([{
                title,
                description,
                code
            }]);
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
