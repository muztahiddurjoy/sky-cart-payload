import { Heart, ShoppingCart } from 'lucide-react'
import React from 'react'
import RichText from '../../RichText'
import { Product } from '../../../payload-types'
import Link from 'next/link'
import Image from 'next/image'

const ProductCard = ({category,createdAt,description,discount,id,price,product_name,quantity,shade,updatedAt,variant,image}:Product) => {
  return (
    <div className="p-2">
    <div className="card w-full bg-base-100 shadow-xl relative">
        {/* <button className='btn absolute top-2 right-2 btn-sm'>
            <Heart height={15}/>
        </button> */}
    <figure><Image height={300} width={400} src={typeof image[0].image!=="string"&&image[0].image.url} className='rounded-t-lg h-[200px] object-cover content-center' alt={typeof image[0].image!=="string"&&image[0].image.alt} /></figure>
    <div className="card-body">
        <div className="-mt-3">
        <h2 className="card-title text-lg">{product_name}</h2>
        </div>
        {/* <RichText content={description}/> */}
        <p className="text-xs text-primary">{typeof category!=="string"&&category.category_name}</p>
        {! discount||( discount=== price)?<p className='text-xl font-semibold text-primary text-right'>{price} BDT</p>:<p className='[&>*]:text-right text-right'><span className='line-through text-sm text-gray-500 w-full'>{price}</span><span className='ml-1 text-xl font-semibold text-primary'>{discount} BDT</span></p>}
        <div className="card-actions justify-end">
        <Link href={`/product/${id}`}><button className='btn btn-sm btn-primary'>Details</button></Link>
        </div>
    </div>
    </div>
    </div>
  )
}

export default ProductCard