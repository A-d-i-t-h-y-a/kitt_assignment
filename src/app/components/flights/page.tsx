"use client"

import React, { useEffect, useState } from 'react'
import FlightCard from '../FlightCard';
import Link from 'next/link';
import { useAirports } from '../../context/AirportContext';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetTrigger,
} from "@/app/components/ui/sheet"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/app/components/ui/select"

import { CalInput } from "@/app/components/CalInput"
import { Button } from "@/app/components/ui/button";
import Loading from '@/app/loading';

export default async function Flights() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);
    const { airports, srcAirport, setSrcAirport, destAirport, setDestAirport, departureDate, setDepartureDate, returnDate, setReturnDate } = useAirports();
    const [scode, sname] = srcAirport?.split(', ') || [];
    const [dcode, dname] = destAirport?.split(', ') || [];
    const toggle = () => {
        const prevSrc = srcAirport;
        const prevDest = destAirport;

        setSrcAirport(prevDest || 'null');
        setDestAirport(prevSrc || 'null');
    }
    return (
        <>
            <div className='flex px-56 items-center justify-between border-b-2 p-5'>
                <Sheet>
                    <SheetTrigger asChild>
                        <div className='ps-3 py-2 flex space-x-4 rounded-full items-center outline outline-1 outline-gray-300'>
                            <p className='ps-3 truncate w-32' id='src'><span>{scode}</span> <span className="text-gray-500">{sname}</span></p>
                            <div className='h-7 w-[1px] bg-gray-300'></div>
                            <div className='truncate w-32' id='dest'><span>{dcode}</span> <span className="text-gray-500">{dname}</span></div>
                            <div className='h-7 w-[1px] bg-gray-300'></div>
                            <div id='dates'>
                                {departureDate ? `${departureDate.toLocaleString('default', { month: 'long' })}, ${departureDate.getDate()}` : "Departure date not selected"} - {returnDate ? `${returnDate.toLocaleString('default', { month: 'long' })}, ${returnDate.getDate()}` : "Return date not selected"}
                            </div>
                            <div className='h-7 w-[1px] bg-gray-300'></div>
                            <div className='pe-3' id='search'><span className="inline-flex box-border rounded-full p-3 bg-slate-100"><svg className="w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                            </svg></span></div>
                        </div>
                    </SheetTrigger>
                    <SheetContent side="top" className='h-fit'>
                        <div className="p-7 mx-56">
                            <div className="flex justify-between align-middle my-7">
                                <Select onValueChange={setSrcAirport}>
                                    <SelectTrigger className="w-full me-4 py-7">
                                        <svg className="w-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                        </svg>
                                        <SelectValue placeholder={srcAirport || "Where from ?"} />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {
                                            airports.map((ele) => (
                                                <SelectItem key={ele.code} value={`${ele.code}, ${ele.name}`}>
                                                    <span>{ele.code}</span> <span className="text-xs text-gray-500">{ele.name}</span>
                                                </SelectItem>
                                            ))
                                        }
                                    </SelectContent>
                                </Select>
                                <svg className="box-border w-36 mx-7 bg-slate-100 p-5 rounded-full" onClick={toggle} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                                </svg>
                                <Select onValueChange={setDestAirport}>
                                    <SelectTrigger className="w-full mx-4 py-7">
                                        <svg className="w-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                        </svg>
                                        <SelectValue placeholder={destAirport || "Where to ?"} />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {
                                            airports.map((ele) => (
                                                <SelectItem key={ele.code} value={`${ele.code}, ${ele.name}`}>
                                                    <span>{ele.code}</span> <span className="text-xs text-gray-500">{ele.name}</span>
                                                </SelectItem>
                                            ))
                                        }
                                    </SelectContent>
                                </Select>
                                <CalInput inpName="Departure" date={departureDate} setDate={setDepartureDate} />
                                <CalInput inpName="Return" date={returnDate} setDate={setReturnDate} />
                            </div>
                            <SheetClose asChild>
                                <Link href="/components/flights"><Button className="text-base float-right bg-teal-950 w-1/4 py-6"><svg className="w-5 me-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                                </svg>
                                    Search flights</Button></Link></SheetClose>
                        </div>
                    </SheetContent>
                </Sheet>
                <Link href="/"><div className='hover:scale-[1.05] inline-flex box-border rounded-full p-4 outline outline-1 outline-gray-300'>
                    <svg className='w-6 text-gray-500' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div></Link>
            </div>
            {loading ? (
                <Loading />
            ) : (
                <div className="mx-56">
                    {airports.map((ele) => (
                        <FlightCard key={ele.code} airport={ele} />
                    ))}
                </div>
            )}

        </>
    )
}
