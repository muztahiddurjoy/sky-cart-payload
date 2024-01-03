"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("payload/config");
var dotenv_1 = __importDefault(require("dotenv"));
var Media_1 = __importDefault(require("./collections/Media"));
var Product_1 = __importDefault(require("./collections/Product"));
var Category_1 = __importDefault(require("./collections/Category"));
var Dashboard_1 = __importDefault(require("./views/Dashboard/Dashboard"));
// import OfferSection from './collections/OfferSection';
var Slider_1 = __importDefault(require("./collections/Slider"));
var Variant_1 = __importDefault(require("./collections/Variant"));
var Shade_1 = __importDefault(require("./collections/Shade"));
var OfferSection_1 = __importDefault(require("./global/OfferSection"));
var Customer_1 = __importDefault(require("./collections/Customer"));
var Sales_1 = __importDefault(require("./collections/Sales"));
var Socials_1 = __importDefault(require("./global/Socials"));
var Logo_1 = require("./views/Logo");
dotenv_1.default.config();
exports.default = (0, config_1.buildConfig)({
    serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
    admin: {
        // css: path.resolve(__dirname, './css/compiledTailwind.css'),
        meta: {
            titleSuffix: '- SkyCart',
            favicon: '/logo/favicon.ico',
            ogImage: '/logo/logo.png',
        },
        components: {
            graphics: {
                Icon: Logo_1.Logo,
                Logo: Logo_1.Logo
            },
            views: {
                Dashboard: Dashboard_1.default,
            }
        },
        webpack: function (config) {
            return __assign(__assign({}, config), { module: __assign(__assign({}, config.module), { rules: __spreadArray(__spreadArray([], config.module.rules, true), [
                        {
                            test: /\tailwind.css$/i,
                            use: ['css-loader', 'postcss-loader'],
                        },
                    ], false) }) });
        },
    },
    globals: [
        Socials_1.default,
        OfferSection_1.default
    ],
    collections: [
        Sales_1.default,
        Media_1.default,
        Slider_1.default,
        Product_1.default,
        Category_1.default,
        Customer_1.default,
        Variant_1.default,
        Shade_1.default
    ],
    graphQL: {
        disable: true
    }
});
