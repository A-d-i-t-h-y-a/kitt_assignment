"use client"

// src/Components/Home.tsx
import { useState } from "react";
import { ArrowsRightLeftIcon } from '@heroicons/react/24/solid';

const Home = () => {
    // State for handling search button click and results
    const [isLoading, setIsLoading] = useState(false);
    const [results, setResults] = useState([]);

    // Simulated data for flights
    const flightResults = [
        {
            id: 1,
            airline: "Emirates",
            flightNumber: "AT 4334",
            time: "9:45 AM - 11:45 AM",
            duration: "2h 10min",
            stops: "Non stop",
            price: "AED 2,456.90",
        },
        {
            id: 2,
            airline: "Lufthansa",
            flightNumber: "AT 4334",
            time: "11:45 PM - 6:45 AM",
            duration: "4h 10min",
            stops: "2 stops",
            price: "AED 1,456.90",
        },
        // Add more flight results as needed
    ];

    // Handler for the Search Flights button
    const handleSearchFlights = () => {
        setIsLoading(true);

        // Simulate loading time, then display results
        setTimeout(() => {
            setIsLoading(false);
            setResults(flightResults); // Set the simulated flight data
        }, 3000); // Adjust the delay according to your actual API call duration
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            {/* Loading screen */}
            {isLoading ? (
                <div className="flex flex-col items-center justify-center space-y-4 bg-white rounded-md p-6 shadow-lg">
                    <img src="/paper-plane-icon.svg" alt="Paper Plane" className="w-12 h-12" />
                    <div className="space-y-2">
                        <div className="flex items-center">
                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="ml-2 text-gray-700">Searching 400+ flights</span>
                        </div>
                        <div className="flex items-center">
                            <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="ml-2 text-gray-700">Attaching company rules</span>
                        </div>
                        <div className="flex items-center">
                            <svg className="w-5 h-5 animate-spin text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                            </svg>
                            <span className="ml-2 text-gray-700">Serving best results</span>
                        </div>
                    </div>
                </div>
            ) : results.length > 0 ? (
                // Results section
                <div className="w-full max-w-4xl mx-auto">
                    <div className="my-4 text-gray-600">
                        Showing {results.length} of {results.length} results
                    </div>
                    <div className="space-y-4">
                        {results.map((flight) => (
                            <div key={flight.id} className="flex justify-between items-center p-4 bg-white rounded-lg shadow-md">
                                <div className="flex space-x-4">
                                    <div className="flex flex-col items-center">
                                        <img src="/emirates-logo.png" alt="Airline Logo" className="w-12 h-12" />
                                        <span className="text-gray-500">{flight.airline}</span>
                                    </div>
                                    <div>
                                        <div className="text-lg font-semibold">{flight.flightNumber}</div>
                                        <div className="text-sm text-gray-500">{flight.time}</div>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <div className="text-sm text-gray-700">{flight.duration}</div>
                                    <div className="text-xs text-gray-500">{flight.stops}</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-green-600 font-semibold">from {flight.price}</div>
                                    <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded-md">Select</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                // Search form
                <div className="flex flex-col items-center justify-center space-y-4">
                    <div className="flex items-center">
                        <select className="p-2 border border-gray-300 rounded-md">
                            <option>Where from?</option>
                            {/* Add dynamic airport options here */}
                        </select>
                        <button className="p-2 mx-2 bg-gray-200 rounded-full">
                            <ArrowsRightLeftIcon className="h-6 w-6 text-gray-500" />
                        </button>
                        <select className="p-2 border border-gray-300 rounded-md">
                            <option>Where to?</option>
                            {/* Add dynamic airport options here */}
                        </select>
                    </div>
                    <div className="flex space-x-2">
                        <input type="date" className="p-2 border border-gray-300 rounded-md" placeholder="Departure" />
                        <input type="date" className="p-2 border border-gray-300 rounded-md" placeholder="Return" />
                    </div>
                    <button
                        onClick={handleSearchFlights}
                        className="p-2 px-4 bg-green-600 text-white rounded-md"
                    >
                        Search flights
                    </button>
                </div>
            )}
        </div>
    );
};

export default Home;
