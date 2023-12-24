import { GlobalConfig } from "payload/types";

const Offer:GlobalConfig = {
    slug:'offer',
    fields:[
        {
            name:'title',
            label:'Title',
            type:'text',
            required:true
        },
        {
            name:'description',
            label:'Description',
            type:'text',
            required:true
        },
        {
            name:'color',
            label:'Color',
            type:'text',
            required:true
        },
        {
            name:'link',
            label:'Link',
            type:'text',
            required:true
        },
        {
            name:'linkText',
            label:'Link Text',
            type:'text',
            required:true
        },
        {
            name:'image',
            label:'Image',
            type:'upload',
            relationTo:'media',
            required:true
        }
    ]
}
export default Offer