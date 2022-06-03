import React, {FC, HTMLAttributes} from 'react';
import {ReactComponent as Logo} from '../assets/images/logo.svg';
import {NavLink} from "react-router-dom";

interface NavbarProps extends HTMLAttributes<HTMLDivElement>{}

const Navbar: FC<NavbarProps> = ({...props}) => {
    return (
        <div {...props} className='navbar'>
            <div className='navbar__logo'>
                <h3>Inspired by </h3>
                <Logo />
            </div>
            <ul className='navbar__menu'>
                <li className='navbar__item'>
                    <NavLink to='' className='navbar__link'>Characters</NavLink>
                </li>
                <li>
                    <NavLink to='/list' className='navbar__link'>My watch list</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;