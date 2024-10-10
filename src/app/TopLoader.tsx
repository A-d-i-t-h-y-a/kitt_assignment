import React from 'react'

export default function TopLoader() {
    return (
        <>
            <div className="relative w-screen h-1 bg-gray-300 z-[9999] overflow-hidden topLoader">
                <div className="absolute top-0 left-0 w-screen h-full bg-[#0070f3] rounded-[25%] animate-stretchLine stretchingLine"></div>
            </div>
        </>
    )
}
