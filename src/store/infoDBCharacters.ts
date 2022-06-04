import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface InfoDBCharactersType {
    count: number,
    currentURL: null | string,
    currentPage: number
}

const infoDBCharactersInitialState: InfoDBCharactersType = {
    count: 0,
    currentURL: null,
    currentPage: 1
}

export const infoDBCharactersSlice = createSlice({
    name: 'infoDBCharacters',
    initialState: infoDBCharactersInitialState,
    reducers: {
        setInfo: (state: InfoDBCharactersType, action: PayloadAction<InfoDBCharactersType>) => {
            state =  action.payload
        },
        changeCurrentURL: (state: InfoDBCharactersType, action: PayloadAction<string | null>) => {
            state.currentURL = action.payload
        },
        setCount: (state: InfoDBCharactersType, action: PayloadAction<number>) => {
            state.count = action.payload
        },
        setCurrentPage: (state: InfoDBCharactersType, action: PayloadAction<number>) => {
            state.currentPage = action.payload
        }
    }
});

export const infoDBCharactersActions = infoDBCharactersSlice.actions;