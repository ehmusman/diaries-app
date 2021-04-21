import { createSlice } from "@reduxjs/toolkit"
import { apiCallBegan } from "./api"

const slice = createSlice({
    name: "books",
    initialState: {
        list: [],
        gBLoading: false,
        gBError: null,
        success: false,

        aBLoading: false,
        aBError: null,

        rBLoading: false,
        rBError: null
    },
    reducers: {
        getBooksRequest: (books, action) => {
            books.gBLoading = true
            books.gBError = null
        },
        getBooksSuccess: (books, action) => {
            books.gBLoading = false
            books.list = action.payload
        },
        getBooksError: (books, action) => {
            books.gBLoading = false
            books.gBError = action.payload
            books.success = false
        },
        addBookRequest: (books, action) => {
            books.aBLoading = true
            books.aBError = null
        },
        addBookSuccess: (books, action) => {
            books.aBLoading = false
            books.list = action.payload
            books.success = true
        },
        addBookError: (books, action) => {
            books.aBLoading = false
            books.aBError = action.payload
            books.success = false
        },
        removeBookRequest: (books, action) => {
            books.rBLoading = true
            books.rBError = null
        },
        removeBookSuccess: (books, action) => {
            books.rBLoading = false
            books.list = action.payload
            books.success = true
        },
        removeBookError: (books, action) => {
            books.rBLoading = false
            books.rBError = action.payload
            books.success = false
        },
        reset: (books, action) => {
            books.gBLoading = false
            books.gBError = null
            books.success = false

            books.aBLoading = false
            books.aBError = null

            books.rBLoading = false
            books.rBError = null
        }
    }
})

export default slice.reducer

////////////////////////////////////////////////////////////////////
// Actions
///////////////////////////////////////////////////////////////////
const {
    getBooksError,
    getBooksRequest,
    getBooksSuccess,

    addBookError,
    addBookRequest,
    addBookSuccess,

    removeBookError,
    removeBookRequest,
    removeBookSuccess,
    reset
} = slice.actions

export const resetBooks = () => reset()

export const gettingBooks = () => dispatch => {
    dispatch(
        apiCallBegan({
            url: `/api/books`,
            onStart: getBooksRequest.type,
            onSuccess: getBooksSuccess.type,
            onError: getBooksError.type
        })
    )
}

export const addingBook = data => dispatch => {
    dispatch(
        apiCallBegan({
            url: '/api/add/book',
            data: data,
            method: "post",
            onStart: addBookRequest.type,
            onSuccess: addBookSuccess.type,
            onError: addBookError.type
        })
    )
}

export const removingBook = id => dispatch => {
    dispatch(
        apiCallBegan({
            url: `/api/delete/book/${id}`,
            method: "delete",
            onStart: removeBookRequest.type,
            onSuccess: removeBookSuccess.type,
            onError: removeBookError.type
        })
    )
}