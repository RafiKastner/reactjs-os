"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropdownContext = void 0;
exports.DropdownContextProvider = DropdownContextProvider;
var _react = require("react");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var DropdownContext = exports.DropdownContext = /*#__PURE__*/(0, _react.createContext)();
function DropdownContextProvider(_ref) {
  var children = _ref.children;
  var _useState = (0, _react.useState)({
      width: window.innerWidth,
      height: window.innerHeight
    }),
    _useState2 = _slicedToArray(_useState, 2),
    windowSize = _useState2[0],
    setWindowSize = _useState2[1];
  (0, _react.useEffect)(function () {
    var resize = function resize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    window.addEventListener('resize', resize);
    return function () {
      window.removeEventListener('resize', resize);
    };
  }, []);
  return /*#__PURE__*/React.createElement(DropdownContext.Provider, {
    value: {
      windowSize: windowSize
    }
  }, children);
}