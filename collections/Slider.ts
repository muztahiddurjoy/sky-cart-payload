import { CollectionConfig } from "payload/types";

const Slider: CollectionConfig = {
    slug:'slider',
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
            type:'text',
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
            name:'img',
            type:'upload',
            relationTo:'media',
            required:true,
            label:'Image'
        },
        {
            name:'category',
            type:'relationship',
            relationTo:'categories',
            label:'Button Link',
            required:true
        }
    ]
}
export default Slider