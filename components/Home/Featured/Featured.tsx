import React from 'react'
import ProductCard from '../../Product/ProductCard/ProductCard'

const Featured = () => {
  return (
    <div>
          <p className='text-xl lg:text-3xl mt-10 text-center text-primary font-semibold'>Featured Product</p>
        <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 md:px-32 mt-10">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>

        </div>
    </div>
  )
}

export default Featured