import React from 'react'
import style from '../Dashboard.module.css'
import { Customer } from '../../../payload-types'
import Link from 'next/link'
const LastCustomer = ({customers}:{customers:Array<Customer>}) => {
  return (
    <div>
        <h3>Last 5 Customers</h3>
        <div style={{marginTop:20}}>
          <table style={{width:'100%'}}>
            <thead>
            <tr>
              <th style={{textAlign:'left'}}>Name</th>
              <th style={{textAlign:'left',paddingLeft:10}}>Email</th>
              <th style={{textAlign:'right',paddingLeft:10}}>Phone</th>
            </tr>
            </thead>
            <tbody>
              {customers.map((v,i)=>
              <tr style={{marginTop:20,marginBottom:20}}>
                <td> <Link href={`/admin/collections/customer/${v.id}`} key={i}>{v.customer_name}</Link></td>
                <td style={{paddingLeft:10}}>
               {v.email}</td>
                <td style={{textAlign:'right',paddingLeft:10}}>{v.phone}</td>
              </tr>)}
            </tbody>

          </table>
        </div>
    </div>
  )
}

export default LastCustomer