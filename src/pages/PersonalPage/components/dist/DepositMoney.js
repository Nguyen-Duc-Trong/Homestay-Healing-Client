"use strict";
exports.__esModule = true;
var react_1 = require("react");
var atmBanking_png_1 = require("../../../assets/imgs/listPayImg/atmBanking.png");
var chuyyenkhoan_png_1 = require("../../../assets/imgs/listPayImg/chuyyenkhoan.png");
var diemgiaodich_png_1 = require("../../../assets/imgs/listPayImg/diemgiaodich.png");
var momo_png_1 = require("../../../assets/imgs/listPayImg/momo.png");
var qr_code_png_1 = require("../../../assets/imgs/listPayImg/qr-code.png");
var shopeepay2_png_1 = require("../../../assets/imgs/listPayImg/shopeepay2.png");
var tindungqt_png_1 = require("../../../assets/imgs/listPayImg/tindungqt.png");
var zalopay_png_1 = require("../../../assets/imgs/listPayImg/zalopay.png");
var react_router_dom_1 = require("react-router-dom");
var fa_1 = require("react-icons/fa");
var react_redux_1 = require("react-redux");
var DepositMoney = function () {
    var listPay = [
        {
            title: "Chuyển khoản",
            img: chuyyenkhoan_png_1["default"],
            link: "/personal/DepositMoney/transfer"
        },
        {
            title: "Thẻ ATM Internet Banking",
            img: atmBanking_png_1["default"],
            link: "/"
        },
        {
            title: "thẻ tín dụng quốc tế",
            img: tindungqt_png_1["default"],
            link: "/"
        },
        {
            title: "MOMO",
            img: momo_png_1["default"],
            link: "/"
        },
        {
            title: "ZaloPay",
            img: zalopay_png_1["default"],
            link: "/"
        },
        {
            title: "ShopeePay",
            img: shopeepay2_png_1["default"],
            link: "/"
        },
        {
            title: "Điểm giao dịch, cửa hàng tiện lợi",
            img: diemgiaodich_png_1["default"],
            link: "/"
        },
        {
            title: "Quét mã QRCode",
            img: qr_code_png_1["default"],
            link: "/"
        },
    ];
    var money = react_redux_1.useSelector(function (state) { return state.auth; }).money;
    function formatCurrency(amount) {
        var amountStr = amount.toString();
        return amountStr.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    return (react_1["default"].createElement("div", { className: " h-[100vh] " },
        react_1["default"].createElement("h1", { className: 'text-[30px] font-[600]' }, "N\u1EA1p ti\u1EC1n v\u00E0o t\u00E0i kho\u1EA3n"),
        react_1["default"].createElement("div", { className: "w-[100%] h-[90vh] overflow-auto flex pb-[1000px]" },
            react_1["default"].createElement("div", { className: "w-[80%] min-h-[100%]  border-[1px]" },
                react_1["default"].createElement("br", null),
                react_1["default"].createElement("br", null),
                react_1["default"].createElement("h1", { className: 'text-[30px] font-[400]' }, "M\u1EDDi b\u1EA1n ch\u1ECDn ph\u01B0\u01A1ng th\u1EE9c n\u1EA1p ti\u1EC1n"),
                react_1["default"].createElement("br", null),
                react_1["default"].createElement("br", null),
                react_1["default"].createElement("div", { className: "w-[90%] m-auto grid grid-cols-3  gap-[40px]" }, listPay.map(function (item, index) {
                    return (react_1["default"].createElement(react_router_dom_1.Link, { key: index, to: item.link },
                        react_1["default"].createElement("div", { className: "w-[180px] h-[190px] bg-white m-auto m-[5px]\r\n                        hover:scale-[1.1] hover:shadow-[1px_1px_30px_rgba(0,0,0,0.5)]\r\n                        group rounded-[20px] border-[1px] hover:border-[gray] overflow-hidden" },
                            react_1["default"].createElement("div", { className: "w-[100%] h-[140px]" },
                                react_1["default"].createElement("img", { src: item.img, alt: "img", className: 'w-[100%] h-[100%] p-[5px]' })),
                            react_1["default"].createElement("div", { className: "w-[100%] h-[60px] group-hover:bg-blue-500" },
                                react_1["default"].createElement("h1", { className: 'text-center font-[700] text-[1rem]' },
                                    " ",
                                    item.title)))));
                }))),
            react_1["default"].createElement("div", { className: "w-[20%] min-h-[100%] border-[1px]" },
                react_1["default"].createElement("div", { className: "w-[95%] h-[100px] border-[black]  border-[1px] m-[5px] p-[10px]" },
                    react_1["default"].createElement("h1", { className: "font-[600] text-[1.2rem]" }, "S\u1ED1 d\u01B0 t\u00E0i kho\u1EA3n: "),
                    react_1["default"].createElement("h1", { className: "font-[700] text-[1.4rem] text-[green]" },
                        formatCurrency(money),
                        " \u0111")),
                react_1["default"].createElement(react_router_dom_1.Link, { to: '/personal/DepositHistory' },
                    react_1["default"].createElement("button", { className: "w-[100%] flex items-center justify-center h-[30px] m-[5px] font-[600] text-[1.1rem] text-white bg-[#6c757d]" },
                        "L\u1ECBch s\u1EED n\u1EA1p ti\u1EC1n",
                        react_1["default"].createElement(fa_1.FaChevronRight, { className: 'font-[600] text-[1rem] text-white m-[5px]' }))),
                react_1["default"].createElement(react_router_dom_1.Link, { to: '/personal/PaymentHistory' },
                    react_1["default"].createElement("button", { className: "w-[100%] flex items-center justify-center h-[30px] m-[5px] font-[600] text-[1.1rem] text-white bg-[#6c757d]" },
                        "L\u1ECBch s\u1EED thanh to\u00E1n",
                        react_1["default"].createElement(fa_1.FaChevronRight, { className: 'font-[600] text-[1rem] text-white m-[5px]' }))),
                react_1["default"].createElement(react_router_dom_1.Link, { to: '/personal/ServicePriceList' },
                    react_1["default"].createElement("button", { className: "w-[100%] flex items-center justify-center h-[30px] m-[5px] font-[600] text-[1.1rem] text-white bg-[#6c757d]" },
                        "B\u1EA3ng gi\u00E1 d\u1ECBch v\u1EE5",
                        react_1["default"].createElement(fa_1.FaChevronRight, { className: 'font-[600] text-[1rem] text-white m-[5px]' })))))));
};
exports["default"] = DepositMoney;
