import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const CarouselSlide = ({image,link,linkText,title}:CarouselItem) => {
  return (
    <div className='min-h-[60vh] relative w-full bg-black'>
        <Image src={image} alt={title} height={800} width={1000} className='absolute w-full top-0 left-0 bottom-0 right-0'/>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center bg-white/40 px-5 md:px-32">
            <p className='text-2xl md:text-3xl font-semibold'>{title}</p>
            <Link href={link} className='mt-3'>{linkText}</Link>
        </div>
    </div>
  )
}

export default CarouselSlide