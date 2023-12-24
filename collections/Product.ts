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
            label:'Product Name',
            required:true
        },
        {
            type:'number',
            name:'price',
            label:'Price',
            required:true
        },
        {
            type:'number',
            name:'quantity',
            label:'Quantity',
            required:true
        },
        {
            type:'number',
            name:'discount',
            label:'Discount',
            required:true
        },
        {
            type:'richText',
            name:'description',
            label:'Description',
            required:true
        },
        {
            type:'array',
            name:'image',
            fields:[
                {
                    name:'image',
                    type:'upload',
                    relationTo:'media'
                }
            ],
            required:true,
            label:'Images',
            
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
            relationTo:'variants',
            required:true
        },
        {
            type:'relationship',
            name:'shade',
            label:'Shade',
            relationTo:'shades',
            required:true
        }
    ]
}

export default Product