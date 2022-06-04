import {createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface HttpStatusStateType {
    isLoading: boolean,
    errorMessage: string | null,
}

const httpStatusInitialState: HttpStatusStateType = {
    isLoading: false,
    errorMessage: null,
}

export const httpStatusSlice = createSlice({
    name: 'httpStatus',
    initialState: httpStatusInitialState,
    reducers: {
        setIsLoading: (state: HttpStatusStateType, action: PayloadAction<boolean>) => {
            state.isLoading =  action.payload
        },
        setError: (state: HttpStatusStateType, action: PayloadAction<string | null>) => {
            state.errorMessage = action.payload
        }
    }
});

export const httpStatusActions = httpStatusSlice.actions;