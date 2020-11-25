import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import logo from '../../assets/logo.png'
import CartIcon from '../cart-icon/cart-icon.component.jsx';
import CartDropdown from '../cart-dropdown/cart-dropdown.component.jsx';

import './header.style.scss';

const Header = ({ currentUser, hidden }) => (
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
            {
                hidden ? null :  <CartDropdown/>
            }
        </div>  
    </div>
);

const mapStateToProp = ({user:{currentUser}, cart: {hidden}}) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProp)(Header);