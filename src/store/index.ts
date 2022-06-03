import { configureStore } from '@reduxjs/toolkit'
import {filtersSlice} from "./filtersSlice";
import {httpStatusSlice} from "./httpStatus";
import {infoDBCharactersSlice} from "./infoDBCharacters";

const store = configureStore({
    reducer: {
        filters: filtersSlice.reducer,
        httpStatus: httpStatusSlice.reducer,
        info: infoDBCharactersSlice.reducer
    },
    devTools: true,
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch