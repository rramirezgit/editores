import { configureStore } from '@reduxjs/toolkit'
import newsletterReducer from './slices/newsletter'

export const store = configureStore({
  reducer: {
    newsletter: newsletterReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
