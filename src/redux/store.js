import {configureStore} from "@reduxjs/toolkit";

import {moviesReducer, themeReducer} from "./slice";

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        theme:themeReducer
    }
});

export {
    store
}