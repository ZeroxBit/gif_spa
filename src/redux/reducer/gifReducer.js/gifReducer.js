import { MORE_DATA } from "redux/types/gifTypes";


export const INITIAL_STATE = { 
    offset: 0,
    list: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case MORE_DATA:
            return moreData(state, action);
    
        default:
            return state;
    }
}

const moreData = (state, { payload }) => {
    let newState = { ...state };
    if ( !!newState.list ) {
        newState.list = [...newState.list, ...payload];
    } else {
        newState.list = payload;
    }
    newState.offset = newState.list.length + 1;

    return newState;
}