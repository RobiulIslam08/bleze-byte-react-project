import React from 'react';
import {ScaleLoader} from 'react-spinner'

const Loader = () => {
    return (
        <div className='flex flex-col justify-center items-center min-h-[calc(503px)]'>
            <ScaleLoader></ScaleLoader>
            
        </div>
    );
};

export default Loader;