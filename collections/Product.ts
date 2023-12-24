import payload from "payload";
import { CollectionConfig } from "payload/types";

const Product: CollectionConfig = {
    slug:'product',
    admin:{
        useAsTitle:'product_name'
    },
    fields:[
        {
            type:"text",
            name:'product_name',
            label:'Product Name'
        },
        {
            type:'number',
            name:'price',
            label:'Price'
        },
        {
            type:'number',
            name:'quantity',
            label:'Quantity'
        },
        {
            type:'number',
            name:'discount',
            label:'Discount'
        },
        {
            type:'richText',
            name:'description',
            label:'Description'
        },
        {
            type:'upload',
            name:'image',
            relationTo:'media',
            label:'Image',
            
        },
        {
            type:'relationship',
            name:'category',
            label:'Category',
            relationTo:'categories',
            hasMany:false,
            maxDepth:10,
            admin:{
                allowCreate:true,
                isSortable:true
            },
            required:true
        },
        {
            type:'relationship',
            name:'variant',
            label:'Variant',
            relationTo:'variants'
        },
        {
            type:'relationship',
            name:'shade',
            label:'Shade',
            relationTo:'shades'
        }
    ]
}

export default Product