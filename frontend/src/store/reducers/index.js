import { combineReducers } from 'redux'
import ProductsReducer from './productsR'
import UserReducer from './usersR';
import PostReducer from './postsR';
import PropsData from './propsDataR'

const Reducers = combineReducers({
    ProductsR: ProductsReducer,
    USER: UserReducer,
    POST: PostReducer,
    PROPS_DATA: PropsData,
})

export default Reducers;