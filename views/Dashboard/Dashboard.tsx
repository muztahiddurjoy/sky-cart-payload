import React, { useEffect, useState } from 'react'
import {Eyebrow, Gutter,Button,Card,Nav} from "payload/components/elements"
import { GetServerSideProps } from 'next';
import styles from  './Dashboard.module.css'
import ProductCard from './ProductCard/ProductCard';
import { Customer, Product, Sale } from '../../payload-types';
import axios from 'axios';
import apiurl from '../../apiurl';
import LastCustomer from './LastCustomer/LastCustomer';
import LastSales from './LastSales/LastSales'
const Dashboard = (props) => {
  const [monthSale, setmonthSale] = useState(0)
  const [weekSale, setweekSale] = useState(0)
  const [products, setproducts] = useState<Array<Product>>([])
  const [sales, setsales] = useState<Array<Sale>>([])
  const [customers, setcustomers] = useState<Array<Customer>>([])
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
    axios(`${apiurl}/api/sales`).then((res)=>{
      if(res.status==200){
        res.data.docs.map((v:Sale,i)=>{
          const tempDate = new Date(v.createdAt)
          const today = new Date()
          if(((today.getTime()-tempDate.getTime())/(1000*60*60*24*7))<1){
            setweekSale(p=> p+1)
          }
        })
      }
    })
    axios(`${apiurl}/api/sales`).then((res)=>{
      if(res.status==200){
        res.data.docs.map((v:Sale,i)=>{
          const tempDate = new Date(v.createdAt)
          const today = new Date()
          if(((today.getTime()-tempDate.getTime())/(1000*60*60*24*30))<1){
            setmonthSale(p=> p+1)
            setsales((p)=> i<5?[...p,v]:[...p])
          }
        })
      }
    })
    axios(`${apiurl}/api/customer`).then((res)=>{
      if(res.status==200){
        res.data.docs.map((v:Customer,i)=>{
          const tempDate = new Date(v.createdAt)
          const today = new Date()
          if(((today.getTime()-tempDate.getTime())/(1000*60*60*24*30))<1){
            setmonthSale(p=> p+1)
            setcustomers(p=> i<5?[...p,v]:[...p])
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
            <p style={{fontSize:50,fontWeight:700}}>{weekSale}</p>
            <p style={{marginTop:5}}>Sales This Week</p>
          </div>
          </div>
          <div className="">
            <div className={styles.card}>
              <p style={{fontSize:50,fontWeight:700}}>{monthSale}</p>
              <p style={{marginTop:5}}>Sales Last 1 Month</p>
            </div>
          </div>
          <div className={styles.colspan2}>
            {<LastSales sales={sales}/>}
          </div>
          <div className={styles.colspan2}>
            <LastCustomer customers={customers}/>
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