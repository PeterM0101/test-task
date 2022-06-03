import { configureStore } from '@reduxjs/toolkit'
import {filtersSlice} from "./filtersSlice";
import {httpStatusSlice} from "./httpStatus";

const store = configureStore({
    reducer: {
        filters: filtersSlice.reducer,
        httpStatus: httpStatusSlice.reducer
    },
    devTools: true,
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch