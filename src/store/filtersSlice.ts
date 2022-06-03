import { createSlice } from '@reduxjs/toolkit';

export interface FiltersStateType {
    filtersOptions: {
        genderOptions: string[],
        speciesOptions: string[],
        statusOptions: string[],
    },
    filtersState: {
        selectedGender: string,
        selectedStatus: string,
        selectedSpecies: string
    } | null
}

const filtersInitialState: FiltersStateType = {
    filtersOptions: {
        genderOptions: [],
        speciesOptions: [],
        statusOptions: []
    },
    filtersState: null
}

export const filtersSlice = createSlice({
    name: 'filters',
    initialState: filtersInitialState,
    reducers: {
        setFilterOptions: (state: FiltersStateType, action) => {
            state.filtersOptions =  action.payload
        },
        setFilters: (state: FiltersStateType, action) => {
            state.filtersState = action.payload
        },
        resetFilters: (state: FiltersStateType) => {
            state.filtersState = null
        }
    }
});

export const filtersActions = filtersSlice.actions;