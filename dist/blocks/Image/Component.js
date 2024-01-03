"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = void 0;
var react_1 = __importDefault(require("react"));
var image_1 = __importDefault(require("next/image"));
var RichText_1 = __importDefault(require("../../components/RichText"));
var index_module_css_1 = __importDefault(require("./index.module.css"));
var sizes_json_1 = __importDefault(require("./sizes.json"));
var Component = function (props) {
    var image = props.image, type = props.type, caption = props.caption;
    if (typeof image === 'object') {
        var filenameToRender = image.filename;
        var width = image.width;
        var height = image.height;
        if (image.sizes[type]) {
            filenameToRender = image.sizes[type];
            width = image.sizes[type].width;
            height = image.sizes[type].height;
        }
        var sizesToUse = sizes_json_1.default.map(function (size) { return "(max-width: ".concat(size, "px) ").concat(size, "px"); }).join(', ');
        return (react_1.default.createElement("div", { className: "".concat(index_module_css_1.default.wrap, " ").concat(index_module_css_1.default[type]) },
            react_1.default.createElement(image_1.default, { src: "".concat(process.env.NEXT_PUBLIC_SERVER_URL, "/media/").concat(filenameToRender), alt: image.alt, sizes: sizesToUse, width: width, height: height }),
            caption && (react_1.default.createElement(RichText_1.default, { className: index_module_css_1.default.caption, content: caption }))));
    }
    return null;
};
exports.Component = Component;
