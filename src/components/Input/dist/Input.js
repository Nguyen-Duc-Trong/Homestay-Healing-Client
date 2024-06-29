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
exports.__esModule = true;
var react_1 = require("react");
var InputForm = function (_a) {
    var _b;
    var label = _a.label, value = _a.value, setValue = _a.setValue, keyPayload = _a.keyPayload, invalidFields = _a.invalidFields, setInvalidFields = _a.setInvalidFields, type = _a.type;
    return (react_1["default"].createElement("div", null,
        react_1["default"].createElement("label", { htmlFor: keyPayload, className: 'text-xs' }, label),
        react_1["default"].createElement("input", { type: type || 'text', id: keyPayload, className: 'outline-none bg-[#e8f0fe] p-2 rounded-md w-full', value: value, onChange: function (e) { return setValue(function (prev) {
                var _a;
                return (__assign(__assign({}, prev), (_a = {}, _a[keyPayload] = e.target.value, _a)));
            }); }, onFocus: function () { return setInvalidFields([]); } }),
        invalidFields.length > 0 &&
            invalidFields.some(function (i) { return i.name === keyPayload; }) &&
            react_1["default"].createElement("small", { className: 'text-red-500 italic' }, (_b = invalidFields.find(function (i) { return i.name === keyPayload; })) === null || _b === void 0 ? void 0 : _b.message)));
};
exports["default"] = react_1.memo(InputForm);
