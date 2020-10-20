import { SET_TOKEN } from "redux/types/userTypes"

export const setToken = (token) => (dispatch) =>  {
    return dispatch({
        type: SET_TOKEN,
        payload: token
    })
}