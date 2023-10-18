import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'first_page',
}

export const pageState = createSlice({
  name: 'PageState',
  initialState,
  reducers: {
    update: (state) => {
      state.value = 'int_page'
    },
  },
})

export const { update } = pageState.actions

export default pageState.reducer
