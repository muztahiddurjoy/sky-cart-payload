import Image from 'next/image'
import React from 'react'

const OfferCard = () => {
  return (
    <div className='bg-[#FCE800] min-h-[50vh] grid grid-cols-1 md:grid-cols-2 px-3 md:px-10 py-10 md:py-0'>
        <Image src="/model.jpg" height={600} width={600} alt='model'/>
        <div className="h-full flex flex-col justify-center">
            <p className='text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-extrabold'>Black Friday <br/> Sale Now!</p>
            <p className="text-black font-medium my-5">Spend minimum 300k to get 90% discount</p>
            <p className='font-bold text-xl'>From June 20 - June 31</p>
            <p className='text-sm mt-2'>*Condition Apply</p>
        </div>
    </div>
  )
}

export default OfferCard