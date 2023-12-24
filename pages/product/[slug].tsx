import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { GetServerSideProps } from 'next'
import payload from 'payload'
import ProductCarousel from '../../components/Product/ProductPage/ProductCarousel/ProductCarousel'
import ProductDetails from '../../components/Product/ProductPage/ProductDetails/ProductDetails'
import { Category, Product } from '../../payload-types'
import RichText from '../../components/RichText'

const SingleProduct = ({categories,product}:{categories:Array<Category>,product:Product}) => {
    useEffect(() => {
      console.log(product?product:'ashe nai')
    }, [])
    
  return (
    <div>
        <Navbar categories={categories}/>
        <div className="pt-20">
            <div className="grid grid-cols-2 md:grid-cols-2 md:px-20 px-5">
                <ProductCarousel/>
                <ProductDetails product={product}/>
            </div>
            {/* {product&&product.description.map((v,i)=> <RichText content={v.children} children={v.children}/>)} */}
            <RichText content={product&&product.description} className='md:px-20 px-5 '/>
        </div>
        <Footer/>
    </div>
  )
}

export default SingleProduct

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const categories = await payload.find({
      collection:'categories',
    })
    const product = await payload.findByID({
      collection:'product',
      id:String(ctx.query.slug)
    })
    // const func = sharedGetServerSideProps.bind(this);
    // return func(ctx);
    return {
            props: {
              categories:categories.docs?categories.docs : [],
              product:product?product:{}
            },
    };
  };