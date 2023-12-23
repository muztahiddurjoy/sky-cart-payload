import { CollectionConfig } from "payload/types";

const Slider: CollectionConfig = {
    slug:'slider',
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
            name:'category',
            type:'relationship',
            relationTo:'categories',
            label:'Button Link',
            required:true
        }
    ]
}
export default Slider