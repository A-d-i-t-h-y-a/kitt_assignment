import React from 'react'
import { Button } from './ui/button'
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from '@/components/ui/separator';
import Timeline from './TimeLine';


interface Airport {
    name: string;
    city: string;
    country: string;
    code: string;
}

interface FlightCardProps {
    airport: Airport;
}

export default function FlightCard({ airport }: FlightCardProps) {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <div className='hover:scale-[1.01] cursor-pointer flex outline outline-1 outline-gray-300 my-5 rounded-lg'>
                    <div className='flex flex-col w-3/4 border-e-2 p-5'>
                        <div id="flight-1" className='flex justify-between w-full py-4'>
                            <div className='flex space-x-4'>
                                <div className="img">img</div>
                                <div className="timing">
                                    <p className="text-sm text-gray-500">Emirates - AT 4334</p>
                                    <p className="text-lg">Name</p>
                                </div>
                            </div>
                            <div className='flex space-x-4'>
                                <div className="duration">
                                    <p className="text-sm text-gray-500">{airport.code} - {airport.code}</p>
                                    <p className="text-lg">Name</p>
                                </div>
                                <div className="stops">
                                    <p className="text-sm text-gray-500">akjnjknsd</p>
                                    <p className="text-lg">Non Stop</p>
                                </div>
                            </div>
                        </div>
                        <div id="flight-2" className='flex justify-between w-full py-4'>
                            <div className='flex space-x-4'>
                                <div className="img">img</div>
                                <div className="timing">
                                    <p className="text-sm text-gray-500">Emirates - AT 4334</p>
                                    <p className="text-lg">Name</p>
                                </div>
                            </div>
                            <div className='flex space-x-4'>
                                <div className="duration">
                                    <p className="text-sm text-gray-500">CDG - DXB</p>
                                    <p className="text-lg">Name</p>
                                </div>
                                <div className="stops">
                                    <p className="text-sm text-gray-500">akjnjknsd</p>
                                    <p className="text-lg">Non Stop</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id='price' className='flex flex-col justify-end w-1/4 p-5 space-y-1'>
                        <p className="text-sm text-gray-500">from</p>
                        <p className="text-lg">AED 1000.00</p>
                        <Button className="text-base bg-teal-950 py-4 w-full">Select</Button>
                    </div>
                </div >
            </SheetTrigger>
            <SheetContent className='m-5 rounded-lg'>
                <SheetHeader className='mt-10 mb-7'>
                    <SheetTitle className='font-medium text-2xl'>Flight details</SheetTitle>
                </SheetHeader>
                <Separator />
                <Timeline />
            </SheetContent>
        </Sheet>
    )
}
