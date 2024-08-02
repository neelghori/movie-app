"use client"
import Link from 'next/link'
import React from 'react'

const error = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-screen gap-10'>
      <h1 className='text-8xl font-bold'>Oops Something Went Wrong !</h1>
      <Link href={"/"} className='bg-black text-white rounded-md px-6 py-3'>Back</Link>
    </div>
  )
}

export default error
