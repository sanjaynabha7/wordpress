import {combineReducers} from 'redux'
import ProductsReducer from './productsR'

const Reducers = combineReducers({
    ProductsR : ProductsReducer
})

export default Reducers;