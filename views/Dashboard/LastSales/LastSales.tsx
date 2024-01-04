import React from 'react'
import style from '../Dashboard.module.css'
import { Customer, Sale } from '../../../payload-types'
import Link from 'next/link'

const LastSales = ({sales}:{sales:Array<Sale>}) => {
  return (
    <div>
        <h3>Last 5 Sales</h3>
        <div style={{marginTop:20}}>
          <table style={{width:'100%'}}>
            <thead>
            <tr>
              <th style={{textAlign:'left'}}>ID</th>
              <th style={{textAlign:'left',paddingLeft:10}}>Customer</th>
              <th style={{textAlign:'left',paddingLeft:10}}>Gross Sale</th>
              <th style={{textAlign:'right',paddingLeft:10}}>Date</th>
            </tr>
            </thead>
            <tbody>
              {sales.map((v,i)=>
              <tr style={{marginTop:20,marginBottom:20}}>
                <td> <Link href={`/admin/collections/sales/${v.id}`} key={i}>{v.id}</Link></td>
                <td>
               {v.customer.customer_name}</td>
                <td style={{textAlign:'left',paddingLeft:10}}>{v.gross_sale}</td>
                <td style={{textAlign:'right',paddingLeft:10}}>{new Date(v.createdAt).toLocaleDateString()}</td>
              </tr>)}
            </tbody>

          </table>
        </div>
    </div>
  )
}

export default LastSales