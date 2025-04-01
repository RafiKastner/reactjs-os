"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Arrow = Arrow;
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Arrow(props) {
  return /*#__PURE__*/React.createElement("svg", _extends({
    height: "1em",
    width: "1em",
    viewBox: "0 0 10 10",
    stroke: "white",
    strokeLinecap: "round",
    strokeWidth: "1"
  }, props), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("line", {
    x1: "4",
    y1: "3",
    x2: "7",
    y2: "6"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "4",
    y1: "9",
    x2: "7",
    y2: "6"
  })));
}