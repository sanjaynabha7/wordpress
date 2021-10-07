import API from '../../utils/api'
import { LOGIN, LOGOUT, SET_ERROR,  } from '../type'
import axios from 'axios'

export const login = (payload) => {
    return async (dispatch) => {
        await axios.post(API.login, payload).then(response => {
            const _data = JSON.stringify(payload);
            localStorage.setItem('USER', _data);
            dispatch({
                type: LOGIN,
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




export const logout = () => {
    localStorage.clear();
    return {
        type:LOGOUT,
        payload:{}
    }
}
