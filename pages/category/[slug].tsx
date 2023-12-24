import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { GetServerSideProps } from 'next'
import payload from 'payload'
import Footer from '../../components/Footer/Footer'
import CategoryTop from '../../components/Categories/CategoryTpp/CategoryTop'
import CategoryPage from '../../components/Categories/CategoryPage/CategoryPage'

const Catagorized = ({categories,products,category}:{categories:Array<Category>,products:Array<Product>,category:Category}) => {
  return (
    <div>
      <Navbar categories={categories}/>
      <CategoryTop 
        category_name={category.category_name}
        createdAt={category.createdAt}
        id={category.id}
        updatedAt={category.updatedAt}/>
      <CategoryPage products={products}/>
      <Footer/>
    </div>
  )
}

export default Catagorized
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const slug = ctx.query.slug
  const products = await payload.find({
    collection:'product',
    where:{
      category:{
        equals:slug
      }
    }
  })
  const categories = await payload.find({
    collection:'categories',
  })
  const category = await payload.findByID({
    collection:'categories',
    id:String(slug)
  })
  // const func = sharedGetServerSideProps.bind(this);
  // return func(ctx);
  return {
          props: {
            categories:categories.docs?categories.docs : [],
            products:products.docs?products.docs : [],
            category:category?category:{id:'',category_name:'',createdAt:'',updatedAt:''}
          },
  };
};
