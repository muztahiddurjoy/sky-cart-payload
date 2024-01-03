"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var format = function (val) { return val.replace(/ /g, '-').replace(/[^\w-/]+/g, '').toLowerCase(); };
var formatSlug = function (fallback) { return function (_a) {
    var value = _a.value, originalDoc = _a.originalDoc, data = _a.data;
    if (typeof value === 'string') {
        return format(value);
    }
    var fallbackData = (data && data[fallback]) || (originalDoc && originalDoc[fallback]);
    if (fallbackData && typeof fallbackData === 'string') {
        return format(fallbackData);
    }
    return value;
}; };
exports.default = formatSlug;
