"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = void 0;
/* eslint-disable jsx-a11y/anchor-is-valid */
var react_1 = __importDefault(require("react"));
var link_1 = __importDefault(require("next/link"));
var RichText_1 = __importDefault(require("../../components/RichText"));
var index_module_css_1 = __importDefault(require("./index.module.css"));
var Component = function (props) {
    var content = props.content, buttons = props.buttons;
    return (react_1.default.createElement("div", { className: index_module_css_1.default.cta },
        react_1.default.createElement("div", { className: index_module_css_1.default.wrap },
            react_1.default.createElement(RichText_1.default, { content: content, className: index_module_css_1.default.content }),
            buttons && (react_1.default.createElement("ul", { className: index_module_css_1.default.buttons }, buttons.map(function (button, i) { return (react_1.default.createElement("li", { key: i },
                button.type === 'page' && (react_1.default.createElement(link_1.default, { href: "[...slug]", as: "/".concat(button.page.slug), className: index_module_css_1.default.button }, button.label)),
                button.type === 'custom' && (react_1.default.createElement("a", { className: index_module_css_1.default.button, href: button.url, target: button.newTab ? '_blank' : undefined, rel: "noopener noreferrer" }, button.label)))); }))))));
};
exports.Component = Component;
