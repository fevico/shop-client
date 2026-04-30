import type { RootState } from "@/store/store";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:5000/api",
        prepareHeaders: (headers, {getState}) => {
        const state = getState() as RootState;
        const token = state.auth?.token;
            if (token) {
                headers.set("Authorization", `Bearer ${token}`)
            }
            return headers
        }
    }),
    tagTypes: ['User', 'Auth'],
    endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/login',
        method: 'POST',
        body: credentials,
      }),
      // After login, invalidate auth cache to refresh
      invalidatesTags: ['Auth'],
    }),
    })
})

export const {useLoginMutation} = apiSlice