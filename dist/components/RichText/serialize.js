"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var escape_html_1 = __importDefault(require("escape-html"));
var slate_1 = require("slate");
var serialize = function (children) { return children.map(function (node, i) {
    if (slate_1.Text.isText(node)) {
        var text = react_1.default.createElement("span", { dangerouslySetInnerHTML: { __html: (0, escape_html_1.default)(node.text) } });
        if (node.bold) {
            text = (react_1.default.createElement("strong", { key: i }, text));
        }
        if (node.code) {
            text = (react_1.default.createElement("code", { key: i }, text));
        }
        if (node.italic) {
            text = (react_1.default.createElement("em", { key: i }, text));
        }
        if (node.underline) {
            text = (react_1.default.createElement("span", { style: { textDecoration: 'underline' }, key: i }, text));
        }
        if (node.strikethrough) {
            text = (react_1.default.createElement("span", { style: { textDecoration: 'line-through' }, key: i }, text));
        }
        return (react_1.default.createElement(react_1.Fragment, { key: i }, text));
    }
    if (!node) {
        return null;
    }
    switch (node.type) {
        case 'h1':
            return (react_1.default.createElement("h1", { className: 'text-3xl font-extrabold', key: i }, serialize(node.children)));
        case 'h2':
            return (react_1.default.createElement("h2", { className: 'text-2xl font-bold', key: i }, serialize(node.children)));
        case 'h3':
            return (react_1.default.createElement("h3", { className: 'text-xl font-semibold', key: i }, serialize(node.children)));
        case 'h4':
            return (react_1.default.createElement("h4", { className: 'text-xl font-medium', key: i }, serialize(node.children)));
        case 'h5':
            return (react_1.default.createElement("h5", { className: 'text-lg font-medium', key: i }, serialize(node.children)));
        case 'h6':
            return (react_1.default.createElement("h6", { className: 'font-normal', key: i }, serialize(node.children)));
        case 'quote':
            return (react_1.default.createElement("blockquote", { className: 'quote text-gray-600', key: i }, serialize(node.children)));
        case 'ul':
            return (react_1.default.createElement("ul", { className: 'list-disc pl-5', key: i }, serialize(node.children)));
        case 'ol':
            return (react_1.default.createElement("ol", { className: 'list-decimal pl-5', key: i }, serialize(node.children)));
        case 'li':
            return (react_1.default.createElement("li", { className: 'list-item text-gray-600', key: i }, serialize(node.children)));
        case 'link':
            return (react_1.default.createElement("a", { href: (0, escape_html_1.default)(node.url), key: i }, serialize(node.children)));
        default:
            return (react_1.default.createElement("p", { className: '', key: i }, serialize(node.children)));
    }
}); };
exports.default = serialize;
