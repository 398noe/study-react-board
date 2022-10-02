import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { responseError } from "../types/util";

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
        }
    }
});

export const { setErrors } = slice.actions;

export default slice.reducer;
