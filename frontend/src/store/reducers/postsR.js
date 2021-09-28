import { ADD_POST, GET_ALL_POST } from '../type'
const initialState = {};

const PostReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case ADD_POST: {
            state = action.payload
            return state;
        }
        case GET_ALL_POST: {
            state = action.payload
            return state;
        }
        default:
            return state;
    }
}

export default PostReducer;