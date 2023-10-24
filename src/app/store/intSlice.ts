import { createSlice } from '@reduxjs/toolkit'
import { double_step, even_alg, hz_step, integrate_left, integrate_parabol, integrate_right, integrate_trapec } from '../appLogic/js/alg'

const initialState = {
    endpoint: '',
    value: {
        a: 0,
        b: 0,
        c: 0,
        d: 0,
        e: 0,
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
        updateInteg: (state, num) => {
            state.value.innteg = num.payload;
        },
        updateEndPoint: (state, num) => {
            state.endpoint = num.payload;
        },
        updateE: (state, num) => {
            state.value.e = num.payload;
        },
        updateResult: (state) => {
            switch (state.endpoint) {
                case 'integrate_left':
                    state.value.result = String(integrate_left(state.value.a, state.value.b, state.value.innteg));
                    break
                case 'integrate_right':
                    console.log(String(integrate_right(state.value.a, state.value.b, state.value.innteg)))
                    state.value.result = String(integrate_right(state.value.a, state.value.b, state.value.innteg));
                    break
                case 'integrate_trapec':
                    state.value.result = String(integrate_trapec(state.value.a, state.value.b, state.value.innteg));
                    break
                case 'integrate_parabol':
                    state.value.result = String(integrate_parabol(state.value.a, state.value.b, state.value.innteg));
                    break
                case 'double_step':
                    state.value.result = String(double_step(state.value.a, state.value.b, state.value.e, state.value.innteg));
                    break
                case 'hz_step':
                    state.value.result = String(hz_step(state.value.a, state.value.b, state.value.e, state.value.innteg));
                    break
                case 'even_alg':
                    state.value.result = String(even_alg(state.value.a, state.value.b, state.value.c, state.value.d, state.value.innteg));
                    break
                default:
                    state.value.result = ':('
            }
        },
    },
})

export const { updateA, updateB, updateC, updateD, updateE, updateInteg, updateResult, updateEndPoint } = intState.actions

export default intState.reducer
