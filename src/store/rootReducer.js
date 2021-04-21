
import { combineReducers } from "@reduxjs/toolkit"
import bookReducer from "./books"
export default combineReducers({
    books: bookReducer
})