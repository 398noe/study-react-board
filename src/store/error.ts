import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
    response: ""
};

const slice = createSlice({
    name: "error",
    initialState,
    reducers: {
        setError: (state, action: PayloadAction<string>) => {
            return { response: action.payload };
        }
    }
});

export default slice.reducer;

export const { setError } = slice.actions;