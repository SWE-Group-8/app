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
          <NavLink to='/MensShirts' activeStyle>
            Mens Shirts
          </NavLink>
          <NavLink to='/MensPants' activeStyle>
            Mens Pants
          </NavLink>
          <NavLink to='/MensShorts' activeStyle>
            Mens Shorts
          </NavLink>
          <NavLink to='/MensShoes' activeStyle>
            Mens Shoes
          </NavLink>
          <NavLink to='/WomensShirts' activeStyle>
            Womens Shirts
          </NavLink>
          <NavLink to='/WomensPants' activeStyle>
            Womens Pants
          </NavLink>
          <NavLink to='/WomensShorts' activeStyle>
            Women Shorts
          </NavLink>
          <NavLink to='/WomensShoes' activeStyle>
            Women Shoes
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;