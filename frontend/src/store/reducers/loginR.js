import { LOGIN, LOGOUT } from '../type'
const initialState = {};

const LoginReducer = (state = initialState, action) => {

    switch (action.type) {
        case LOGIN: {
            state = action.payload
            return state;
        }
        case LOGOUT: {
            state = initialState
            return state
        }
        default:
            return state;
    }
}

export default LoginReducer;