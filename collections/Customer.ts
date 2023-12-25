import { CollectionConfig } from "payload/types";

const Customer:CollectionConfig = {
    slug:'customer',
    admin:{
        useAsTitle:'customer_name'
    },
    fields:[
        {
            name:'customer_name',
            type:'text',
            required:true,
            label:'Customer Name'
        },
        {
            name:'email',
            type:'text',
            required:false,
            label:'E-mail'
        },
        {
            name:'phone',
            type:'text',
            required:true,
            label:'Phone Number'
        },

    ]
}

export default Customer