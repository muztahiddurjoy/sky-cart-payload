import { GetServerSideProps } from 'next';
import Navbar from '../components/Navbar/Navbar';
import TopCarousel from '../components/Home/TopCarousel/TopCarousel';
import Featured from '../components/Home/Featured/Featured';
// import Page, { getServerSideProps as sharedGetServerSideProps } from './[...slug]';

const Homepage = ()=>{
  return <div>
    <Navbar/>
    <TopCarousel/>
    <Featured/>
  </div>
}

export default Homepage;

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const func = sharedGetServerSideProps.bind(this);
//   return func(ctx);
// };
