"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Media = {
    slug: 'media',
    access: {
        read: function () { return true; }, // Everyone can read Media
    },
    upload: {
        adminThumbnail: 'card',
        imageSizes: [
            {
                name: 'card',
                width: 640,
                height: 480,
            },
            {
                name: 'feature',
                width: 1024,
                height: 576,
            },
        ],
    },
    fields: [
        {
            name: 'alt',
            label: 'Alt Text',
            type: 'text',
            required: true,
        },
    ],
};
exports.default = Media;
