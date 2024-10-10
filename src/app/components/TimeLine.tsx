import React from 'react';

interface FlightInfo {
    departure: string;
    departureTime: string;
    arrival: string;
    arrivalTime: string;
    duration: string;
    layover?: string;
    airline: string;
    flightNumber: string;
    aircraft: string;
    class: string;
}

const flights: FlightInfo[] = [
    {
        departure: "DXB • Dubai International Airport",
        departureTime: "Sat 28 Sept • 2:15",
        arrival: "RUH • King Khalid International Airport",
        arrivalTime: "Sat 28 Sept • 2:15",
        duration: "3h 45m",
        airline: "Saudi Arabian Airlines",
        flightNumber: "SV553",
        aircraft: "A330",
        class: "Economy",
        layover: "2h 25m",
    },
    {
        departure: "RUH • King Khalid International Airport",
        departureTime: "Sat 28 Sept • 2:15",
        arrival: "CDG • Paris - Charles de Gaulle Airport",
        arrivalTime: "Sat 28 Sept • 2:15",
        duration: "3h 45m",
        airline: "Saudi Arabian Airlines",
        flightNumber: "SV553",
        aircraft: "A330",
        class: "Economy",
    },
];

const Timeline = () => {
    return (
        <div className="">
            {flights.map((flight, index) => (
                <div key={index} className="flex items-start space-x-4">
                    <div className="flex flex-col items-center">
                        <div className="w-4 h-4 bg-blue-500 rounded-full"></div>

                        {index < flights.length - 1 && (
                            <div className="flex-grow h-[10rem] border-l-2 border-gray-300"></div>
                        )}
                    </div>

                    <div className="space-y-2">
                        <div>
                            <p className="text-sm text-gray-500">{flight.departureTime}</p>
                            <p className="font-semibold">{flight.departure}</p>
                        </div>

                        <div className="flex space-x-2 text-sm text-gray-500">
                            <p>{flight.airline} • {flight.flightNumber}</p>
                            <p>{flight.class} • {flight.aircraft}</p>
                            <p>{flight.duration}</p>
                        </div>

                        {flight.layover && (
                            <div className="flex items-center text-gray-500 text-sm space-x-2">
                                <span className="material-icons">schedule</span>
                                <p>Layover {flight.layover}</p>
                            </div>
                        )}

                        <div>
                            <p className="text-sm text-gray-500">{flight.arrivalTime}</p>
                            <p className="font-semibold">{flight.arrival}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Timeline;
