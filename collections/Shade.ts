import { CollectionConfig } from "payload/types";

const Shades:CollectionConfig = {
    slug:'shades',
    admin:{
        useAsTitle:'shade'
    },
    fields:[
        {
            type:'text',
            name:'shade',
            label:'Shade'
        }
    ]
}

export default Shades