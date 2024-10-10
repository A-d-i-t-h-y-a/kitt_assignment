import React from 'react'

export default async function Flights() {
    await new Promise(res => setTimeout(res, 3000));
    const airportsData = {
        "airports": [
            {
                "name": "Indira Gandhi International Airport",
                "code": "DEL",
                "city": "New Delhi",
                "country": "India"
            },
            {
                "name": "Chhatrapati Shivaji Maharaj International Airport",
                "code": "BOM",
                "city": "Mumbai",
                "country": "India"
            },
            {
                "name": "John F. Kennedy International Airport",
                "code": "JFK",
                "city": "New York",
                "country": "United States"
            },
            {
                "name": "Dubai International Airport",
                "code": "DXB",
                "city": "Dubai",
                "country": "United Arab Emirates"
            },
            {
                "name": "Heathrow Airport",
                "code": "LHR",
                "city": "London",
                "country": "United Kingdom"
            },
            {
                "name": "Singapore Changi Airport",
                "code": "SIN",
                "city": "Singapore",
                "country": "Singapore"
            },
            {
                "name": "Los Angeles International Airport",
                "code": "LAX",
                "city": "Los Angeles",
                "country": "United States"
            },
            {
                "name": "Beijing Capital International Airport",
                "code": "PEK",
                "city": "Beijing",
                "country": "China"
            },
            {
                "name": "Sydney Kingsford Smith International Airport",
                "code": "SYD",
                "city": "Sydney",
                "country": "Australia"
            },
            {
                "name": "Tokyo Haneda Airport",
                "code": "HND",
                "city": "Tokyo",
                "country": "Japan"
            }
        ]
    }
    return (
        <>
            <div className='flex px-56 items-center justify-between outline outline-1 p-5'>
                <div className='ps-3 py-2 flex space-x-4 rounded-full items-center outline outline-1 outline-gray-300'>
                    <div className='ps-3' id='src'>SRC</div>
                    <div className='h-7 w-[1px] bg-gray-300'></div>
                    <div id='dest'>DEST</div>
                    <div className='h-7 w-[1px] bg-gray-300'></div>
                    <div id='dates'>Deaprture - Return</div>
                    <div className='h-7 w-[1px] bg-gray-300'></div>
                    <div className='pe-3' id='search'><span className="inline-flex box-border rounded-full p-3 bg-slate-100"><svg className="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                    </svg></span></div>
                </div>
                <div className='inline-flex box-border rounded-full p-4 outline outline-1 outline-gray-300'>
                    <svg className='w-6 text-gray-500' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
            </div>
        </>
    )
}
