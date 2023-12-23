import { Heart, ShoppingCart } from 'lucide-react'
import React from 'react'

const ProductCard = () => {
  return (
    <div className="p-2">
    <div className="card w-full bg-base-100 shadow-xl relative">
        <button className='btn absolute top-2 right-2 btn-sm'>
            <Heart height={15}/>
        </button>
    <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" className='rounded-t-lg' alt="Shoes" /></figure>
    <div className="card-body">
        <div className="flex items-center">
        <h2 className="card-title text-lg flex-1">Shoes!</h2>
        <p className='flex-1 text-right'>100$</p>
        </div>
        
        <p className='text-sm'>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
        <button className='btn btn-sm'><ShoppingCart className='mr-1' height={15}/>Buy Now</button>
        </div>
    </div>
    </div>
    </div>
  )
}

export default ProductCard