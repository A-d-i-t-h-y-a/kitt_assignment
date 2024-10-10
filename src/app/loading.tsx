import React from 'react'
import TopLoader from './TopLoader';
import "../app/globals.css"
import Image from 'next/image';

const Loading = () => {
    return (
        <>
            <TopLoader />
            <div className='flex justify-center mt-5'>
                <div className='flex flex-col outline outline-1 outline-gray-300 w-[30%] rounded-xl'>
                    <div className='p-5 flex items-center justify-center'>
                        <Image width="100" height="100" className='w-[100%] h-[90%] object-contain' src="/images/loadImage.gif" alt="Loading..." />
                    </div>
                    <div className='p-10'>
                        <ul className="max-w-md space-y-2 text-gray-500 list-inside dark:text-gray-400">
                            <li className="flex items-center">
                                <svg className="w-4 h-4 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                Searching 400+ flights
                            </li>
                            <li className="flex items-center">
                                <svg className="w-4 h-4 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                </svg>
                                Attaching Company Rules
                            </li>
                            <li className="flex items-center">
                                <div role="status">
                                    <svg className="w-4 h-4 me-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                                    </svg>
                                    <span className="sr-only">Loading...</span>
                                </div>
                                Serving Best Results
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Loading;

