import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    name: "",
    email: "",
    token: "",
    role: "",
    isLoading: false,
    error: null
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        loginStart(state) {
            state.isLoading = true
            state.error = null
        },
        loginSuccess(state, action){
            state.isAuthenticated = true
            state.name = action.payload.name
            state.email = action.payload.email
            state.token = action.payload.token
            state.role = action.payload.role
            state.isLoading = false
        },
        loginFailure(state, action) {
            state.isAuthenticated = false
            state.name = ""
            state.email = ""
            state.token = ""
            state.role = ""
            state.isLoading = false
            state.error = action.payload
        },
        logoutAction(state) {
            state.isAuthenticated = false
            state.name = ""
            state.email = ""
            state.token = ""
            state.role = ""
            state.isLoading = false
            state.error = null
        }
    }
})

export const {loginStart, loginSuccess, loginFailure, logoutAction} = authSlice.actions

export default authSlice.reducer