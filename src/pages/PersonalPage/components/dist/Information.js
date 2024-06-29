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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var react_1 = require("react");
var react_redux_1 = require("react-redux");
var changeInfo_js_1 = require("../../../service/changeInfo.js");
var actionTypes_js_1 = require("../../../redux/actions/actionTypes.js");
var Information = function () {
    var dispatch = react_redux_1.useDispatch();
    var _a = react_redux_1.useSelector(function (state) { return state.auth; }), username = _a.username, phone = _a.phone, id = _a.id, avatar = _a.avatar, zalo = _a.zalo;
    var _b = react_1.useState(false), showModal = _b[0], setShowModal = _b[1];
    var _c = react_1.useState(null), newAvatar = _c[0], setNewAvatar = _c[1];
    var _d = react_1.useState(''), password = _d[0], setPassword = _d[1];
    var _e = react_1.useState({
        username: username,
        phone: phone,
        id: id,
        avatar: avatar,
        zalo: zalo,
        newPassword: ""
    }), payload = _e[0], setPayload = _e[1];
    // console.log(payload);
    var handleSubmit = function () { return __awaiter(void 0, void 0, void 0, function () {
        var formData, response, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!!password) return [3 /*break*/, 1];
                    alert("Bạn chưa nhập mật khẩu");
                    return [3 /*break*/, 4];
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    formData = new FormData();
                    formData.append('id', payload.id);
                    formData.append('password', password);
                    formData.append('newPassword', payload.newPassword);
                    formData.append('username', payload.username);
                    formData.append('phone', payload.phone);
                    formData.append('zalo', payload.zalo);
                    if (payload.avatar instanceof File) {
                        formData.append('avatar', payload.avatar);
                    }
                    return [4 /*yield*/, changeInfo_js_1.changeInfo(formData)];
                case 2:
                    response = _a.sent();
                    dispatch({ type: actionTypes_js_1.actionTypes.CHANGE_INFO, data: response.data });
                    // console.log(response);
                    setNewAvatar(null);
                    setPayload(__assign(__assign({}, payload), { newPassword: "" }));
                    setShowModal(false);
                    setPassword('');
                    return [3 /*break*/, 4];
                case 3:
                    error_1 = _a.sent();
                    alert("Bạn nhập sai mật khẩu!");
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var handlePostPayload = function () {
        // eslint-disable-next-line no-restricted-globals
        if (confirm("Bạn có chắc muốn thay đổi thông tin!")) {
            setShowModal(true);
        }
        else {
            alert("Bạn đã hủy thay đổi thông tin");
        }
    };
    var handleAvatarChange = function (e) {
        var file = e.target.files && e.target.files[0];
        if (file) {
            setPayload(function (pre) { return (__assign(__assign({}, pre), { avatar: file })); });
            var reader_1 = new FileReader();
            reader_1.onload = function () {
                if (typeof reader_1.result === 'string') {
                    setNewAvatar(reader_1.result);
                }
            };
            reader_1.readAsDataURL(file);
        }
    };
    return (react_1["default"].createElement("div", { className: "h-[100vh] overflow-auto" },
        react_1["default"].createElement("h1", { className: 'text-[30px] font-[600]' }, "C\u1EADp nh\u1EADt th\u00F4ng tin c\u00E1 nh\u00E2n"),
        react_1["default"].createElement("form", { className: "p-[30px] w-[70%]" },
            react_1["default"].createElement("table", { className: 'w-[70%] m-[auto] border-spacing-3' },
                react_1["default"].createElement("tbody", null,
                    react_1["default"].createElement("tr", null,
                        react_1["default"].createElement("td", null,
                            react_1["default"].createElement("label", { className: 'font-[500] text-[1.2rem]', htmlFor: "id" }, "M\u00E3 th\u00E0nh vi\u00EAn")),
                        react_1["default"].createElement("td", null,
                            react_1["default"].createElement("p", { title: 'Kh\u00F4ng th\u1EC3 \u0111\u1ED5i m\u00E3 t\u00E0i kho\u1EA3n', className: 'w-[100%] bg-gray-400 p-[5px] border-[2px] min-w-[100%]', id: 'id' }, id))),
                    react_1["default"].createElement("tr", null,
                        react_1["default"].createElement("td", null,
                            react_1["default"].createElement("label", { className: 'font-[500] text-[1.2rem]', htmlFor: "phone" }, "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i")),
                        react_1["default"].createElement("td", null,
                            react_1["default"].createElement("input", { type: "text", value: payload.phone, onChange: function (e) { return setPayload(function (pre) { return (__assign(__assign({}, pre), { phone: e.target.value })); }); }, className: 'p-[5px] border-[2px] min-w-[100%]', id: 'phone' }))),
                    react_1["default"].createElement("tr", null,
                        react_1["default"].createElement("td", null,
                            react_1["default"].createElement("label", { className: 'font-[500] text-[1.2rem]', htmlFor: "username" }, "T\u00EAn hi\u1EC3n th\u1ECB")),
                        react_1["default"].createElement("td", null,
                            react_1["default"].createElement("input", { type: "text", value: payload.username, onChange: function (e) { return setPayload(function (pre) { return (__assign(__assign({}, pre), { username: e.target.value })); }); }, className: 'p-[5px] border-[2px] min-w-[100%]', id: 'username' }))),
                    react_1["default"].createElement("tr", null,
                        react_1["default"].createElement("td", null,
                            react_1["default"].createElement("label", { className: 'font-[500] text-[1.2rem]', htmlFor: "zalo" }, "S\u1ED1 Zalo")),
                        react_1["default"].createElement("td", null,
                            react_1["default"].createElement("input", { placeholder: 'nh\u1EADp s\u1ED1 \u0111i\u1EC7n tho\u1EA1i', value: payload.zalo, onChange: function (e) { return setPayload(function (pre) { return (__assign(__assign({}, pre), { zalo: e.target.value })); }); }, type: "text", className: 'p-[5px] border-[2px] min-w-[100%]', id: 'zalo' }))),
                    react_1["default"].createElement("tr", null,
                        react_1["default"].createElement("td", null,
                            react_1["default"].createElement("label", { className: 'font-[500] text-[1.2rem]', htmlFor: "password" }, "M\u1EADt kh\u1EA9u")),
                        react_1["default"].createElement("td", null,
                            react_1["default"].createElement("input", { placeholder: 'nh\u1EADp m\u1EADt kh\u1EA9u m\u1EDBi', value: payload.newPassword, onChange: function (e) { return setPayload(function (pre) { return (__assign(__assign({}, pre), { newPassword: e.target.value })); }); }, type: "password", className: 'p-[5px] border-[2px] min-w-[100%]', id: 'password' }))),
                    react_1["default"].createElement("tr", null,
                        react_1["default"].createElement("td", null,
                            react_1["default"].createElement("label", { className: 'font-[500] text-[1.2rem]', htmlFor: "changeAvatar" }, "\u1EA2nh \u0111\u1EA1i di\u1EC7n")),
                        react_1["default"].createElement("td", null,
                            react_1["default"].createElement("div", { className: "flex" },
                                react_1["default"].createElement("img", { className: 'w-[100px] h-[100px] shadow-[1px_1px_1px_1px_#a7acaf] m-[10px]', src: avatar, alt: "avatar" }),
                                newAvatar &&
                                    react_1["default"].createElement("img", { className: 'w-[100px] h-[100px] shadow-[1px_1px_1px_1px_#a7acaf] m-[10px]', src: newAvatar, alt: "avatar" })),
                            react_1["default"].createElement("input", { type: "file", onChange: handleAvatarChange, className: 'border-[2px] min-w-[100%]', id: 'changeAvatar' }))),
                    react_1["default"].createElement("tr", null,
                        react_1["default"].createElement("td", { colSpan: 2 },
                            react_1["default"].createElement("button", { onClick: handlePostPayload, name: "button", type: "button", className: 'w-[100%] h-[50px] text-center bg-green-500 font-[600] text-white text-[1.2tem]' }, "L\u01B0u thay \u0111\u1ED5i & C\u1EADp nh\u1EADt")))))),
        showModal && (react_1["default"].createElement("div", { className: "fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" },
            react_1["default"].createElement("div", { className: "bg-white rounded-lg shadow-lg p-6 w-96" },
                react_1["default"].createElement("button", { className: "float-right text-gray-500 hover:text-gray-700", onClick: function () { return setShowModal(false); } }, "\u00D7"),
                react_1["default"].createElement("h2", { className: "mb-4 text-xl font-bold" }, "H\u00E3y nh\u1EADp l\u1EA1i m\u1EADt kh\u1EA9u:"),
                react_1["default"].createElement("input", { type: "password", className: "w-full p-2 mb-4 border border-gray-300 rounded", value: password, onChange: function (e) { return setPassword(e.target.value); } }),
                react_1["default"].createElement("button", { className: "w-full px-4 py-2 font-semibold text-white bg-green-500 rounded hover:bg-green-700", onClick: handleSubmit }, "OK"))))));
};
exports["default"] = Information;
