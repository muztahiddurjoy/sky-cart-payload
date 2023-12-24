import { Heart, ShoppingCart } from 'lucide-react'
import React from 'react'
import RichText from '../../RichText'
import { Product } from '../../../payload-types'
import Link from 'next/link'

const ProductCard = ({category,createdAt,description,discount,id,price,product_name,quantity,shade,updatedAt,variant,image}:Product) => {
  return (
    <div className="p-2">
    <div className="card w-full bg-base-100 shadow-xl relative">
        {/* <button className='btn absolute top-2 right-2 btn-sm'>
            <Heart height={15}/>
        </button> */}
    <figure><img src={image[0].image.sizes.card.url} className='rounded-t-lg' alt={image[0].image.alt} /></figure>
    <div className="card-body">
        <div className="flex items-center">
        <h2 className="card-title text-lg flex-1">{product_name}</h2>
        <p className='flex-1 text-right'>{price} BDT</p>
        </div>
        {/* <RichText content={description}/> */}
        <p className="text-xs text-primary">{typeof category!=="string"&&category.category_name}</p>
        <div className="card-actions justify-end">
        <Link href={`/product/${id}`}><button className='btn btn-sm btn-primary'>Details</button></Link>
        </div>
    </div>
    </div>
    </div>
  )
}

export default ProductCard