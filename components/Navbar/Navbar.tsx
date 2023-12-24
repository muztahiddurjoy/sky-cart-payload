import Link from 'next/link'
import React from 'react'
import { Category } from '../../payload-types'

const Navbar = ({categories}:{categories:Array<Category>}) => {
  return (
    <div className="navbar z-50 shadow-sm fixed top-0 left-0 right-0 bg-base-100 grid grid-cols-2 md:grid-cols-12">
      <a className="btn btn-primary btn-sm text-xl md:col-span-2">Sky Cart</a>
    <ul className='md:col-span-10 flex items-center justify-end'>
        {categories.map((v,i)=><li>
            <Link href={`/category/${v.id}`} className='text-xs font-semibold transition-colors ease-in-out hover:text-blue-500 uppercase mx-2'>{v.category_name}</Link>
        </li>)}
    </ul>
    
  </div>
  )
}

export default Navbar