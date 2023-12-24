import React, { useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Slider } from '../../../payload-types';
import CarouselSlide from './CarouselSlide/CarouselSlide';
const TopCarousel = ({slides}:{slides:Array<Slider>}) => {
  useEffect(() => {
    console.log(slides)
  }, [])
  
  return (
    <Carousel 
    showIndicators={false}
    infiniteLoop={true}
    autoPlay={true}>
      {slides&&slides.map((v,i)=> <CarouselSlide description={v.description} image={typeof v.img !=="string"&&v.img.url} link={typeof v.category!=="string"&&v.category.id} linkText={v.buttonText} title={v.title} key={i} />)}
  </Carousel>
  )
}

export default TopCarousel