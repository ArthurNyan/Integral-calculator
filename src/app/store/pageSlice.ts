import { createSlice } from "@reduxjs/toolkit";
import { FormParams } from "../../shared/assets/lib/formParams";

const initialState = {
    value: {
        pageState: '',
        endpoit: '',
        postParams: '',
        preParams: '',
        activeDef: false,
        double: false,
    },
};

export const pageSlice = createSlice({
    name: 'pageSlice',
    initialState,
    reducers: {
        updateState: (state, action) => {
            state.value = { ...state, ...action.payload }
        }
    }
})

export const { updateState } = pageSlice.actions;

export default pageSlice.reducer