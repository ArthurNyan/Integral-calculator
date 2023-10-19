import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value: {
        a: 0,
        b: 0,
        innteg: 0
    },
}

export const intState = createSlice({
    name: 'IntState',
    initialState,
    reducers: {
        updateA: (state, num) => {
            state.value.a = num.payload
        },
        updateB: (state, num) => {
            state.value.b = num.payload
        },
        updateInteg: (state, num) => {
            state.value.innteg = num.payload
        },
    },
})

export const { updateA, updateB, updateInteg } = intState.actions

export default intState.reducer
