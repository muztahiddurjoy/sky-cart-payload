"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Page = void 0;
var formatSlug_1 = __importDefault(require("../utilities/formatSlug"));
var Config_1 = require("../blocks/Image/Config");
var Config_2 = require("../blocks/CallToAction/Config");
var Config_3 = require("../blocks/Content/Config");
exports.Page = {
    slug: 'pages',
    admin: {
        useAsTitle: 'title',
    },
    access: {
        read: function () { return true; }, // Everyone can read Pages
    },
    fields: [
        {
            name: 'title',
            label: 'Page Title',
            type: 'text',
            required: true,
        },
        {
            name: 'image',
            label: 'Featured Image',
            type: 'upload',
            relationTo: 'media',
        },
        {
            name: 'layout',
            label: 'Page Layout',
            type: 'blocks',
            minRows: 1,
            blocks: [
                Config_2.CallToAction,
                Config_3.Content,
                Config_1.Image,
            ],
        },
        {
            name: 'meta',
            label: 'Page Meta',
            type: 'group',
            fields: [
                {
                    name: 'title',
                    label: 'Title',
                    type: 'text',
                },
                {
                    name: 'description',
                    label: 'Description',
                    type: 'textarea',
                },
                {
                    name: 'keywords',
                    label: 'Keywords',
                    type: 'text',
                },
            ],
        },
        {
            name: 'slug',
            label: 'Page Slug',
            type: 'text',
            admin: {
                position: 'sidebar',
            },
            hooks: {
                beforeValidate: [
                    (0, formatSlug_1.default)('title'),
                ],
            },
        },
    ],
};
exports.default = exports.Page;
