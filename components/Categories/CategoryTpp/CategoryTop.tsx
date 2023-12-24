import Image from 'next/image'
import React from 'react'
import { Category } from '../../../payload-types'

const CategoryTop = ({category_name,createdAt,id,updatedAt}:Category) => {
  return (
    <div className='md:pt-20 w-full relative flex items-center justify-center md:min-h-[50vh] min-h-[60vh]'>
      <p className='text-4xl text-white font-bold z-30 px-5 md:px-10'>{category_name}</p>
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-60"></div>
      {/* <Image src="/carousel.jpg" height={800} width={1000} alt={`${category_name}-Sky Cart`} className='absolute top-0 left-0 right-0 bottom-0 object-cover content-center'/> */}
    </div>
  )
}

export default CategoryTop