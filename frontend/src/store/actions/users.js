import API from '../../utils/api'
import {ADD_USER,GET_USERS,SET_ERROR} from '../type'
import axios from 'axios'


export const addUser = (payload) => {
    return async (dispatch) => {
        await axios.post(API.addUser, payload).then(response => {
            dispatch({
                type:ADD_USER,
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

export const getUser =()=>{
    return async(dispatch) => {
        await axios.get(API.getUsers).then(response => {
             dispatch({
                 type:GET_USERS,
                 payload: response.data.data
             });
         }).catch(e => {
             console.log(e);
             dispatch({
                 type:SET_ERROR,
                 payload: {
                     e, error: true
                 }
             })
         })
     }
}



