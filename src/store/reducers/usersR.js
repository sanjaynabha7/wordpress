import { ADD_USER, GET_USERS } from '../type'
const initialState = {};

const UserReducer = ( state = initialState, action ) => {
   switch ( action.type ){
        case ADD_USER : {
            state=action.payload
            return state;
        }
        case GET_USERS : {
            state=action.payload
            return state;
        }
        default :
            return state; 
   }
}

export default UserReducer;