import { createSlice } from '@reduxjs/toolkit';

export interface infoDBCharactersType {
    count: number,
    currentURL: null | string,
    currentPage: number
}

const infoDBCharactersInitialState: infoDBCharactersType = {
    count: 0,
    currentURL: null,
    currentPage: 1
}

export const infoDBCharactersSlice = createSlice({
    name: 'infoDBCharacters',
    initialState: infoDBCharactersInitialState,
    reducers: {
        setInfo: (state: infoDBCharactersType, action) => {
            state =  action.payload
        },
        changeCurrentURL: (state: infoDBCharactersType, action) => {
            state.currentURL = action.payload
        },
        setCount: (state: infoDBCharactersType, action) => {
            state.count = action.payload
        },
        setCurrentPage: (state: infoDBCharactersType, action) => {
            state.currentPage = action.payload
        }
    }
});

export const infoDBCharactersActions = infoDBCharactersSlice.actions;