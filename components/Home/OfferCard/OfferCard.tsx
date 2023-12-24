import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const OfferCard = ({color,description,image,link,linkText,title,imageAlt}:OfferType) => {
  return (
    <div className={`min-h-[50vh] bg-[${color}] grid grid-cols-1 md:grid-cols-2 px-3 md:px-10 py-10 md:py-0`} style={{backgroundColor:color}}>
        <Image src={image} height={600} width={600} alt={imageAlt}/>
        <div className="h-full flex flex-col justify-center mt-5 md:mt-0 md:pl-10">
            <p className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold'>{title}</p>
            <p className="text-black font-medium my-5">{description}</p>
            <Link href={link}>
              <button className='btn btn-sm btn-primary'>{linkText}</button>
            </Link>
        </div>
    </div>
  )
}

export default OfferCard