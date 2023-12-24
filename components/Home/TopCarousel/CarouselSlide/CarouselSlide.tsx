import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const CarouselSlide = ({image,link,linkText,title,description}:CarouselItem) => {
  return (
    <div className='min-h-[70vh] pt-10 relative w-full bg-black'>
        <Image src={image} alt={title} height={800} width={1000} className='absolute w-full h-full object-cover content-center top-0 left-0 bottom-0 right-0'/>
        <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col md:justify-center justify-end py-10 bg-white/50 px-5 md:px-32">
            <p className='text-2xl md:text-3xl lg:text-4xl font-bold text-left'>{title}</p>
            <p className='text-sm mt-5 text-left'>{description}</p>
            <Link href={`/category/${link}`} className='mt-3 w-full flex justify-start'>
            <button className="btn btn-sm btn-primary">{linkText}</button></Link>
        </div>
    </div>
  )
}

export default CarouselSlide