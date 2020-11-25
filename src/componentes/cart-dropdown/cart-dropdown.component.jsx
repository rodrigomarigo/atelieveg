import React from 'react';
import './cart-dropdown.style.scss';

import CustomButton from '../custom-button/custom-button.component.jsx';

const CartDropdown = () => (
    <div className='cart-dropdown'>
        <div className='cart-items'/>
        <CustomButton>Finalizar Pedido</CustomButton>


    </div>


)

export default CartDropdown