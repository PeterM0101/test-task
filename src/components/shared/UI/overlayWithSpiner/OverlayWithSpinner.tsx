import React from 'react';
import Spinner from "../spinner/Spinner";
import {useSelector} from "react-redux";
import {RootState} from "../../../../store";

const OverlayWithSpinner = () => {
    const isLoading = useSelector((state: RootState) => state.httpStatus.isLoading)
    return (
        <>
            { isLoading && <div className='overlay-with-spinner'>
                <Spinner />
            </div> }
        </>
    );
};

export default OverlayWithSpinner;