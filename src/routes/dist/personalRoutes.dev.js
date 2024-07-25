"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.personalRoutes = void 0;

var _ManagePostings = _interopRequireDefault(require("../pages/PersonalPage/components/ManagePostings.tsx"));

var _EditPersonal = _interopRequireDefault(require("../pages/PersonalPage/components/EditPersonal.tsx"));

var _Information = _interopRequireDefault(require("../pages/PersonalPage/components/Information.tsx"));

var _DepositHistory = _interopRequireDefault(require("../pages/PersonalPage/components/DepositHistory.tsx"));

var _DepositMoney = _interopRequireDefault(require("../pages/PersonalPage/components/DepositMoney.tsx"));

var _PaymentHistory = _interopRequireDefault(require("../pages/PersonalPage/components/PaymentHistory.tsx"));

var _ServicePriceList = _interopRequireDefault(require("../pages/PersonalPage/components/ServicePriceList.tsx"));

var _Contact = _interopRequireDefault(require("../pages/PersonalPage/components/Contact.tsx"));

var _Transfer = _interopRequireDefault(require("../pages/PersonalPage/DepositMoney/Transfer.tsx"));

var _Posting = _interopRequireDefault(require("../pages/PersonalPage/Posting/Posting.tsx"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var personalRoutes = [{
  path: "/personal/ManagePostings",
  PageChild: _ManagePostings["default"]
}, {
  path: "/personal/EditPersonal",
  PageChild: _EditPersonal["default"]
}, {
  path: "/personal/Information",
  PageChild: _Information["default"]
}, {
  path: "/personal/DepositHistory",
  PageChild: _DepositHistory["default"]
}, {
  path: "/personal/DepositMoney",
  PageChild: _DepositMoney["default"]
}, {
  path: "/personal/PaymentHistory",
  PageChild: _PaymentHistory["default"]
}, {
  path: "/personal/ServicePriceList",
  PageChild: _ServicePriceList["default"]
}, {
  path: "/personal/Contact",
  PageChild: _Contact["default"]
}, {
  path: "/personal/DepositMoney/transfer",
  PageChild: _Transfer["default"]
}, {
  path: "/personal/DepositMoney/posting",
  PageChild: _Posting["default"]
}];
exports.personalRoutes = personalRoutes;