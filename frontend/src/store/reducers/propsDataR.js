import { PROPS_DATA } from '../type'
const initialState = {};
const PropsData = (state = initialState, action) => {
    switch (action.type) {
        case PROPS_DATA:
            state = action.payload;
            return state
        default: return state;

    }
}

export default PropsData;