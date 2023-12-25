import { GetServerSideProps } from 'next';
import Navbar from '../components/Navbar/Navbar';
import TopCarousel from '../components/Home/TopCarousel/TopCarousel';
import Featured from '../components/Home/Featured/Featured';
import OfferCard from '../components/Home/OfferCard/OfferCard';
import Footer from '../components/Footer/Footer';
import payload from 'payload';
import { useEffect } from 'react';
import Head from 'next/head';
import { Offer } from '../payload-types';
// import Page, { getServerSideProps as sharedGetServerSideProps } from './[...slug]';

const Homepage = ({categories,products,slides,offer,social})=>{

  return <div>
    <Head>
      <title>Sky Cart</title>
    </Head>
    <Navbar categories={categories}/>
    <TopCarousel slides={slides} />
    <OfferCard color={offer.color} description={offer.description} image={offer.image.url} imageAlt={offer.image.alt} link={offer.link} linkText={offer.linkText} title={offer.title}/>
    <Featured products={products}/>
    <Footer categories={categories} address={social.address} email={social.email} facebook={social.facebook} instagram={social.instagram} phone={social.phone} whatsapp={social.whatsapp} />
  </div>
}

export default Homepage;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const categories = await payload.find({
    collection:'categories',
  })
  const products = await payload.find({
    collection:'product',
    limit:8
  })
  const slides = await payload.find({
    collection:'slider'
  })
  const offer = await payload.findGlobal({
    slug:'offer'
  })
  const social = await payload.findGlobal({
    slug:'social'
  })
  // const func = sharedGetServerSideProps.bind(this);
  // return func(ctx);
  return {
          props: {
            categories:categories.docs?categories.docs : [],
            products:products.docs?products.docs : [],
            slides:slides.docs?slides.docs : [],
            offer:offer?offer:{},
            social:social?social:{}
          },
  };
};
