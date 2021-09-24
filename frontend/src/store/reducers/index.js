import { combineReducers } from 'redux'
import ProductsReducer from './productsR'
import UserReducer from './usersR';
import PostReducer from './usersR';


const Reducers = combineReducers({
    ProductsR: ProductsReducer,
    USER: UserReducer,
    POST: PostReducer,
})

export default Reducers;