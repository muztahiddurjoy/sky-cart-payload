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
            type:'select',
            name:'category',
            label:'Category',
            options:[
                {
                    label:'Category 1',
                    value:'category-1'
                },
                {
                    label:'Category 2',
                    value:'category-2'
                },
                {
                    label:'Category 3',
                    value:'category-3'
                }
            ]
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