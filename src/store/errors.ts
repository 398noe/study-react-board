import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { responseError } from "../types/util";
import { RootState } from "./store";

const initialState: responseError = {
    ErrorCode: null,
    ErrorMessageJP: null,
    ErrorMessageEN: null
}

const slice = createSlice({
    name: "errors",
    initialState,
    reducers: {
        setErrors: (state, action: PayloadAction<responseError>) => {
            return action.payload;
        },
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        resetErrors: (state) => {
            return initialState
        }
    }
});

export const { setErrors, resetErrors } = slice.actions;

/**
 * ここでstoreの中の値をexportすることを忘れずに
 * @param state 
 * @returns 
 */
export const errors = (state: RootState) => {
    return state.errors;
}

export default slice.reducer;
