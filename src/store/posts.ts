import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { posts } from "../types/posts";

const initialState: posts = [];

const slice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        setPosts: (state, action: PayloadAction<posts>) => {
            return action.payload;
        }
    }
});

export default slice.reducer;

export const { setPosts } = slice.actions;