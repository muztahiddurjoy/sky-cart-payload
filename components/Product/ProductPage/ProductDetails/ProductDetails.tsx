import React from 'react'
import { Product } from '../../../../payload-types'
import Link from 'next/link'

const ProductDetails = ({product}:{product:Product}) => {
  return (
    <div className='md:min-h-[50vh] lg:min-h-[60vh] flex justify-center flex-col md:pl-16'>
        <p className='text-3xl md:text-4xl mb-5 font-bold'>{product.product_name}</p>
        {!product.discount||(product.discount===product.price)?<p className='text-3xl font-semibold text-primary'>{product.price}</p>:<p><span className='line-through text-lg text-gray-500'>{product.price}</span><span className='ml-2 text-3xl font-semibold text-primary'>{product.discount} BDT</span></p>}
        <p className='mt-3 mb-5 text-sm'>Quantity: {product.quantity}</p>
        <div className="">
            <p className='pb-2 text-sm text-gray-500'>Category:</p><Link href={`/category/${product.category.id}`} className='my-5'><div className="badge badge-primary text-xs p-2 py-3 hover:bg-opacity-90">{product.category.category_name}</div></Link>
        </div>

    </div>
  )
}

export default ProductDetails