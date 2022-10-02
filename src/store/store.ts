/**
 * Store data for board app
 */
import { configureStore } from "@reduxjs/toolkit";
import error from "./error";
import posts from "./posts";
import threads from "./threads";

// store
export const store = configureStore({
    reducer: {
        error, threads, posts
    },
});

// threads


// posts

// errors