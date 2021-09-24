import { ADD_POST } from '../type'
const initialState = {};

const PostReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            state = action.payload
            return state;
        }
        default:
            return state;
    }
}

export default PostReducer;