import MovieDetails from '@movieapp/container/MovieDetails';
import { detailsMovies, getCastMember } from '@movieapp/lib/movie'
import Link from 'next/link';
import React from 'react'

const page = async({params}:any) => {
  const getDetails =await detailsMovies(params.slug);
  const getCastCrew =await getCastMember(params.slug);

  return (
    <div className='flex flex-col gap-10 mx-auto p-10 lg:p-20 max-w-7xl'>
      <div className='flex justify-between'>
        <h2 className='text-5xl font-medium'>Movie Details</h2>
        <Link href={"/"} className='bg-black text-white rounded-md px-6 py-3'>Back</Link>
      </div>
      <MovieDetails data={getDetails ?? null}  cast={getCastCrew ?? null}/>
    </div>
  )
}

export default page
