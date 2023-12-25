import { AfterChangeHook } from "payload/dist/collections/config/types";
import { CollectionConfig } from "payload/types";

// const saleEffect:AfterChangeHook = ({})

const Sales:CollectionConfig = {
    slug:'sales',
    // admin:{
    //     hooks: saleEffect
    // },
    fields:[
        {
            label:'Customer',
            type:'relationship',
            relationTo:'customer',
            name:'customer',
            required:true
        },
        {
            type:'number',
            label:'Gross Sale',
            name:'gross_sale',
            required:true
        },
        {
            type:'number',
            label:'Net Sale',
            name:'net_sale',
            required:true
        },
        {
            type:'number',
            label:'Discount (In Percent)',
            name:'discount',
            required:true
        },
        {
            label:'Products',
            name:'products_sales',
            type:'array',
            required:true,
            fields: [
                {
                    name:'product',
                    type:'relationship',
                    relationTo:'product'
                }
            ]
        }
    ]
}

export default Sales