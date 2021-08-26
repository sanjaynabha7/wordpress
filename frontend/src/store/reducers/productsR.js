import { GET_PRODUCTS } from '../type'
const initialState = {};

const ProductsReducer = ( state = initialState, action ) => {
   switch ( action.type ){
        case GET_PRODUCTS : {
            state=action.payload
            return state;
        }
        default :
            return state; 
   }
}

export default ProductsReducer;