"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Airport {
    name: string;
    code: string;
    city: string;
    country: string;
}

interface AirportsContextType {
    airports: Airport[];
    srcAirport: string | null;
    setSrcAirport: (code: string) => void;
    destAirport: string | null;
    setDestAirport: (code: string) => void;
    departureDate: Date | undefined;
    setDepartureDate: (date: Date | undefined) => void;
    returnDate: Date | undefined;
    setReturnDate: (date: Date | undefined) => void;
}

const AirportsContext = createContext<AirportsContextType | undefined>(undefined);

export const AirportsProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const airportsData: Airport[] = [
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
    ];

    const [srcAirport, setSrcAirport] = useState<string | null>(null);
    const [destAirport, setDestAirport] = useState<string | null>(null);
    const [departureDate, setDepartureDate] = React.useState<Date | undefined>(undefined);
    const [returnDate, setReturnDate] = React.useState<Date | undefined>(undefined);

    return (
        <AirportsContext.Provider value={{ airports: airportsData, srcAirport, setSrcAirport, destAirport, setDestAirport, departureDate, setDepartureDate, returnDate, setReturnDate }}>
            {children}
        </AirportsContext.Provider>
    );
};

export const useAirports = () => {
    const context = useContext(AirportsContext);
    if (!context) {
        throw new Error('useAirports must be used within an AirportsProvider');
    }
    return context;
};
