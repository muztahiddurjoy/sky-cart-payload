import { CollectionConfig } from "payload/types";
import CategoryAdapter from "./fields/CategoryAdapter";

const OfferSection:CollectionConfig = {
    slug:'offer',
    admin:{
        useAsTitle:'title'
    },
    fields:[
        {
            name:'title',
            type:'text',
            label:'Title',
            required:true
        },
        {
            name:'description',
            type:'richText',
            label:'Description',
            required:true
        },
        {
            name:'buttonText',
            type:'text',
            label:'Button Text',
            required:true
        },
        {
            name:'category_name',
            type:'relationship',
            label:'category_name',
            relationTo:'categories',
            // admin:{
            // components:{
            //     Field:CategoryAdapter
            // }
            // },
            // display:'category_name',
            required:true
        }
    ]
}

export default OfferSection