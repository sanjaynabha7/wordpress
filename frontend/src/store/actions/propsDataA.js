import { PROPS_DATA } from '../type'

export const propsData = (payload) => {
    debugger
    return (dispatch) => {
        dispatch({
            type: PROPS_DATA,
            payload: payload || [],
        });
    }
}
