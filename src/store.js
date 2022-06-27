import {configureStore} from "@reduxjs/toolkit";
import {filterReducer} from "./features/filter/filter-silce";
import {positionReducer} from "./features/positions/postion-slice";

export const store = configureStore({
    reducer: {
        filters: filterReducer,
        positions: positionReducer,
    },
    devTools: true,
})