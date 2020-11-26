import React from 'react';
import { connect } from 'react-redux';
import {createStructuredSelector } from 'reselect';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors'
import { toggleCartHidden} from '../../redux/cart/cart.action.js'
import CheckoutItem from '../../componentes/checkout-item/checkout-item.component.jsx'
import StripeCheckoutButton from '../../componentes/stripe-button/stripe-button.component.jsx';

import './checkout.style.scss'

const CheckoutPage = ({cartItems, total}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                Produto
            </div>
            <div className='header-block'>
                Descriçao
            </div>
            <div className='header-block'>
                Quantidade
            </div>
            <div className='header-block'>
                Preço
            </div>
            <div className='header-block'>
                Remover
            </div>
        </div>
        {
            cartItems.map(cartItem =>
                (
                    <CheckoutItem key={cartItem.id} cartItem={cartItem}/>
                )  
            )
        }
        <div className='total'>
            <span>Total: R${total}</span>
        </div>
        <div className='test-warning'>
            Teste: usar cartão abaixo para pagamentos
            <br/>
            4242 4242 4242 4242 - Exp: 01/22 - CV: 123 
        </div>
        <StripeCheckoutButton className='button' price={total}/>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
})

export default connect(mapStateToProps)(CheckoutPage)