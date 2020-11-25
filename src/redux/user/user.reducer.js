import { UserActionTypes } from './user.types.js';

const INITIAL_STATE = {
    currentUser: null
}

// redux do user -> definir um ~controle para as acoes relacionadas a ele
const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case UserActionTypes.SET_CURRENT_USER:
            return{
                ...state,
                currentUser: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;