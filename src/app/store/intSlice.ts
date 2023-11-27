import { createSlice } from '@reduxjs/toolkit'
import { Ailer_first_order, Ailer_second_order, Ruk_first_order, Ruk_second_order, double_step, even_alg, integrate_left, integrate_parabol, integrate_right, integrate_trapec, triple_step } from '../appLogic/js/alg';

const initialState = {
    value: {
        a: null,
        b: null,
        c: null,
        d: null,
        e: null,
        n: null,
        x: null,
        y: null,
        equation: null,
        result: 'Ответ',
    }
};

export const intState = createSlice({
    name: 'IntState',
    initialState,
    reducers: {
        updateValue: (state, action) => {
            console.log(action.payload);
            state.value = { ...state.value, ...action.payload };
        },
        updateResult: (state, action) => {
            console.log(action.payload)
            switch (action.payload) {
                case 'integrate_left':
                    state.value.result = String(integrate_left(state.value.a, state.value.b, state.value.equation, state.value.n));
                    break
                case 'integrate_right':
                    state.value.result = String(integrate_right(state.value.a, state.value.b, state.value.equation, state.value.n));
                    break
                case 'integrate_trapec':
                    state.value.result = String(integrate_trapec(state.value.a, state.value.b, state.value.equation, state.value.n));
                    break
                case 'integrate_parabol':
                    state.value.result = String(integrate_parabol(state.value.a, state.value.b, state.value.equation, state.value.n));
                    break
                case 'double_step':
                    state.value.result = String(double_step(state.value.a, state.value.b, state.value.e, state.value.equation));
                    break
                case 'triple_step':
                    state.value.result = String(triple_step(state.value.a, state.value.b, state.value.e, state.value.equation));
                    break
                case 'even_alg':
                    state.value.result = String(even_alg(state.value.a, state.value.b, state.value.c, state.value.d, state.value.equation, state.value.n));
                    break
                case 'Ailer_first_order':
                    state.value.result = String(Ailer_first_order(state.value.a, state.value.b, state.value.y, state.value.equation, state.value.n));
                    break
                case 'Ailer_second_order':
                    state.value.result = String(Ailer_second_order(state.value.a, state.value.b, state.value.y, state.value.d, state.value.equation, state.value.n));
                    break
                case 'Ruk_first_order':
                    state.value.result = String(Ruk_first_order(state.value.a, state.value.b, state.value.y, state.value.equation, state.value.n));
                    break
                case 'Ruk_second_order':
                    state.value.result = String(Ruk_second_order(state.value.a, state.value.b, state.value.y, state.value.d, state.value.equation, state.value.n));
                    break
                default:
                    state.value.result = ':('
            }
        },
    },
});

export const { updateValue, updateResult } = intState.actions

export default intState.reducer
