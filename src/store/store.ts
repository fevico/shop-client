import {configureStore} from "@reduxjs/toolkit";
import authReducer from "../store/slice/authSlice";
import { apiSlice } from "@/services/api";
import storage from 'redux-persist/es/storage';
import { persistReducer, persistStore } from 'redux-persist';

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


const authPersistConfig = {
  key: 'auth',           // Key in localStorage
  storage,               // Storage mechanism (localStorage)
  whitelist: ['token', 'name', 'email', 'isAuthenticated', 'role'], // Only persist these fields
};

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);


export const store = configureStore({
    reducer: {
      auth: persistedAuthReducer,  // ← Only auth is persisted
      [apiSlice.reducerPath]: apiSlice.reducer,  // ← API is NOT persisted
},
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
                  serializableCheck: {
                // IGNORE these Redux Persist actions
        ignoredActions: ["persist/PERSIST", "persist/REHYDRATE"],
      },
    }).concat(apiSlice.middleware),
})

// setupListeners(store.dispatch);

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type AppRootState = ReturnType<typeof store.getState>;
