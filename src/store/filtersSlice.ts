import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface FilterOptions {
    genderOptions: string[],
    speciesOptions: string[],
    statusOptions: string[],
}

export interface SelectedFiltersState {
    [key: string]: string
}

export interface FiltersStateType {
    filtersOptions: FilterOptions,
    filtersState: SelectedFiltersState | null
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
        setFilterOptions: (state: FiltersStateType, action: PayloadAction<FilterOptions>) => {
            state.filtersOptions =  action.payload
        },
        setFilters: (state: FiltersStateType, action: PayloadAction<SelectedFiltersState | null>) => {
            state.filtersState = action.payload
        },
        resetFilters: (state: FiltersStateType) => {
            state.filtersState = null
        }
    }
});

export const filtersActions = filtersSlice.actions;