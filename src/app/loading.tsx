import Image from 'next/image'
import React from 'react'

export default function loading () {
  return (
    <div className='min-h-screen w-full flex flex-col gap-4 justify-center items-center'>
      <Image
        className='animate-bounce'
        src={'/BigLogo.png'}
        width={320}
        height={320}
        alt='biglogo'
      />
      <h1 className='text-3xl text-center font-bold text-[#c80101]'>
        Knotz.Link
      </h1>
    </div>
  )
}
