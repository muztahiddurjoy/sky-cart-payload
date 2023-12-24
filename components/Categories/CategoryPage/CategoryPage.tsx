import React from 'react'
import ProductCard from '../../Product/ProductCard/ProductCard'

const CategoryPage = ({products}:{products:Array<Product>}) => {
  return (
    <div className='grid grid-cols-4 md:px-20 px-5 mt-10'>
      {products.map((product,index)=> <ProductCard
      category={product.category}
      createdAt={product.createdAt} 
      description={product.description}
      discount={product.discount}
      id={product.id}
      price={product.price}
      product_name={product.product_name}
      quantity={product.quantity}
      shade={product.shade}
      updatedAt={product.updatedAt}
      variant={product.variant}
      key={index}/>)}
    </div>
  )
}

export default CategoryPage