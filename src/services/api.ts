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
    tagTypes: ['User', 'Auth', 'Categories', 'Products', 'Payments', 'Orders'],
    endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
      // After login, invalidate auth cache to refresh
      invalidatesTags: ['Auth'],
    }),
    signup: builder.mutation({
      query: (credentials) => ({
        url: '/auth/register',
        method: 'POST',
        body: credentials,
      }),
      // After registration, invalidate auth cache to refresh
      invalidatesTags: ['Auth'],
    }),
    verifyEmail: builder.mutation({
      query: (credentials) => ({
        url: '/auth/verify-email',
        method: 'POST',
        body: credentials,
      }),
      // After registration, invalidate auth cache to refresh
      invalidatesTags: ['Auth'],
    }),
    createCategory: builder.mutation({
      query: (credentials) => ({
        url: '/categories',
        method: 'POST',
        body: credentials,
      }),
      // After registration, invalidate auth cache to refresh
      invalidatesTags: ['Categories'],
    }),

    createProduct: builder.mutation({
      query: (credentials) => ({
        url: '/products',
        method: 'POST',
        body: credentials,
      }),
      // After registration, invalidate auth cache to refresh
      invalidatesTags: ['Products'],
    }),

    getCategories: builder.query<any, void>({
      query: () => '/categories',
      providesTags: ['Categories'],
    }),

    getProducts: builder.query<any, void>({
      query: () => '/products',
      providesTags: ['Products'],
    }),
  getProductDetails: builder.query({
  query: (id) => `/products/${id}`,
  providesTags: ["Products"],
  }),

  paymentIntent: builder.mutation({
      query: (credentials) => ({
        url: '/payment/intent',
        method: 'POST',
        body: credentials,
      }),
      // After registration, invalidate auth cache to refresh
      invalidatesTags: ['Payments'],
    }),

  getMyOrders: builder.query({
  query: () => `/payment/my-orders`,
  providesTags: ["Payments"],
  }),

  getAdminDashboardStats: builder.query({
  query: () => '/payment/admin/dashboard-stats',
  providesTags: ["Payments"],
  }),

  getOrders: builder.query({
  query: () => "/payment/orders",
  providesTags: ["Payments"],
  }),

  deleteOrder: builder.mutation({
  query: (orderId: string) => ({
    url: `/orders/${orderId}`,
    method: "DELETE",
  }),
  invalidatesTags: ["Orders"],
}),

updateOrderStatus: builder.mutation({
  query: ({ orderId, status }) => ({
    url: `payment/orders/${orderId}/status`,
    method: "PATCH",
    body: { status },
  }),
  invalidatesTags: ["Orders"],
}),

  })
})

export const {
useLoginMutation, 
useSignupMutation, 
useVerifyEmailMutation, 
useCreateCategoryMutation,
useCreateProductMutation,
useGetCategoriesQuery,
useGetProductsQuery,
useGetProductDetailsQuery,
usePaymentIntentMutation,
useGetMyOrdersQuery,
useGetAdminDashboardStatsQuery,
useGetOrdersQuery,
useDeleteOrderMutation,
useUpdateOrderStatusMutation
} = apiSlice