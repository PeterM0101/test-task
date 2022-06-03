import React, {useEffect, useMemo, useState} from 'react';
import Pagination from "../shared/paginator/Pagination";
import {httpStatusActions} from "../../store/httpStatus";
import {useDispatch, useSelector} from "react-redux";
import Interfaces from "../data-model/interfaces";
import DataInfo from "../data-model/data-info";
import {RootState} from "../../store";
import {infoDBCharactersActions} from "../../store/infoDBCharacters";
import Character from "../character/Character";

const Characters = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const dispatch = useDispatch();
    const [characters, setCharacters] = useState<Interfaces[]>([]);
    const {currentURL, count} = useSelector((state: RootState) => state.info.info)

    useEffect(
        () => {
            dispatch(httpStatusActions.setIsLoading(true));
            const getCharacters = async () => {
                const response = await fetch(currentURL!);
                if (!response.ok) {
                    throw new Error('Something goes wrong...')
                    dispatch(httpStatusActions.setIsLoading(true));
                    dispatch(httpStatusActions.setError('Something goes wrong...'));
                }
                const data = await response.json();
                setCharacters(data.results);
                dispatch(httpStatusActions.setIsLoading(false));
            }
            if (currentURL !== null) getCharacters()
        }, [currentURL]
    )

    const handlePageChange = (page: number) => {
        dispatch(infoDBCharactersActions.changeCurrent(`https://rickandmortyapi.com/api/character?page=${page}`))
        setCurrentPage(page)
    }

    return (
        <div className='characters'>
            {characters && characters.length>0 && (<Pagination
                className="pagination-bar"
                currentPage={currentPage}
                siblingCount={1}
                totalCount={count}
                pageSize={20}
                onPageChange={handlePageChange}
            />)}
            <div className='characters__container'>
                {characters && characters.map((character:Interfaces ) => (
                    <Character key={character.id} image={character.image} name={character.name} status={character.status}/>
                ))}
            </div>
        </div>
    );
};

export default Characters;