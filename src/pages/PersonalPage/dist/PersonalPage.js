"use strict";
exports.__esModule = true;
var react_1 = require("react");
var NavBar_tsx_1 = require("../../components/DefaultLayOut/Header/Navbar/NavBar.tsx");
var io5_1 = require("react-icons/io5");
var sl_1 = require("react-icons/sl");
var cg_1 = require("react-icons/cg");
var lia_1 = require("react-icons/lia");
var ri_1 = require("react-icons/ri");
var gr_1 = require("react-icons/gr");
var fa_1 = require("react-icons/fa");
var io_1 = require("react-icons/io");
var react_router_dom_1 = require("react-router-dom");
var logoPerson_png_1 = require("../../assets/imgs/logo/logoPerson.png");
var react_redux_1 = require("react-redux");
var main1Slice_js_1 = require("../../../src/redux/slides/main1Slice.js");
var actionTypes_js_1 = require("../../redux/actions/actionTypes.js");
var PersonalPage = function (_a) {
    var children = _a.children;
    var dispatch = react_redux_1.useDispatch();
    var navigate = react_router_dom_1.useNavigate();
    var activeItemNav = react_redux_1.useSelector(function (state) { return state.main1.activeItemNav; });
    var _b = react_redux_1.useSelector(function (state) { return state.auth; }), username = _b.username, phone = _b.phone, id = _b.id, money = _b.money, rules = _b.rules, avatar = _b.avatar;
    react_1.useEffect(function () {
        // Lưu active item vào localStorage mỗi khi nó thay đổi
        localStorage.setItem('activeItemNav', activeItemNav.toString());
    }, [activeItemNav]);
    var handleHeaderActive = function (id) {
        dispatch(main1Slice_js_1.setActiveItemNav(id));
    };
    var info = {
        username: "TMC",
        sdt: "123456789",
        mathanhvien: "987654321",
        tkchinh: "1000000"
    };
    var changeTittle = function () {
        var title = " ";
        switch (activeItemNav) {
            case 1:
                title = "Quản lý đăng tin";
                break;
            case 2:
                title = "Sửa thông tin cá nhân";
                break;
            case 3:
                title = "Nạp tiền vào tài khoản";
                break;
            case 4:
                title = "Lịch sử nạp tiền";
                break;
            case 5:
                title = "Lịch sử thanh toán";
                break;
            case 6:
                title = "Bảng giá dịch vụ";
                break;
            case 7:
                title = "Liên hệ";
                break;
            default:
                title = " ";
                break;
        }
        return title;
    };
    function formatCurrency(amount) {
        var amountStr = amount.toString();
        return amountStr.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
    var gotohome = function () {
        navigate("/");
        dispatch(main1Slice_js_1.setActiveItem(1));
    };
    return (react_1["default"].createElement("div", { className: "" },
        react_1["default"].createElement("div", { className: "flex fixed w-[100vw] h-[100vh]" },
            react_1["default"].createElement("div", { className: "w-[20%]  bg-gray-100 " },
                react_1["default"].createElement("div", { onClick: gotohome, className: "bg-[#055699] h-[40px] p-[5px] flex justify-center items-center" },
                    react_1["default"].createElement("img", { className: 'w-[100$] h-[100%]', src: logoPerson_png_1["default"], alt: "LOGO" }),
                    react_1["default"].createElement("span", { className: 'm-[5px] text-white font-[900]' }, "HOMSTAY HEALING")),
                react_1["default"].createElement("div", { className: "w-[100%] min-h-[100%] p-[10px] " },
                    react_1["default"].createElement("div", { className: "flex h-[100px]" },
                        react_1["default"].createElement("div", { className: " w-[100px] h-[100%]" },
                            react_1["default"].createElement("img", { className: 'w-[100%] h-[100%] shadow-[1px_1px_1px_1px_#a7acaf] rounded-[10rem]', src: avatar, alt: "avatar" })),
                        react_1["default"].createElement("div", { className: " w-[60%] h-[100%] py-[20px] px-[10px]" },
                            react_1["default"].createElement("h1", { className: 'font-[600]' }, username),
                            react_1["default"].createElement("h1", { className: '' }, phone))),
                    react_1["default"].createElement("br", null),
                    react_1["default"].createElement("p", null,
                        "M\u00E3 th\u00E0nh vi\u00EAn : ",
                        react_1["default"].createElement("span", { className: 'font-[600]' }, id)),
                    react_1["default"].createElement("p", null,
                        "T\u00E0i kho\u1EA3n ch\u00EDnh : ",
                        react_1["default"].createElement("span", { className: 'font-[600]' },
                            formatCurrency(money),
                            " VND")),
                    react_1["default"].createElement("div", { className: "flex" },
                        react_1["default"].createElement(react_router_dom_1.Link, { to: "/personal/DepositMoney" },
                            react_1["default"].createElement("button", { className: ' px-[10px] py-[5px] m-[5px] hover:bg-yellow-400 bg-yellow-500 text-white font-[700]' }, "N\u1EA1p ti\u1EC1n ")),
                        rules === "admin" ?
                            react_1["default"].createElement("button", { className: ' px-[10px] py-[5px] m-[5px] hover:bg-red-400 bg-red-500 text-white font-[700]' }, "\u0110\u0103ng tin ")
                            :
                                react_1["default"].createElement("div", { className: "" })),
                    react_1["default"].createElement("br", null),
                    react_1["default"].createElement("div", { className: "w-[100%] min-h-[80px] bg-[#fff9e6] rounded-[10px] p-[5px]" },
                        react_1["default"].createElement("p", { className: 'font-[600]' }, "Nh\u00E2n vi\u00EAn h\u1ED7 tr\u1EE3 c\u1EE7a b\u1EA1n l\u00E0 : "),
                        react_1["default"].createElement("p", { className: 'font-[600]' }, "\u0110\u1EE9c Tr\u1ECDng "),
                        react_1["default"].createElement("p", { className: 'font-[600]' }, "0912123456")),
                    react_1["default"].createElement("br", null),
                    react_1["default"].createElement("div", { className: "h-[40vh] overflow-y-auto pb-[100px]" },
                        react_1["default"].createElement("ul", null,
                            rules !== "user" ?
                                react_1["default"].createElement(react_router_dom_1.Link, { to: "/personal/ManagePostings" },
                                    react_1["default"].createElement("li", { className: "flex items-center justify-left pl-[20px] h-[40px] hover:bg-white " + (activeItemNav === 1 ? "font-[700] bg-gray-200" : "") + " ", onClick: function () { return handleHeaderActive(1); } },
                                        react_1["default"].createElement("span", { className: 'flex justify-around' },
                                            react_1["default"].createElement(io5_1.IoDocumentTextOutline, { className: 'm-[3px]' }),
                                            " ",
                                            react_1["default"].createElement("span", null, "Qu\u1EA3n l\u00FD \u0111\u0103ng tin"),
                                            "  ")))
                                :
                                    react_1["default"].createElement("li", { className: "" }),
                            react_1["default"].createElement(react_router_dom_1.Link, { to: "/personal/Information" },
                                react_1["default"].createElement("li", { className: "flex items-center justify-left pl-[20px] h-[40px] hover:bg-white " + (activeItemNav === 2 ? "font-[700] bg-gray-200" : "") + " ", onClick: function () { return handleHeaderActive(2); } },
                                    react_1["default"].createElement("span", { className: 'flex justify-around' },
                                        " ",
                                        react_1["default"].createElement(sl_1.SlNote, { className: 'm-[3px]' }),
                                        " ",
                                        react_1["default"].createElement("span", null, "S\u1EEDa th\u00F4ng tin c\u00E1 nh\u00E2n"),
                                        "  "))),
                            react_1["default"].createElement(react_router_dom_1.Link, { to: "/personal/DepositMoney" },
                                react_1["default"].createElement("li", { className: "flex items-center justify-left pl-[20px] h-[40px] hover:bg-white " + (activeItemNav === 3 ? "font-[700] bg-gray-200" : "") + " ", onClick: function () { return handleHeaderActive(3); } },
                                    react_1["default"].createElement("span", { className: 'flex justify-around' },
                                        react_1["default"].createElement(cg_1.CgDollar, { className: 'm-[3px]' }),
                                        "  ",
                                        react_1["default"].createElement("span", null, " N\u1EA1p ti\u1EC1n v\u00E0o t\u00E0i kho\u1EA3n"),
                                        " "))),
                            react_1["default"].createElement(react_router_dom_1.Link, { to: "/personal/DepositHistory" },
                                react_1["default"].createElement("li", { className: "flex items-center justify-left pl-[20px] h-[40px] hover:bg-white " + (activeItemNav === 4 ? "font-[700] bg-gray-200" : "") + " ", onClick: function () { return handleHeaderActive(4); } },
                                    react_1["default"].createElement("span", { className: 'flex justify-around' },
                                        " ",
                                        react_1["default"].createElement(lia_1.LiaHistorySolid, { className: 'm-[3px]' }),
                                        "  ",
                                        react_1["default"].createElement("span", null, " L\u1ECBch s\u1EED n\u1EA1p ti\u1EC1n"),
                                        " "))),
                            react_1["default"].createElement(react_router_dom_1.Link, { to: "/personal/PaymentHistory" },
                                react_1["default"].createElement("li", { className: "flex items-center justify-left pl-[20px] h-[40px] hover:bg-white " + (activeItemNav === 5 ? "font-[700] bg-gray-200" : "") + " ", onClick: function () { return handleHeaderActive(5); } },
                                    react_1["default"].createElement("span", { className: 'flex justify-around' },
                                        " ",
                                        react_1["default"].createElement(ri_1.RiFolderHistoryLine, { className: 'm-[3px]' }),
                                        " ",
                                        react_1["default"].createElement("span", null, "L\u1ECBch s\u1EED thanh to\u00E1n"),
                                        " "))),
                            react_1["default"].createElement(react_router_dom_1.Link, { to: "/personal/ServicePriceList" },
                                react_1["default"].createElement("li", { className: "flex items-center justify-left pl-[20px] h-[40px] hover:bg-white " + (activeItemNav === 6 ? "font-[700] bg-gray-200" : "") + " ", onClick: function () { return handleHeaderActive(6); } },
                                    react_1["default"].createElement("span", { className: 'flex justify-around' },
                                        " ",
                                        react_1["default"].createElement(fa_1.FaRegClipboard, { className: 'm-[3px]' }),
                                        react_1["default"].createElement("span", null, "B\u1EA3ng gi\u00E1 d\u1ECBch v\u1EE5"),
                                        " "))),
                            react_1["default"].createElement(react_router_dom_1.Link, { to: "/personal/Contact" },
                                react_1["default"].createElement("li", { className: "flex items-center justify-left pl-[20px] h-[40px] hover:bg-white " + (activeItemNav === 7 ? "font-[700] bg-gray-200" : "") + " ", onClick: function () { return handleHeaderActive(7); } },
                                    react_1["default"].createElement("span", { className: 'flex justify-around' },
                                        react_1["default"].createElement(gr_1.GrContact, { className: 'm-[3px]' }),
                                        " ",
                                        react_1["default"].createElement("span", null, "Li\u00EAn h\u1EC7 "),
                                        " "))),
                            react_1["default"].createElement("li", { className: "flex items-center justify-left pl-[20px] h-[40px] hover:bg-white " + (activeItemNav === 8 ? "font-[700] bg-gray-200" : "") + " ", onClick: function () {
                                    dispatch({ type: actionTypes_js_1.actionTypes.LOGOUT });
                                    navigate('/');
                                } },
                                react_1["default"].createElement("span", { className: 'flex justify-around' },
                                    " ",
                                    react_1["default"].createElement(io_1.IoIosLogOut, { className: 'm-[3px]' }),
                                    " ",
                                    react_1["default"].createElement("span", null, "Tho\u00E1t"),
                                    " ")))))),
            react_1["default"].createElement("div", { className: "w-[80%] min-h-[100vh] bg-[#f8f9fa]" },
                react_1["default"].createElement(NavBar_tsx_1["default"], { setNav: " bg-[#055699]" }),
                react_1["default"].createElement("div", { className: "w-[100%] h-[100%]" },
                    react_1["default"].createElement("div", { className: "w-[100%] h-[50px] bg-gray-300 flex items-center " },
                        react_1["default"].createElement("div", { className: 'pl-[30px]' },
                            react_1["default"].createElement(react_router_dom_1.Link, { to: "/" },
                                " ",
                                react_1["default"].createElement("span", { className: 'text-blue-500 font-[600]' }, "HomestayHealing.com ")),
                            react_1["default"].createElement("span", null, " / "),
                            react_1["default"].createElement("span", { className: 'text-blue-500  font-[600]' }, changeTittle()))),
                    react_1["default"].createElement("div", { className: "w-[100%] h-[100%] p-[10px] overflow-auto" }, children))))));
};
exports["default"] = PersonalPage;
