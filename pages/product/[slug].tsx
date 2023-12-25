import React, { useEffect } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { GetServerSideProps } from 'next'
import payload from 'payload'
import ProductCarousel from '../../components/Product/ProductPage/ProductCarousel/ProductCarousel'
import ProductDetails from '../../components/Product/ProductPage/ProductDetails/ProductDetails'
import { Category, Product } from '../../payload-types'
import RichText from '../../components/RichText'
import Head from 'next/head'
import { Footer as FooterType } from '../../types/types'

const SingleProduct = ({categories,product,social}:{categories:Array<Category>,product:Product,social:FooterType}) => {
    
  return (
    <>
        <Head>
            <title>{product.product_name}</title>
            <meta property="og:url" content={``}/>  
            <meta property="og:title" content={product.product_name} />  
            <meta property="og:description" content={`Category: ${product.category.category_name}`} />  
            <meta property="og:type" content="article" />  
            <meta property="og:image" content={product.image[0].image.url} />  
        </Head>
        <Navbar categories={categories}/>
        <div className="pt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 md:px-20 px-5">
                <ProductCarousel product={product}/>
                <ProductDetails product={product}/>
            </div>
            {/* {product&&product.description.map((v,i)=> <RichText content={v.children} children={v.children}/>)} */}
            <RichText content={product&&product.description} className='md:px-20 px-5 mt-10 md:mt-0 mb-10'/>
        </div>
        <Footer address={social.address} categories={categories} email={social.email} facebook={social.facebook} instagram={social.instagram} phone={social.phone} whatsapp={social.whatsapp}/>
    </>
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
    const social = await payload.findGlobal({
      slug:'social'
    })
    // const func = sharedGetServerSideProps.bind(this);
    // return func(ctx);
    return {
            props: {
              categories:categories.docs?categories.docs : [],
              product:product?product:{},
              social:social?social:{}
            },
    };
  };