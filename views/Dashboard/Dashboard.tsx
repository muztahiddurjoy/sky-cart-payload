import React, { useEffect, useState } from 'react'
import {Eyebrow, Gutter,Button,Card,Nav} from "payload/components/elements"
import { GetServerSideProps } from 'next';
import styles from  './Dashboard.module.css'
const Dashboard = (props) => {
  const [monthSale, setmonthSale] = useState('')
  const [weekSale, setweekSale] = useState('')
  useEffect(() => {
    console.log(props)
  }, [])
  
  return (
    <>
    <Eyebrow/>
    <Gutter>
      <div className={styles.grid}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <p style={{fontSize:50,fontWeight:700}}>100</p>
            <p style={{marginTop:5}}>This Week</p>
          </div>
          <div className={styles.card}>
            <p style={{fontSize:50,fontWeight:700}}>100</p>
            <p style={{marginTop:5}}>This Month</p>
          </div>
          
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
  return {
          props: {
            text:'random'
          },
  };
};

export default Dashboard