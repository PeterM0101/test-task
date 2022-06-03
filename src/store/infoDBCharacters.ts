import { createSlice } from '@reduxjs/toolkit';
import Info from "../components/data-model/data-info";

export interface infoDBCharactersType {
    info : {
        count: number
        pages: number,
        currentURL: null | string
    },
}

const infoDBCharactersInitialState: infoDBCharactersType = {
    info: {
        count: 0,
        pages: 0,
        currentURL: null
    }
}

export const infoDBCharactersSlice = createSlice({
    name: 'infoDBCharacters',
    initialState: infoDBCharactersInitialState,
    reducers: {
        setInfo: (state: infoDBCharactersType, action) => {
            state.info =  action.payload
        },
        changeCurrent: (state: infoDBCharactersType, action) => {
            state.info.currentURL = action.payload
        }
    }
});

export const infoDBCharactersActions = infoDBCharactersSlice.actions;