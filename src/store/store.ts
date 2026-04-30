import {configureStore} from "@reduxjs/toolkit";
import authReducer from "../store/slice/authSlice";
import { apiSlice } from "@/services/api";

export type RootState = {
  api: ReturnType<typeof apiSlice.reducer>;
  auth: {
    name: string | null;
    email: string | null;
    token: string | null;
    isAuthenticated: boolean;
    isLoading: boolean;
    error: string | null; 
  };
};

export const store = configureStore({
    reducer: {
        auth: authReducer,
        api: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),

})

export type AppDispatch = typeof store.dispatch;
export type AppRootState = ReturnType<typeof store.getState>;
