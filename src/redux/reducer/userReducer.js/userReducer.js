import { SET_TOKEN } from "redux/types/userTypes";
import { getToken } from "services/sessionStorage";


const INITIAL_STATE = {
    token: getToken() || null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_TOKEN:
            return { token: action.payload }
    
        default:
            return state;
    }
}
