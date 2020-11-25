import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import logo from '../../assets/logo.png'
import CartIcon from '../cart-icon/cart-icon.component.jsx';

import './header.style.scss';

const Header = ({ currentUser }) => (
    <div className='header'>
        <Link to="/">
            <img className='logo-container' src={logo}/>
        </Link>
        <div className='options'>
            <Link className='option' to='shop'>SHOP</Link>
            <Link className='option' to='shop'>CONTATO</Link>
            {
            currentUser ? 
            <div className='option' onClick={()=> auth.signOut()}>SAIR</div> :
            <Link className='option' to='/signin'>LOGAR</Link> 
            }
            <CartIcon/>   
        </div>  
    </div>
);

const mapStateToProp = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProp)(Header);