import { combineReducers } from "redux";
import gifReducer from "redux/reducer/gifReducer.js/gifReducer";
import userReducer from "redux/reducer/userReducer.js/userReducer"

export default combineReducers({
    gifReducer,
    userReducer
});