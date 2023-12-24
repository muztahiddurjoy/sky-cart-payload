import { CollectionConfig } from "payload/types";

const VariantCollection:CollectionConfig = {
    slug:'variants',
    admin:{
        useAsTitle:'color'
    },
    fields:[
        {
            type:'text',
            name:'color',
            label:'Color'
        }
    ]
}

export default VariantCollection