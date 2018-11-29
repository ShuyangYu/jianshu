import * as actionCreators from './actionTypes'

const defaultState = {
    focused: false,
};

export default  (state=defaultState, action) => {
    if(action.type === actionCreators.SEARCH_FOCUS) {
        return {
            focused: true,
        }
    }

    if(action.type === actionCreators.SEARCH_BLUR) {
        return {
            focused: false,
        }
    }
    return state;
};  