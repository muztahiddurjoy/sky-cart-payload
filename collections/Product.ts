import { CollectionConfig } from "payload/types";

const Product: CollectionConfig = {
    slug:'product',
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
            label:'Image'
        },
        {
            type:'relationship',
            name:'category',
            label:'Category',
            relationTo:'categories',
            admin:{
                // components:{

                // }
            },
            required:true
        },
        {
            type:'select',
            name:'variant',
            label:'Variant',
            options:[
                {
                    label:'red',
                    value:'red'
                },
                {
                    label:'blue',
                    value:'blue'
                },
                {
                    label:'green',
                    value:'green'
                },
                {
                    label:'yellow',
                    value:'yellow'
                }
            ]
        }
    ]
}

export default Product