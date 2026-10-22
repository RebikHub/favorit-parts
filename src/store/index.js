import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { hsPriceApi } from '../api'


export const store = configureStore({
  reducer: {
    [hsPriceApi.reducerPath]: hsPriceApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(hsPriceApi.middleware),
})

setupListeners(store.dispatch)
