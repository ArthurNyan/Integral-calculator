// import { configureStore } from '@reduxjs/toolkit'
// import pageState from './slice'
// export const store = configureStore({
//   reducer: {
//     pageState: pageState,
//   },
// })

import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch