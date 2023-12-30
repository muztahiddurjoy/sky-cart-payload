import React, { useEffect, useState } from 'react'
import {Eyebrow, Gutter,Button,Card,Nav} from "payload/components/elements"
import { GetServerSideProps } from 'next';
import styles from  './Dashboard.module.css'
import ProductCard from './ProductCard/ProductCard';
import { Product } from '../../payload-types';
import axios from 'axios';
import apiurl from '../../apiurl';
const Dashboard = (props) => {
  const [monthSale, setmonthSale] = useState('')
  const [weekSale, setweekSale] = useState('')
  const [products, setproducts] = useState<Array<Product>>([])
  useEffect(() => {
    axios(`${apiurl}/api/product`).then((res)=>{
      if(res.status==200){
        res.data.docs.map((v:Product,i)=>{
          if(v.quantity<10){
            setproducts(p=>[...p,v])
          }
        })

      }
    })
  }, [])
  
  return (
    <>
    <Eyebrow/>
    <Gutter>
      <div className={styles.grid}>
        <div className={styles.grid}>
          <div className="">
          <div className={styles.card}>
            <p style={{fontSize:50,fontWeight:700}}>100</p>
            <p style={{marginTop:5}}>Sales This Week</p>
          </div>
          </div>
          <div className="">
            <div className={styles.card}>
              <p style={{fontSize:50,fontWeight:700}}>100</p>
              <p style={{marginTop:5}}>Sales This Month</p>
            </div>
          </div>
          
          
        </div>
        <div className="">
        <h4>Low Stock Products</h4>
        {products.map((v,i)=> <ProductCard image={v.image[0].image.url} link={v.id} stock={v.quantity} title={v.product_name} key={i}/>)}
        </div>
       
      </div>
    <div className='grid grid-cols-2'>
   
      
    </div>
    </Gutter>

    </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  
  // const func = sharedGetServerSideProps.bind(this);
  // return func(ctx);
  console.log("kire mama")
  return {
          props: {
            text:'random'
          },
  };
};

export default Dashboard