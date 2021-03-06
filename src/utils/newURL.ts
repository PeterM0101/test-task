import {SelectedFiltersState} from "../store/filtersSlice";

const newURL = (page: number, filtersObject: SelectedFiltersState | null): string => {
    let filtersArray: [string, string][] = []
    if (filtersObject !== null) {
        filtersArray = Array.from(Object.entries(filtersObject).filter(( item) => item[1] !== 'empty'));
    }
    const newSearchParams = new URLSearchParams([['page', page.toString()], ...filtersArray])
    return `${process.env.REACT_APP_CHARACTERS_URL}/?${newSearchParams}`
}

export default newURL;