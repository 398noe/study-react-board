/**
 * Store data for board app
 */
import { configureStore } from "@reduxjs/toolkit";
import { useSelector as rawUseSelector, TypedUseSelectorHook } from "react-redux";
import errors from "./errors";
import posts from "./posts";
import threads from "./threads";

// store
export const store = configureStore({
    reducer: {
        errors,
        threads,
        posts,
    },
});

/**
 * DispatchやState, selectorを使うのに型を拡張する
 */
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;
