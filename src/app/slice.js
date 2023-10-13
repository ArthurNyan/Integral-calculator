// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   value: 'first_page',
// }

// export const pageState = createSlice({
//   name: 'page_state',
//   initialState,
//   reducers: {
//     update: (state) => {
//       state.value = ''
//       // state.value = 'int_page'
//       // console.log('Srabotal')
//     },
//     decrement: (state) => {
//       state.value += '1'
//     },
//   },
// })

// export const { update, decrement } = pageState.actions;

// export default pageState.reducer;

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'first_page',
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    update: (state) => {
      state.value = 'int_page'
    },
  },
})

export const { update } = counterSlice.actions

export default counterSlice.reducer