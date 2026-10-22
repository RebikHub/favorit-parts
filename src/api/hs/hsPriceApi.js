import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseUrl = import.meta.env.VITE_API_PARTS
const key = import.meta.env.VITE_API_KEY


export const hsPriceApi = createApi({
  reducerPath: 'hsPriceApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getSearchPrice: builder.query({
      query: (params) => ({
        url: `/hs/hsprice/`,
        params: {
          key,
          analogues: params?.number && params?.brand ? 'on' : undefined,
          ...params
        }
      }),
    }),
  }),
})


export const { useGetSearchPriceQuery } = hsPriceApi
