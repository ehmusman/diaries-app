import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import books from '../middleware/books'
import reducer from "./rootReducer"

export default configureStore({
    reducer,
    middleware: [
        ...getDefaultMiddleware({
            serializableCheck: false
        }),
        books
    ]
})