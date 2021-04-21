
import { combineReducers } from "@reduxjs/toolkit"
import bookReducer from "./books"
import userReducer from "./user"

export default combineReducers({
    books: bookReducer,
    auth: userReducer
})