import {useEffect, useState} from 'react';
import Interfaces from "./data-model/interfaces";
import DataInfo from "./data-model/data-info";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../store";
import {fillFilterOptions} from "../utils/fillFilterOptions";
import {filtersActions} from "../store/filtersSlice";
import {httpStatusActions} from "../store/httpStatus";
import {infoDBCharactersActions} from "../store/infoDBCharacters";

const InitFilters = () => {
    const [characters, setCharacters] = useState<Interfaces[]>([]);
    const [info, setInfo] = useState<DataInfo | null>(null);
    const [url, setUrl] = useState<string>(`${process.env.REACT_APP_CHARACTERS_URL}/?page=1`);
    const dispatch = useDispatch<AppDispatch>();

    useEffect(
        () => {
            dispatch(httpStatusActions.setIsLoading(true));
            const getCharacters = async (url: string) => {
                const response = await fetch(url);
                if (!response.ok) {
                    dispatch(httpStatusActions.setIsLoading(true));
                    dispatch(httpStatusActions.setError('Something goes wrong...'));
                    throw new Error('Something goes wrong...')
                }
                const data = await response.json();
                setCharacters((_characters) => {
                    return [..._characters, ...data.results];
                });
                setInfo(data.info);
                setUrl(data.info.next)
            }

            if (url !== null) {
                getCharacters(url)
            } else {
                const { genderOptions, speciesOptions, statusOptions } = fillFilterOptions(characters);
                dispatch(httpStatusActions.setIsLoading(false));
                dispatch(filtersActions.setFilterOptions({
                    genderOptions: [...genderOptions, 'empty'],
                    speciesOptions: [...speciesOptions, 'empty'],
                    statusOptions: [...statusOptions, 'empty']
                }));
                dispatch(infoDBCharactersActions.setCount(info?.count))
                dispatch(infoDBCharactersActions.changeCurrentURL(`${process.env.REACT_APP_CHARACTERS_URL}/?page=1`))
            }
        }, [url]
    )
    return null;
};

export default InitFilters;