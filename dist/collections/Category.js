"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Category = {
    slug: 'categories',
    admin: {
        useAsTitle: 'category_name'
    },
    fields: [
        {
            type: 'text',
            name: 'category_name',
            label: 'Category'
        }
    ],
    labels: {
        singular: 'Category',
        plural: 'Categories'
    },
    indexes: [{
            fields: {
                name: 1
            }
        }],
    access: {
        create: function () { return true; }
    },
    // endpoints:[
    //     {
    //         method:'get',
    //         path:'/',
    //         handler:null
    //     }
    // ]
};
exports.default = Category;
