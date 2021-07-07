import API from '../../utils/api'
import {GET_PRODUCTS,SET_ERROR} from '../type'
import axios from 'axios'


export const getProducts = () => {
    return async (dispatch) => {
        await axios.get(API.getProducts).then(response => {
            dispatch({
                type:GET_PRODUCTS,
                payload:response.data
            })
        }).catch(e => {
            console.log(e);
            dispatch({
                type:SET_ERROR,
                paload:{
                    e,error:true
                }
            })
        })
    } 
}