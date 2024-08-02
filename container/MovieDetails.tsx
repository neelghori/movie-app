"use client"
import Cast from '@movieapp/components/Cast'
import moment from 'moment'
import Image from 'next/image'
import React from 'react'

const MovieDetails = (props:any) => {
    return (
        <div className='flex flex-col gap-16'>
            <div className='flex flex-col lg:flex-row gap-10'>
                <div className="w-full h-[550px] relative object-contain text-left"
                >
                    <Image src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${props?.data?.poster_path}`} alt="no image" layout="fill" objectFit='contain' />
                </div>
                <div className='flex flex-col gap-3'>
                    <div>
                        <h2 className='text-xl font-medium'>{props?.data?.original_title} ({moment(props?.data?.release_date).format("YYYY")})</h2>
                        <p className='text-base font-normal'>{
                            props?.data?.genres && props?.data?.genres.length > 0 && props?.data?.genres.map((element:any)=>element.name).join(",")
                            }</p>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='text-xl font-medium'>OverView</p>
                        <p className='text-base font-normal'>{props?.data?.overview}</p>
                    </div>
                </div>
            </div>
           <Cast {...props}/>
        </div>
    )
}

export default MovieDetails
