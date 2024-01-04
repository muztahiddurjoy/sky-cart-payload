"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var link_1 = __importDefault(require("next/link"));
var LastCustomer = function (_a) {
    var customers = _a.customers;
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("h3", null, "Last 5 Customers"),
        react_1.default.createElement("div", { style: { marginTop: 20 } },
            react_1.default.createElement("table", { style: { width: '100%' } },
                react_1.default.createElement("thead", null,
                    react_1.default.createElement("tr", null,
                        react_1.default.createElement("th", { style: { textAlign: 'left' } }, "Name"),
                        react_1.default.createElement("th", { style: { textAlign: 'left', paddingLeft: 10 } }, "Email"),
                        react_1.default.createElement("th", { style: { textAlign: 'right', paddingLeft: 10 } }, "Phone"))),
                react_1.default.createElement("tbody", null, customers.map(function (v, i) {
                    return react_1.default.createElement("tr", { style: { marginTop: 20, marginBottom: 20 } },
                        react_1.default.createElement("td", null,
                            " ",
                            react_1.default.createElement(link_1.default, { href: "/admin/collections/customer/".concat(v.id), key: i }, v.customer_name)),
                        react_1.default.createElement("td", { style: { paddingLeft: 10 } }, v.email),
                        react_1.default.createElement("td", { style: { textAlign: 'right', paddingLeft: 10 } }, v.phone));
                }))))));
};
exports.default = LastCustomer;
