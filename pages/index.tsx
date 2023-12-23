import { GetServerSideProps } from 'next';
import Navbar from '../components/Navbar/Navbar';
import TopCarousel from '../components/Home/TopCarousel/TopCarousel';
import Featured from '../components/Home/Featured/Featured';
import OfferCard from '../components/Home/OfferCard/OfferCard';
import Footer from '../components/Footer/Footer';
import payload from 'payload';
import { useEffect } from 'react';
// import Page, { getServerSideProps as sharedGetServerSideProps } from './[...slug]';

const Homepage = ({categories})=>{
  useEffect(() => {
    console.log(categories)
  }, [])
  
  return <div>
    <Navbar categories={categories}/>
    {/* <TopCarousel/> */}
    <Featured/>
    <OfferCard/>
    <Footer/>
  </div>
}

export default Homepage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
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
