import { combineReducers } from 'redux'
import ProductsReducer from './productsR'
import UserReducer from './usersR';
const Reducers = combineReducers({
    ProductsR: ProductsReducer,
    USER: UserReducer

})

export default Reducers;