import API from '../../utils/api'
import { ADD_CATEGORY, GET_CATEGORIES, SET_ERROR, UPDATE_CATEGORY } from '../type'
import axios from 'axios'

export const addCategory = (payload) => {
    return async (dispatch) => {
        await axios.post(API.addCategory, payload).then(response => {
            dispatch({
                type: ADD_CATEGORY,
                payload: response.data
            })
        }).catch(e => {
            console.log(e);
            dispatch({
                type: SET_ERROR,
                paload: {
                    e, error: true
                }
            })
        })
    }
}


export const getCategories = () => {
    return async (dispatch) => {
        await axios.get(API.getCategories).then(response => {
            dispatch({
                type: GET_CATEGORIES,
                payload: response.data.data
            });
        }).catch(e => {
            console.log(e);
            dispatch({
                type: SET_ERROR,
                payload: {
                    e, error: true
                }
            })
        })
    }
}


export const updateCategory = (payload) => {
    debugger
    return async (dispatch) => {
        await axios.put(API.updateCategory, payload).then(response => {
            dispatch({
                type: UPDATE_CATEGORY,
                payload: response.data.data
            });
        }).catch(e => {
            console.log(e);
            dispatch({
                type: SET_ERROR,
                payload: {
                    e, error: true
                }
            })
        })
    }
}