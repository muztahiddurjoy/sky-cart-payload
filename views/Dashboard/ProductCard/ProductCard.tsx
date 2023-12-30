import React from 'react'
import st from './ProductCard.module.css'
import { Card } from 'payload/components/elements'
import Link from 'next/link'

type ProductCard = {
    title:string,
    image:string,
    link:string,
    stock:number
}

const ProductCard = ({image,link,stock,title}:ProductCard) => {
  return (
    <Link href={`/admin/collections/product/${link}`} style={{textDecoration:'none'}}>
    <div className={st.container}>
        <img src={image} height={100} width={100} />
        <div style={{marginLeft:10}}>
            <h3 style={{margin:0}}>{title}</h3>
            <div style={{marginTop:0,paddingTop:0}}>Stock: {stock}</div>
        </div>
    </div>
    </Link>
  )
}

export default ProductCard