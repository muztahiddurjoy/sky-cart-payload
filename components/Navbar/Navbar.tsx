import Link from 'next/link'
import React, { useState } from 'react'
import { Category } from '../../payload-types'
import { Menu, Search, X } from 'lucide-react'
import Image from 'next/image'

const Navbar = ({categories}:{categories:Array<Category>}) => {
  const [navOpen, setnavOpen] = useState<boolean>(false)
  return (
    <>
    <div className="navbar md:px-10 z-50 shadow-sm fixed top-0 left-0 right-0 bg-base-100 grid grid-cols-2 md:grid-cols-12">
      <Link className="md:col-span-2 text-xs" href='/'>
        <Image src="/logo.png" height={32} width={32} alt='Sky Cart'/>
      </Link>
    <ul className='md:col-span-10 items-center justify-end hidden lg:flex'>
        {categories.map((v,i)=><li>
            <Link href={`/category/${v.id}`} className='text-xs font-semibold transition-colors ease-in-out hover:text-blue-500 uppercase mx-2 text-center'>{v.category_name}</Link>
        </li>)}
    </ul>
    <div className="flex justify-end items-center">
    {/* <button className="btn btn-sm">
        <Search height={18}/>
      </button> */}
      <button className="btn btn-sm btn-square ml-2 block md:hidden" onClick={e=> setnavOpen(p=> !p)}>
        <Menu height={18}/>
      </button>
    </div>
  </div>
  <div className={`top-0 hidden md:block transition-all ease-in-out duration-300 ${navOpen?'right-0':'-right-[200px]'} h-[100vh] w-[200px] bg-white/60 backdrop-blur-md fixed z-50 p-3`}>
    <div className="flex justify-end">
      <button className='btn btn-sm btn-square' onClick={e=> setnavOpen(p=> !p)}>
        <X height={15}/>
      </button>
    </div>
    <ul className='mt-6'>
        {categories.map((v,i)=><li className='my-3'>
            <Link href={`/category/${v.id}`} className='text-xs font-semibold transition-colors ease-in-out hover:text-blue-500 uppercase mx-2 text-center'>{v.category_name}</Link>
        </li>)}
    </ul>
  </div>
  </>
  )
}

export default Navbar