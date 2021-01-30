import React, { useRef } from 'react';
import { render, screen, fireEvent, createEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from './Login';
import { MemoryRouter } from 'react-router-dom';
import { Navigation } from '@material-ui/icons';
import { UserProvider, UserContext, useAuth } from '../../context/UserContext';

const renderComponent = (component) => {
    return render(
        <MemoryRouter>
            {component}
        </MemoryRouter>
    );
};

test('renders login text on the screen', () => {
    const { getAllByText } = renderComponent(<Login />);
    expect(getAllByText('Log In')).toHaveLength(2);
});
test('renders two inputs', () => {
    const { getByLabelText } = renderComponent(<Login />);
    expect(getByLabelText(/email/i)).toBeInTheDocument();
    expect(getByLabelText(/password/i)).toBeInTheDocument();
});

test('renders the submit button', () => {
    const { getByRole } = renderComponent(<Login />);
    expect(getByRole('button', {name: 'Log In'})).toBeInTheDocument();
});

test('submits email and password', () => {
    const email = 'test@test.com';
    const password = '123';
    const onSubmit = jest.fn();
    const { getByTestId } = renderComponent(<Login onSubmit={onSubmit} />);

    userEvent.type(screen.getByLabelText(/email/i), email);
    userEvent.type(screen.getByLabelText(/password/i), password);
    fireEvent.submit(getByTestId('form'));

    expect(onSubmit).toHaveBeenCalledTimes(1);

});
