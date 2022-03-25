import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />
  
        <NavMenu>
            <NavLink to='/' activeStyle>
            Home
            </NavLink>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/cart' activeStyle>
            Cart
          </NavLink>
          <NavLink to='/Profile' activeStyle>
            Profile
          </NavLink>
          <NavLink to='/SignIn' activeStyle>
                      SignIn
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;