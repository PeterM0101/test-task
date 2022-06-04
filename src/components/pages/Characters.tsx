import React, {useEffect, useState} from 'react';
import Pagination from "../shared/paginator/Pagination";
import {httpStatusActions} from "../../store/httpStatus";
import {useDispatch, useSelector} from "react-redux";
import Interfaces from "../data-model/interfaces";
import {RootState} from "../../store";
import {infoDBCharactersActions} from "../../store/infoDBCharacters";
import Character from "../character/Character";
import newURL from "../../utils/newURL";
import Filters from "../Filters/Filters";

const Characters = () => {
    const dispatch = useDispatch();
    const [characters, setCharacters] = useState<Interfaces[]>([]);
    const {currentURL, count, currentPage} = useSelector((state: RootState) => state.info);
    const isLoading = useSelector((state: RootState) => state.httpStatus.isLoading)
    const {filtersState} = useSelector((state: RootState) => state.filters)

    useEffect(
        () => {
            dispatch(httpStatusActions.setIsLoading(true));
            const getCharacters = async () => {
                const response = await fetch(currentURL!);

                if (!response.ok && response.status !== 404) {
                    dispatch(httpStatusActions.setIsLoading(false));
                    dispatch(httpStatusActions.setError('Something goes wrong...'));
                    throw new Error('Something goes wrong...')
                }
                const data = await response.json();
                if (response.status !== 404) {
                    setCharacters(data.results);
                    dispatch(infoDBCharactersActions.setCount(data.info.count))
                } else {
                    setCharacters([])
                    dispatch(infoDBCharactersActions.setCount(0))
                }
                dispatch(httpStatusActions.setIsLoading(false));
            }
            if (currentURL !== null) getCharacters()
        }, [currentURL]
    )

    const handlePageChange = (page: number) => {
        dispatch(infoDBCharactersActions.changeCurrentURL(newURL(page, filtersState)))
        dispatch(infoDBCharactersActions.setCurrentPage(page))
    }

    return (
        <div className='characters'>
            <div className='characters__sidebar'>
                <Filters />
            </div>
            <div className='characters__content'>
                <div className='characters__paginator'>
                    {characters && characters.length>0 && (<Pagination
                        className="pagination-bar"
                        currentPage={currentPage}
                        siblingCount={1}
                        totalCount={count}
                        pageSize={20}
                        onPageChange={handlePageChange}
                    />)}
                </div>
                <div className='characters__container'>
                    {(count === 0 && characters.length === 0 && !isLoading) && (<p>There is nothing here...</p>)}
                    {characters && characters.map((character:Interfaces ) => (
                        <Character key={character.id} image={character.image} name={character.name} status={character.status}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Characters;