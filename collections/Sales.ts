
import payload from "payload";
import { CollectionConfig,CollectionAfterChangeHook } from "payload/types";
import { Sale } from "../payload-types";

// const saleEffect:AfterChangeHook = ({})
const afterChangeHook:CollectionAfterChangeHook = async ({
doc,
operation,
previousDoc,
req
}) =>{
    if(operation=="create"){
        if(Array.isArray(doc.products_sales)){
            doc.products_sales.map(async (v)=>{
                // v.products_sales.map((v,i)=> v.id)
                const product = await payload.findByID({
                    collection:'product',
                    id:v.product
                })
                payload.update({
                    collection:'product',
                    id:v.product,
                    data:{quantity:Number(Number(product.quantity)-Number(doc.gross_sale))}
                })
            })
        }
    }
    return doc
}
 
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
    ],
    hooks:{
        afterChange:[afterChangeHook]
    }
}

export default Sales