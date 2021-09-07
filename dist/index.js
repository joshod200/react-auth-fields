"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Email = exports.Password = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@material-ui/core");

var _Visibility = _interopRequireDefault(require("@material-ui/icons/Visibility"));

var _VisibilityOff = _interopRequireDefault(require("@material-ui/icons/VisibilityOff"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Password = function Password(_ref) {
  var onChange = _ref.onChange,
      value = _ref.value,
      formHelper = _ref.formHelper,
      errors = _ref.errors,
      _ref$confirmation = _ref.confirmation,
      confirmation = _ref$confirmation === void 0 ? false : _ref$confirmation;

  var _React$useState = _react["default"].useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      show = _React$useState2[0],
      setShow = _React$useState2[1];

  var handleSetShow = function handleSetShow() {
    return setShow(!show);
  };

  var name = confirmation ? "password_confirmation" : "password";
  var label = confirmation ? "Password Confirmation" : "Password";
  var field = confirmation ? "password confirmation" : "password";
  var errorField = confirmation ? errors.password_confirmation : errors.password;
  var error = formHelper(value, field, "required|min:8", {
    errorField: errorField
  });
  return /*#__PURE__*/_react["default"].createElement(_core.TextField, {
    onChange: onChange,
    value: value,
    margin: "normal",
    name: name,
    label: label,
    type: show ? "text" : "password",
    helperText: error,
    error: Boolean(error),
    fullWidth: true,
    InputProps: {
      endAdornment: /*#__PURE__*/_react["default"].createElement(_core.InputAdornment, {
        position: "end"
      }, /*#__PURE__*/_react["default"].createElement(_core.IconButton, {
        onClick: handleSetShow
      }, show ? /*#__PURE__*/_react["default"].createElement(_VisibilityOff["default"], null) : /*#__PURE__*/_react["default"].createElement(_Visibility["default"], null)))
    }
  });
};

exports.Password = Password;

var Email = function Email(_ref2) {
  var onChange = _ref2.onChange,
      value = _ref2.value,
      formHelper = _ref2.formHelper,
      errors = _ref2.errors;
  var error = formHelper(value, "email", "required|email", {
    errorField: errors.email
  });
  return /*#__PURE__*/_react["default"].createElement(_core.TextField, {
    onChange: onChange,
    value: value,
    margin: "normal",
    name: "email",
    type: "email",
    label: "Email",
    helperText: error,
    error: Boolean(error),
    fullWidth: true
  });
};

exports.Email = Email;