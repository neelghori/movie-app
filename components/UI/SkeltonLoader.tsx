import React from 'react'

const SkeltonLoader = () => {
    return (
        <>
            {[1,2,3,4,5,6].map((element,key)=>{
                return  <div className="flex flex-col gap-2 bg-white shadow-lg rounded-md" key={key}>
                <div className="w-full h-[500px] relative bg-gray-400"
                >
                </div>
                <div className="flex flex-col gap-1 px-5 py-2">
                    <p className="text-xl font-medium w-full h-6 rounded-lg bg-gray-400"></p>
                    <p className="text-sm font-normal w-full rounded-lg h-6 bg-gray-400"></p>
                </div>
            </div>
            })}
        </>
    )
}

export default SkeltonLoader
