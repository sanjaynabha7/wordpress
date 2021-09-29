import { PROPS_DATA } from '../type'

export const propsData = (payload) => {
    return (dispatch) => {
        dispatch({
            type: PROPS_DATA,
            payload: payload || [],
        });
    }
}
