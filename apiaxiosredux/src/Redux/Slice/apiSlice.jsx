import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'

export const postApi = createApi({
  reducerPath:"post",
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getPost: builder.query({
      url:'posts',
      method:"GET"
    }),
   
  }),
})

export const {useGetPostQuery}=postApi;