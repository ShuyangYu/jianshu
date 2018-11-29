import { SEARCH_FOCUS, SEARCH_BLUR } from './actionTypes'

const defaultState = {
    focused: false,
};

export default (state=defaultState, action) => {
    return state;

    if(action.type === SEARCH_FOCUS) {
        return {
            focusd: true,
        }
    }

    if(action.type === SEARCH_BLUR) {
        return {
            focusd: false,
        }
    }
};