"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var ProductCard_module_css_1 = __importDefault(require("./ProductCard.module.css"));
var link_1 = __importDefault(require("next/link"));
var ProductCard = function (_a) {
    var image = _a.image, link = _a.link, stock = _a.stock, title = _a.title;
    return (react_1.default.createElement(link_1.default, { href: "/admin/collections/product/".concat(link), style: { textDecoration: 'none' } },
        react_1.default.createElement("div", { className: ProductCard_module_css_1.default.container },
            react_1.default.createElement("img", { src: image, height: 100, width: 100 }),
            react_1.default.createElement("div", { style: { marginLeft: 10 } },
                react_1.default.createElement("h3", { style: { margin: 0 } }, title),
                react_1.default.createElement("div", { style: { marginTop: 0, paddingTop: 0 } },
                    "Stock: ",
                    stock)))));
};
exports.default = ProductCard;
