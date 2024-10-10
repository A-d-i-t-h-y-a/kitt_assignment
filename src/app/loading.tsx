import React from 'react'
import TopLoader from './TopLoader';

const Loading = () => {
    return (
        <>
            <TopLoader />
            <div>
                <img
                    src="D:\Kitt Assignment\kitt_assignment\src\app\components\flights\loadImage.gif"
                    alt="Loading..."
                />
            </div>
        </>
    );
}

export default Loading;

