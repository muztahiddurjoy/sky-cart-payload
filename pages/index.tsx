import { GetServerSideProps } from 'next';
import Navbar from '../components/Navbar/Navbar';
import TopCarousel from '../components/Home/TopCarousel/TopCarousel';
import Featured from '../components/Home/Featured/Featured';
import OfferCard from '../components/Home/OfferCard/OfferCard';
import Footer from '../components/Footer/Footer';
import payload from 'payload';
import { useEffect } from 'react';
import Head from 'next/head';
// import Page, { getServerSideProps as sharedGetServerSideProps } from './[...slug]';

const Homepage = ({categories,products})=>{
  useEffect(() => {
    console.log(categories)
  }, [])
  
  return <div>
    <Head>
      <title>Sky Cart</title>
    </Head>
    <Navbar categories={categories}/>
    {/* <TopCarousel/> */}
    <div className="pt-10">
    <Featured products={products}/>
    <OfferCard/>
    <Footer/>
    </div>
  </div>
}

export default Homepage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const categories = await payload.find({
    collection:'categories',
  })
  const products = await payload.find({
    collection:'product'
  })
  console.log(products.docs)
  // const func = sharedGetServerSideProps.bind(this);
  // return func(ctx);
  return {
          props: {
            categories:categories.docs?categories.docs : [],
            products:products.docs?products.docs : []
          },
  };
};
