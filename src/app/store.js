import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import itemReducer from "../features/itemSlice";

export const store = configureStore({
    reducer: {
        item: itemReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});