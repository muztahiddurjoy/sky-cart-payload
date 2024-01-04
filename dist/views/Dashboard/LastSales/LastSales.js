"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var link_1 = __importDefault(require("next/link"));
var LastSales = function (_a) {
    var sales = _a.sales;
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h3", null, "Last 5 Sales"),
        react_1.default.createElement("div", { style: { marginTop: 20 } },
            react_1.default.createElement("table", { style: { width: '100%' } },
                react_1.default.createElement("thead", null,
                    react_1.default.createElement("tr", null,
                        react_1.default.createElement("th", { style: { textAlign: 'left' } }, "ID"),
                        react_1.default.createElement("th", { style: { textAlign: 'left', paddingLeft: 10 } }, "Customer"),
                        react_1.default.createElement("th", { style: { textAlign: 'left', paddingLeft: 10 } }, "Gross Sale"),
                        react_1.default.createElement("th", { style: { textAlign: 'right', paddingLeft: 10 } }, "Date"))),
                react_1.default.createElement("tbody", null, sales.map(function (v, i) {
                    return react_1.default.createElement("tr", { style: { marginTop: 20, marginBottom: 20 } },
                        react_1.default.createElement("td", null,
                            " ",
                            react_1.default.createElement(link_1.default, { href: "/admin/collections/sales/".concat(v.id), key: i }, v.id)),
                        react_1.default.createElement("td", null, v.customer.customer_name),
                        react_1.default.createElement("td", { style: { textAlign: 'left', paddingLeft: 10 } }, v.gross_sale),
                        react_1.default.createElement("td", { style: { textAlign: 'right', paddingLeft: 10 } }, new Date(v.createdAt).toLocaleDateString()));
                }))))));
};
exports.default = LastSales;
