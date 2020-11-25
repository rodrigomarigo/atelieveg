import { combineReducers } from 'redux';
import userReducer from './user/user.reducer.js';
import cartReducer from './cart/cart.reducer.js';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Manter a informação mesmo ao atualizar a página
const persistConfig = {
    key: 'root',
    storage,
    whitelist:['cart']
}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer
})

// controla todos os outros reducers
export default persistReducer(persistConfig, rootReducer);