import API from '../../utils/api'
import { ADD_POST, GET_ALL_POST, SET_ERROR } from '../type'
import axios from 'axios'

export const addNewPost = (payload) => {
    return async (dispatch) => {
        await axios.post(API.addNewPosts, payload).then(response => {
            dispatch({
                type: ADD_POST,
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


export const getAllPost = () => {
    return async (dispatch) => {
        await axios.get(API.getAllPosts).then(response => {
            dispatch({
                type: GET_ALL_POST,
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
