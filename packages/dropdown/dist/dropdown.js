"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Dropdown = Dropdown;
exports.DropdownItem = DropdownItem;
exports.ShortCut = ShortCut;
exports.SubDropdown = SubDropdown;
var _react = _interopRequireWildcard(require("react"));
require("./index.css");
var _shared = require("@reactjs-os/shared");
var _context = require("./context");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function Dropdown(_ref) {
  var inner = _ref.inner,
    offset = _ref.offset,
    children = _ref.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "dropdown flex-center"
  }, /*#__PURE__*/_react["default"].createElement(DropdownGeneric, {
    display: "vertical",
    inner: inner,
    offset: offset,
    children: children
  }));
}
function SubDropdown(_ref2) {
  var text = _ref2.text,
    right = _ref2.right,
    offset = _ref2.offset,
    children = _ref2.children;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "sub-dropdown",
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/_react["default"].createElement(DropdownGeneric, {
    display: "horizontal",
    offset: offset || {
      right: 15,
      left: 5
    },
    inner: /*#__PURE__*/_react["default"].createElement("div", {
      className: "flex-between"
    }, /*#__PURE__*/_react["default"].createElement("span", null, text), /*#__PURE__*/_react["default"].createElement("span", null, right || /*#__PURE__*/_react["default"].createElement(_shared.Arrow, {
      stroke: '#aeaeae'
    })))
  }, children));
}
function DropdownGeneric(_ref3) {
  var inner = _ref3.inner,
    children = _ref3.children,
    display = _ref3.display,
    offset = _ref3.offset;
  //do something with this so shifts when window resizes
  //but if can connect all dropdowns to one universal eventlistener to reduce lag
  var _useState = (0, _react.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    open = _useState2[0],
    setOpen = _useState2[1];
  var childrenRef = (0, _react.useRef)(null);
  var buttonRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    var listener = function listener(e) {
      if (buttonRef.current && buttonRef.current.contains(e.target)) {
        return;
      } else if (childrenRef.current && !childrenRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", listener);
    return function () {
      return document.removeEventListener("mousedown", listener);
    };
  }, []);
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement("button", {
    ref: buttonRef,
    className: "control-button",
    onClick: function onClick() {
      return setOpen(!open);
    }
  }, inner), open && /*#__PURE__*/_react["default"].createElement(DropdownChildren, {
    type: display,
    offsetRef: buttonRef,
    offsetCustom: offset,
    childrenRef: childrenRef,
    setOpen: setOpen
  }, children));
}
function DropdownChildren(_ref4) {
  var offsetRef = _ref4.offsetRef,
    childrenRef = _ref4.childrenRef,
    children = _ref4.children,
    setOpen = _ref4.setOpen,
    type = _ref4.type,
    offsetCustom = _ref4.offsetCustom;
  offsetCustom = _objectSpread({
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }, offsetCustom);
  var _useContext = (0, _react.useContext)(_context.DropdownContext),
    windowSize = _useContext.windowSize;
  var _useState3 = (0, _react.useState)({
      top: 0,
      left: 0
    }),
    _useState4 = _slicedToArray(_useState3, 2),
    style = _useState4[0],
    setStyle = _useState4[1];
  (0, _react.useEffect)(function () {
    if (!offsetRef) return;
    var offset = offsetRef.current;
    var offsetPos = offset.getBoundingClientRect();
    var childrenWidth = childrenRef.current.offsetWidth;
    var childrenHeight = childrenRef.current.offsetHeight;
    if (type === 'vertical') {
      if (windowSize.height - offsetPos.bottom > childrenHeight) {
        setStyle({
          top: offset.offsetHeight + offsetCustom.top,
          left: 0
        });
      } else {
        setStyle({
          top: -childrenHeight - offsetCustom.bottom,
          left: 0
        });
      }
    } else if (type === 'horizontal') {
      if (windowSize.width - offsetPos.right > childrenWidth) {
        setStyle({
          top: 0,
          left: offset.offsetWidth + offsetCustom.left
        });
      } else {
        setStyle({
          top: 0,
          left: -childrenWidth - offsetCustom.right
        });
      }
    }
  }, [windowSize]);
  return /*#__PURE__*/_react["default"].createElement("div", {
    ref: childrenRef,
    className: "dropdown-children",
    style: {
      top: style.top + offsetCustom.top,
      left: style.left + offsetCustom.left
    }
  }, _react.Children.map(children, function (child) {
    if (/*#__PURE__*/(0, _react.isValidElement)(child) && typeof child.type === 'function') {
      return /*#__PURE__*/(0, _react.cloneElement)(child, {
        setOpen: setOpen
      });
    }
    return child;
  }));
}
function DropdownItem(_ref5) {
  var text = _ref5.text,
    right = _ref5.right,
    callback = _ref5.callback,
    setOpen = _ref5.setOpen;
  return /*#__PURE__*/_react["default"].createElement("button", {
    className: "dropdown-item flex-between",
    onClick: function onClick() {
      setOpen(false);
      callback();
    }
  }, /*#__PURE__*/_react["default"].createElement("span", {
    className: "shortcut-name"
  }, text, " "), /*#__PURE__*/_react["default"].createElement("div", {
    className: "kbd-container"
  }, right));
}
function ShortCut(_ref6) {
  var keys = _ref6.keys;
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, keys.map(function (key, index) {
    return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, {
      key: index
    }, /*#__PURE__*/_react["default"].createElement("kbd", null, key));
  }));
}