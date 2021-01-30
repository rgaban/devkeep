import { render, screen } from '@testing-library/react';
import { UserContext } from './context/UserContext';
// import { render } from './custom-render';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

const renderUserComponent = (user, component) => {
  return render (
    <UserContext.Provider value={user}>
      <MemoryRouter>
        {component}
    </MemoryRouter>
  </UserContext.Provider>
  );
};

test('renders the login page', () => {
  renderUserComponent(null, <App />);
  screen.queryAllByText("Login");
});

test('renders authenticated page', () => {
  const user = {
    email: 'test@test.com',
    id: '504b637e-bdd8-440b-8551-02625b759f58'
  };

  renderUserComponent(user, <App />);
  expect(screen.getByText(/profile/i)).toBeInTheDocument();
});
