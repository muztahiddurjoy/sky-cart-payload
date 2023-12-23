import Link from 'next/link'
import React from 'react'

const Navbar = ({categories}:{categories:Array<Category>}) => {
  return (
    <div className="navbar bg-base-100 grid grid-cols-2 md:grid-cols-12">
      <a className="btn btn-ghost text-xl md:col-span-2">Sky Cart</a>
    <ul className='md:col-span-10'>
        {categories.map((v,i)=><li>
            <Link href={`/category/${v.id}`}>{v.category_name}</Link>
        </li>)}
    </ul>
    
  </div>
  )
}

export default Navbar