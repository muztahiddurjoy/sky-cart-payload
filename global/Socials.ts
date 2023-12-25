import { GlobalConfig } from "payload/types";

const Social:GlobalConfig = {
    slug:'social',
    fields:[
        {
            label:'Facebook',
            type:'text',
            name:'facebook',
            required:true
        },
        {
            label:'Instagram',
            type:'text',
            name:'instagram',
            required:true
        },
        {
            label:'Whatsapp',
            type:'text',
            name:'whatsapp',
            required:true
        },
        {
            label:'Phone',
            type:'text',
            name:'phone',
            required:true
        },
        {
            label:'Email',
            type:'text',
            name:'email',
            required:true
        },
        {
            label:'Address',
            type:'text',
            name:'address',
            required:true
        }
    ]
}

export default Social