import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { GetServerSideProps } from 'next'
import payload from 'payload'
import Footer from '../../components/Footer/Footer'
import CategoryTop from '../../components/Categories/CategoryTpp/CategoryTop'
import CategoryPage from '../../components/Categories/CategoryPage/CategoryPage'

const Catagorized = ({categories}:{categories:Array<Category>}) => {
  return (
    <div>
      <Navbar categories={categories}/>
      <CategoryTop/>
      <CategoryPage/>
      <Footer/>
    </div>
  )
}

export default Catagorized
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const slug = ctx.query.slug
  const products = await payload.find({
    collection:'categories',
    where:{
      id:{
        equals:slug
      }
    }
  })
  console.log(products.docs)
  const categories = await payload.find({
    collection:'categories',
  })
  // const func = sharedGetServerSideProps.bind(this);
  // return func(ctx);
  return {
          props: {
            categories:categories.docs?categories.docs : []
          },
  };
};
