"use client"
import Input from '@movieapp/components/UI/Input'
import Image from 'next/image'
import React from 'react'
import Link from "next/link";
import SkeltonLoader from '@movieapp/components/UI/SkeltonLoader';
import useMovies from '@movieapp/hooks/useMovies';
import moment from 'moment';
const MovieList = (props: any) => {
    const { loader, movieList, setSearch } = useMovies(props?.data);
    return (
        <>
            <div className="flex justify-between">
                <h1 className="text-6xl font-bold">Movies</h1>
                <Input type="text" name="search" className="border border-gray-500 pl-2 pr-10 rounded-lg py-3" placeholder="Search Movie..." onChange={(e) => setSearch(e.target.value)} />
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
                {
                    loader ? <SkeltonLoader /> : movieList?.results && movieList?.results?.length > 0 && movieList?.results?.map((element: any, key: number) => {
                        return <Link href={`${element?.id}`}><div className="flex flex-col gap-2 bg-white shadow-lg rounded-md" key={key}>
                            <div className="w-full h-[500px] relative"
                            >
                                <Image src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/${element?.poster_path}`} alt="no image" layout="fill" />
                            </div>
                            <div className="flex flex-col gap-1 px-5 py-2">
                                <p className="text-xl font-medium">{element?.original_title ?? ""}</p>
                                <p className="text-sm font-normal text-gray-500">{moment(element?.release_date).format("LL") ?? ""}</p>
                            </div>
                        </div>
                        </Link>
                    })
                }
            </div>
        </>
    )
}

export default MovieList
