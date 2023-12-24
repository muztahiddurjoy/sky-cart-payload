import { CollectionConfig } from "payload/types";

const Category:CollectionConfig ={
    slug:'categories',
    admin:{
        useAsTitle:'category_name'
    },
    fields:[
        {
            type:'text',
            name:'category_name',
            label:'Category'
        }
    ],
    labels:{
        singular:'Category',
        plural:'Categories'
    },
    indexes:[{
        fields:{
            name:1
        }
    }],
    access:{
        create:()=> true
    },
    // endpoints:[
    //     {
    //         method:'get',
    //         path:'/',
    //         handler:null
    //     }
    // ]
}
export default Category