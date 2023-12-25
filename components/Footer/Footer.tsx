import React from 'react'
import { Social } from '../../payload-types'
import Link from 'next/link'
import { Facebook, Instagram } from 'lucide-react'
import Image from 'next/image'
import { Footer } from '../../types/types'

const Footer = ({address,email,facebook,instagram,phone,whatsapp,categories}:Footer) => {
  return (
    <footer className="footer grid grid-cols-1 md:grid-cols-5 p-10 bg-gray-300 mt-5">
      <div className="md:col-span-1">
        <Image src="/logo.png" height={100} width={100} alt='Sky Cart' className='h-auto w-[70px]'/>
        <p className="font-bold text-lg">
          Sky Cart
        </p>
        <p className='text-sm italic text-gray-600'>{address}</p>
      </div>
      <div className="w-full h-full md:col-span-3">
        <p className='text-gray-500 font-semibold'>Categories</p>
        <div className="grid grid-cols-2">
        {categories.map((v,i)=><div className='my-2'>
            <Link href={`/category/${v.id}`} className='text-xs font-semibold transition-colors ease-in-out hover:text-blue-500 uppercase mr-10 text-center'>{v.category_name}</Link>
        </div>)}
        </div>
      </div>
      <div className="flex flex-col justify-end items-end h-full w-full">
        <a href={`tel:${phone}`} className='mt-2 text-sm font-semibold'>Phone: {phone}</a>
        <a href={`mailto:${email}`} className='text-sm font-semibold'>E-mail: {email}</a>
      <nav>
        <div className="grid grid-flow-col gap-4 mt-2">
          <Link href={facebook?facebook:'#'}><Facebook height={25}/></Link>
          <Link href={instagram?instagram:'#'}><Instagram  height={25}/></Link>
          <Link href={whatsapp?whatsapp:'#'}>
          <svg
      xmlns="http://www.w3.org/2000/svg"
      width={25}
      height={25}
      viewBox="0 0 448 512"
    >
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path>
    </svg>
          </Link>
        </div>
      </nav>
      </div>
      {/* <aside>
        <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="inline-block fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
        
        <p className='text-sm'>Copyright © {new Date().getFullYear()} - All right reserved</p>
      </aside>  */}
      {/* <nav>
        <div className="grid grid-flow-col gap-4">
          <Link href={facebook?facebook:'#'}><Facebook height={25}/></Link>
          <Link href={instagram?instagram:'#'}><Instagram  height={25}/></Link>
          <Link href={whatsapp?whatsapp:'#'}><Facebook  height={25}/></Link>
        </div>
      </nav> */}
    </footer>
  )
}

export default Footer