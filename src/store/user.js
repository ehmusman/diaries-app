import { createSlice } from "@reduxjs/toolkit"
import { apiCallBegan } from "./api"

const slice = createSlice({
    name: "user",
    initialState: {
        user: null,
        loading: false,
        error: null
    },
    reducers: {
        signupUserRequest: (user, action) => {
            user.loading = true
        },
        signupUserSuccess: (user, action) => {
            user.loading = false
            user.user = action.payload
        },
        signupUserError: (user, action) => {
            user.loading = false
            user.error = action.payload
        },
        loginUserRequest: (user, action) => {
            user.loading = true
        },
        loginUserSuccess: (user, action) => {
            user.loading = false
            user.user = action.payload
        },
        loginUserError: (user, action) => {
            user.loading = false
            user.error = action.payload
        },
        reset: (user, action) => {
            user.loading = false
            user.error = null
        }
    }
})

export default slice.reducer

////////////////////////////////////////////////////////////////////
// Actions
///////////////////////////////////////////////////////////////////
const {
    reset,
    signupUserError,
    signupUserRequest,
    signupUserSuccess,
    loginUserError,
    loginUserRequest,
    loginUserSuccess
} = slice.actions

export const resetUsers = () => reset()

export const login = data => dispatch => {
    dispatch(
        apiCallBegan({
            url: '/api/login',
            data: data,
            method: "post",
            onStart: loginUserRequest.type,
            onSuccess: loginUserSuccess.type,
            onError: loginUserError.type
        })
    )
}
export const signUp = data => dispatch => {
    dispatch(
        apiCallBegan({
            url: '/api/signup',
            data: data,
            method: "post",
            onStart: signupUserRequest.type,
            onSuccess: signupUserSuccess.type,
            onError: signupUserError.type
        })
    )
}
