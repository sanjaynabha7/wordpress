import { ADD_CATEGORY, GET_CATEGORIES } from '../type'
const initialState = {};

const CategoryReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case ADD_CATEGORY: {
            state = action.payload
            return state;
        }
        case GET_CATEGORIES: {
            state = action.payload
            return state;
        }
        default:
            return state;
    }
}

export default CategoryReducer; 