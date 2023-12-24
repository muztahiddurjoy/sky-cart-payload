import React from 'react'
import { Media, Product } from '../../../../payload-types'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
const ProductCarousel = ({product}:{product:Product}) => {
  return (
    <Carousel className='h-auto'
    thumbWidth={200}
    showThumbs={true}
    infiniteLoop={true}>
        {product.image.map((v)=> <div key={v.id}>
            <Image height={600} width={600} src={v.image.url} alt={v.image.alt} />
            {/* <p className="legend">{v.image.alt}</p> */}
        </div>)}
    </Carousel>
  )
}

export default ProductCarousel