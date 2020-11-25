import CartActionTypes from './cart.types.js';
import { addItemToCart } from './cart.utils.js'

const INITIAL_STATE = {
    hidden:true,
    cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        // controla a exibição do carrinho (dropdown)
        case CartActionTypes.TOGGLE_CART_HIDDEN: 
            return {
                ...state,
                hidden: !state.hidden
            }
        // controla adicao de itens no array cartItems.
        // coloca o novo item (action.payload) no fim do array
        case CartActionTypes.ADD_ITEM:
            return{
                ...state,
                cartItems: addItemToCart(state.cartItems, action.payload)
            }
        default: 
            return state;
    }
}

export default cartReducer