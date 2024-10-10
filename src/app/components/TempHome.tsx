"use client"

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/app/components/ui/select"

import { CalInput } from "@/app/components/CalInput"
import { Button } from "@/app/components/ui/button";
import Link from "next/link";

const Home = async () => {
    return (
        <div className="flex flex-col justify-center align-middle mt-20">
            <p className="text-center text-4xl">Good afternoon, Brian</p>
            <div className="box-border p-7 mx-56 mt-10 outline outline-1 outline-gray-200 rounded-lg">
                <p className="w-32 text-center rounded-lg px-3 py-2 m-0 bg-slate-100">Flights</p>
                <div className="flex justify-between align-middle my-7">
                    <Select>
                        <SelectTrigger className="w-full me-4 py-7">
                            <svg className="w-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                            <SelectValue placeholder="Where from ?" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                        </SelectContent>
                    </Select>
                    <svg className="box-border w-36 mx-7 bg-slate-100 p-5 rounded-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                    </svg>
                    <Select>
                        <SelectTrigger className="w-full mx-4 py-7">
                            <svg className="w-5 text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                            </svg>
                            <SelectValue placeholder="Where to ?" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="light">Light</SelectItem>
                        </SelectContent>
                    </Select>
                    <CalInput inpName="Departure" />
                    <CalInput inpName="Return" />
                </div>
                <Link href="/components/flights"><Button className="text-base float-right bg-teal-950 w-1/4 py-6"><svg className="w-5 me-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                </svg>
                    Search flights</Button></Link>
            </div>
        </div>
    );
};

export default Home;
