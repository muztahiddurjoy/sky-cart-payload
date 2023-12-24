import React from 'react'
import ProductCard from '../../Product/ProductCard/ProductCard'

const Featured = ({products}:{products:Array<Product>}) => {
  return (
    <div>
          <p className='text-xl lg:text-3xl mt-10 text-center text-primary font-semibold'>All Products</p>
        <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 md:px-32 mt-10">
          {products.map((v,i)=> <ProductCard 
          category={v.category}
          createdAt={v.createdAt}
          description={v.description}
          discount={v.discount}
          id={v.id}
          price={v.price}
          product_name={v.product_name}
          quantity={v.quantity}
          shade={v.shade}
          updatedAt={v.updatedAt}
          variant={v.variant}
          key={i}/>)}
        </div>
    </div>
  )
}

export default Featured