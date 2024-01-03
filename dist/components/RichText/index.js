"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var serialize_1 = __importDefault(require("./serialize"));
var RichText = function (_a) {
    var className = _a.className, content = _a.content;
    if (!content) {
        return null;
    }
    return (react_1.default.createElement("div", { className: className }, (0, serialize_1.default)(content)));
};
exports.default = RichText;
