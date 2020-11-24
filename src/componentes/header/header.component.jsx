import React from 'react';
import { Link} from 'react-router-dom';
import logo from '../../assets/logo.png'

import './header.style.scss';

const Header = () => (
    <div className='header'>
        <Link to="/">
            <img className='logo-container' src={logo}/>
        </Link>
        <div className='options'>
            <Link className='option' to='shop'>SHOP</Link>
            <Link className='option' to='shop'>CONTATO</Link>
        </div>
    </div>
);

export default Header;