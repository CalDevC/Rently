import {render, screen, cleanup } from '@testing-library/react';
import MainNav from '../Components/MainNav';

test('on initial render, create listing button disabled', () => {
    
    render(<MainNav/>);
    screen.debug();
    expect(mainNav.loggedIn().toBe(false));

});





