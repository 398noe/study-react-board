import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { threads } from "../types/threads";

const initialState: threads = [];

const slice = createSlice({
    name: "threads",
    initialState,
    reducers: {
        setThreads: (state, action: PayloadAction<threads>) => {
            return action.payload;
        }
    }
});

export default slice.reducer;

export const { setThreads } = slice.actions;