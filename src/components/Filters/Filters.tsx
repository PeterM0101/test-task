import React, {ChangeEvent, FC, FormEvent, useState} from 'react';
import Select from "../shared/UI/select/Select";
import Button from "../shared/UI/button/Button";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../store";
import {filtersActions} from "../../store/filtersSlice";
import {infoDBCharactersActions} from "../../store/infoDBCharacters";
import newURL from "../../utils/newURL";


export interface FiltersObj {
    genderOptions: string[],
    speciesOptions: string[],
    statusOptions: string[]
}

const filtersInitialState = {"gender": "empty", "species": "empty", "status": "empty"}

const Filters: FC = () => {
    const [filterValues, setFilterValues] = useState<{[key: string]: string}>(filtersInitialState);
    const {genderOptions, speciesOptions, statusOptions} = useSelector((state: RootState) => state.filters.filtersOptions)
    const dispatch = useDispatch<AppDispatch>()

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setFilterValues(prev => ({...(prev === null ? {} : prev), [e.target.name]: e.target.value}))
    }

    const handleSubmitFilters = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(filtersActions.setFilters(filterValues));
        dispatch(infoDBCharactersActions.changeCurrentURL(newURL(1, filterValues)))
        dispatch(infoDBCharactersActions.setCurrentPage(1))
    }

    const handleResetFilters = () => {
        setFilterValues(filtersInitialState);
        dispatch(filtersActions.resetFilters())
        dispatch(infoDBCharactersActions.changeCurrentURL(newURL(1, filtersInitialState)))
        dispatch(infoDBCharactersActions.setCurrentPage(1))
    }

    return (
        <form className='filters' onSubmit={handleSubmitFilters}>

            <h1 className='filters__title'>Filters: </h1>
            <Select
                options={genderOptions}
                selectedOption={filterValues['gender']}
                onChange={handleChange}
                name='gender'
                className='filters__select'
            />
            <Select
                options={speciesOptions}
                selectedOption={filterValues['species']}
                onChange={handleChange}
                name='species'
                className='filters__select'
            />
            <Select
                options={statusOptions}
                selectedOption={filterValues['status']}
                onChange={handleChange}
                name='status'
                className='filters__select'
            />

            <div className='filters__cta'>
                <Button type='submit' className='btn btn--primary' label='Search'/>
                <Button type='button' className='btn btn--secondary' label='Reset Filter' onClick={handleResetFilters}/>
            </div>

        </form>
    );
};

export default Filters;