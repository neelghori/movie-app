import Image from 'next/image'
import React from 'react'

const Cast = (props: any) => {
    return (
        <div className='flex flex-col gap-4'>
            <p className='text-xl font-semibold'>Cast Member</p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6'>
                {
                    props?.cast?.cast && props?.cast?.cast.length > 0 && props?.cast?.cast.filter((element: any) => element.known_for_department == "Acting").map((ele: any,key:number) => {
                        return <div className="flex flex-col gap-4 bg-white shadow-lg rounded-md" key={key}>
                            <div className="w-full h-[300px] relative"
                            >
                                <Image src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${ele?.profile_path}`} alt="no image" layout="fill" />
                            </div>
                            <div className="flex flex-col gap-1 px-5 py-2">
                                <p className="text-xl font-medium">{ele?.original_name}</p>
                                <p className="text-sm font-normal text-gray-500">{ele?.character.split("/")[0]}</p>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Cast
