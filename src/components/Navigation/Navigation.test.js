import React, { createContext } from 'react';
import { render, screen } from '@testing-library/react';

import { UserProvider } from '../../context/UserContext'
import Navigation from './Navigation';
import NavigationItem from './NavigationItem/NavigationItem';

const UserContext = React.createContext();

const renderNavigation = (user) => {
    return render(
        <UserContext.Provider value={user}>
            <Navigation />
        </UserContext.Provider>
    );
};

test("renders three <NavigationItem /> elements if authenticated", () => {
    const { getByText } = render(<Navigation />, { wrapper: UserProvider });

    // getByText("Notes"); // ask Jay about testing such
});

// test("Navigation items show for authenticated users", () => {
//     const user = {
//         id: "504b637e-bdd8-440b-8551-02625b759f58"
//     };

//     renderNavigation(user);
//     expect(screen.getByText('Profile')).toBeInTheDocument();
// });
