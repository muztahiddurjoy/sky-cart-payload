import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CarouselSlide from './CarouselSlide/CarouselSlide';
import { EffectFade, Navigation, Pagination } from 'swiper/modules';
const TopCarousel = () => {
  return (
    <Swiper
    spaceBetween={0}
    slidesPerView={1}
    effect={'fade'}
    navigation={true}
      pagination={{
        clickable: true,
      }}
    onSlideChange={() => console.log('slide change')}
    onSwiper={(swiper) => console.log(swiper)}
    modules={[EffectFade, Navigation, Pagination]}
    loop={true}
    autoplay={{
      delay: 5000,
      disableOnInteraction: true,
    }}
  >
    <SwiperSlide>
      <CarouselSlide image='/carousel.jpg' link='/' linkText='Explore' title='New Product'/>
    </SwiperSlide>
    <SwiperSlide>
      <CarouselSlide image='/lipstick.jpg' link='/' linkText='Buy Now' title='New Arrival'/>
    </SwiperSlide>
    <SwiperSlide>
      <CarouselSlide image='/carousel.jpg' link='/' linkText='Explore Now' title='Test Product'/>
    </SwiperSlide>
    <SwiperSlide>
      <CarouselSlide image='/lipstick.jpg' link='/' linkText='Explore' title='Shera Product'/>
    </SwiperSlide>
  </Swiper>
  )
}

export default TopCarousel