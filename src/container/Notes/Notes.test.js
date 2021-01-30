import React, { useEffect } from 'react';
import { render, screen } from '@testing-library/react';
import Notes from './Notes';
import { MemoryRouter, useParams } from 'react-router-dom';

const renderComponent = (component) => {
    return render(
        <MemoryRouter>
            {component}
        </MemoryRouter>
    );
};

test('renders add note button', () => {
    renderComponent(<Notes />);
    expect(screen.getByTitle(/addBtn/i)).toBeInTheDocument();
});

test('renders input for note title', () => {
    renderComponent(<Notes />);
    expect(screen.getByPlaceholderText(/title.../i)).toBeInTheDocument();
});

test('renders save note button', () => {
    renderComponent(<Notes />);
    expect(screen.getByTitle(/saveBtn/i)).toBeInTheDocument();
});

test('renders delete note button', () => {
    renderComponent(<Notes />);
    expect(screen.getByTitle(/deleteBtn/i)).toBeInTheDocument();
});
