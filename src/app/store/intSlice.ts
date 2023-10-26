import { createSlice } from '@reduxjs/toolkit'
import { double_step, even_alg, triple_step, integrate_left, integrate_parabol, integrate_right, integrate_trapec } from '../appLogic/js/alg'

const initialState = {
    endpoint: '',
    value: {
        a: 0,
        b: 0,
        c: 0,
        d: 0,
        e: 0,
        n: 0,
        innteg: 0,
        result: 'Ответ',
    },
}

export const intState = createSlice({
    name: 'IntState',
    initialState,
    reducers: {
        updateA: (state, num) => {
            state.value.a = num.payload;
        },
        updateB: (state, num) => {
            state.value.b = num.payload;
        },
        updateC: (state, num) => {
            state.value.c = num.payload;
        },
        updateD: (state, num) => {
            state.value.d = num.payload;
        },
        updateE: (state, num) => {
            state.value.e = num.payload;
        },
        updateN: (state, num) => {
            state.value.n = num.payload;
        },
        updateInteg: (state, num) => {
            state.value.innteg = num.payload;
        },
        updateEndPoint: (state, num) => {
            state.endpoint = num.payload;
        },
        updateResult: (state) => {
            switch (state.endpoint) {
                case 'integrate_left':
                    state.value.result = String(integrate_left(state.value.a, state.value.b, state.value.innteg, state.value.n));
                    break
                case 'integrate_right':
                    state.value.result = String(integrate_right(state.value.a, state.value.b, state.value.innteg, state.value.n));
                    break
                case 'integrate_trapec':
                    state.value.result = String(integrate_trapec(state.value.a, state.value.b, state.value.innteg, state.value.n));
                    break
                case 'integrate_parabol':
                    state.value.result = String(integrate_parabol(state.value.a, state.value.b, state.value.innteg, state.value.n));
                    break
                case 'double_step':
                    state.value.result = String(double_step(state.value.a, state.value.b, state.value.e, state.value.innteg));
                    break
                case 'triple_step':
                    state.value.result = String(triple_step(state.value.a, state.value.b, state.value.e, state.value.innteg));
                    break
                case 'even_alg':
                    state.value.result = String(even_alg(state.value.a, state.value.b, state.value.c, state.value.d, state.value.innteg, state.value.n));
                    break
                default:
                    state.value.result = ':('
            }
        },
    },
})

export const { updateA, updateB, updateC, updateD, updateE, updateN, updateInteg, updateResult, updateEndPoint } = intState.actions

export default intState.reducer
