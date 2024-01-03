"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = void 0;
var react_1 = __importDefault(require("react"));
var RichText_1 = __importDefault(require("../../components/RichText"));
var index_module_css_1 = __importDefault(require("./index.module.css"));
var Component = function (props) {
    var content = props.content;
    return (react_1.default.createElement("div", { className: index_module_css_1.default.wrap },
        react_1.default.createElement(RichText_1.default, { content: content, className: index_module_css_1.default.content })));
};
exports.Component = Component;
