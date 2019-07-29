import React from 'react';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return ( 
        <div>
            <Link exact to="/">Home</Link>
            <Link to="/user">Join Up</Link>
            <Link to="/contact">Contact Us</Link>
        </div>
     );
}
 
export default NavBar;