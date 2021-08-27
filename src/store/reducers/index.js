import { combineReducers } from 'redux'
import ProductsReducer from './productsR'
import UserReducer from './usersR';
const Reducers = combineReducers({
    ProductsR: ProductsReducer,
    USER_REDUCER: UserReducer

})

export default Reducers;