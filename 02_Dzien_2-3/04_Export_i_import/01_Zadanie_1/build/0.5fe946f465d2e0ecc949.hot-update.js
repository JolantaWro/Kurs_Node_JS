"use strict";
self["webpackHotUpdatees6_async_await"](0,{

/***/ 35:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Polygon": () => (/* binding */ Polygon)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);


var Polygon = /*#__PURE__*/function () {
  function Polygon(height, width) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Polygon);
    this.name = "Polygon";
    this.height = height;
    this.width = width;
  }
  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Polygon, [{
    key: "area",
    value: function area() {
      return this.height * this.width;
    }
  }, {
    key: "sayName",
    value: function sayName() {
      console.log("Cześć jestem", this.name + ".");
    }
  }]);
  return Polygon;
}();


/***/ }),

/***/ 24:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Square": () => (/* binding */ Square)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(30);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(34);
/* harmony import */ var _Polygon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(35);





function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, result); }; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Square = /*#__PURE__*/function (_Polygon) {
  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__["default"])(Square, _Polygon);
  var _super = _createSuper(Square);
  function Square() {
    var _this;
    var dim = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 5;
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Square);
    _this = _super.call(this, dim, dim);
    _this.name = "Square";
    return _this;
  }
  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_0__["default"])(Square);
}(_Polygon__WEBPACK_IMPORTED_MODULE_5__.Polygon);


/***/ }),

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Square__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);

var square = new _Square__WEBPACK_IMPORTED_MODULE_0__.Square(2);
square.sayName();
console.log(square.area());
console.log(new _Square__WEBPACK_IMPORTED_MODULE_0__.Square().area());

// import { format } from "date-fns";
//
// const date = new Date();
// const hour = format(date, "HH:mm:ss");
//
// console.log(hour);

/***/ }),

/***/ 33:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _assertThisInitialized)
/* harmony export */ });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }
  return self;
}

/***/ }),

/***/ 29:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ 25:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

/***/ }),

/***/ 34:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _getPrototypeOf)
/* harmony export */ });
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ 30:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _inherits)
/* harmony export */ });
/* harmony import */ var _setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(31);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) (0,_setPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__["default"])(subClass, superClass);
}

/***/ }),

/***/ 32:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _possibleConstructorReturn)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33);


function _possibleConstructorReturn(self, call) {
  if (call && ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }
  return (0,_assertThisInitialized_js__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ 31:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _setPrototypeOf)
/* harmony export */ });
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };
  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ 28:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toPrimitive)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);

function _toPrimitive(input, hint) {
  if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if ((0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}

/***/ }),

/***/ 26:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toPropertyKey)
/* harmony export */ });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(27);
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(28);


function _toPropertyKey(arg) {
  var key = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arg, "string");
  return (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(key) === "symbol" ? key : String(key);
}

/***/ }),

/***/ 27:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("da7abcb878c523021cd6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNWa0M7QUFDUztBQUM1QjtBQUNmLFlBQVksMkRBQVc7QUFDdkIsU0FBUyxzREFBTztBQUNoQjs7Ozs7Ozs7Ozs7QUNMZTtBQUNmOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7O1VDUkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi8wMl9Eemllbl8yLTMvMDRfRXhwb3J0X2lfaW1wb3J0LzAxX1phZGFuaWVfMS9qcy9Qb2x5Z29uLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uLzAyX0R6aWVuXzItMy8wNF9FeHBvcnRfaV9pbXBvcnQvMDFfWmFkYW5pZV8xL2pzL1NxdWFyZS5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi8wMl9Eemllbl8yLTMvMDRfRXhwb3J0X2lfaW1wb3J0LzAxX1phZGFuaWVfMS9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9nZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vaW5oZXJpdHMuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4uanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3NldFByb3RvdHlwZU9mLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b1ByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Qcm9wZXJ0eUtleS5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgUG9seWdvbiB7XG4gIGNvbnN0cnVjdG9yKGhlaWdodCwgd2lkdGgpIHtcbiAgICB0aGlzLm5hbWUgPSBcIlBvbHlnb25cIjtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gIH1cblxuICBhcmVhKCkge1xuICAgIHJldHVybiB0aGlzLmhlaWdodCAqIHRoaXMud2lkdGg7XG4gIH1cblxuICBzYXlOYW1lKCkge1xuICAgIGNvbnNvbGUubG9nKFwiQ3plxZvEhyBqZXN0ZW1cIiwgdGhpcy5uYW1lICsgXCIuXCIpO1xuICB9XG59XG5leHBvcnQge1xuICBQb2x5Z29uXG59IiwiaW1wb3J0IHtQb2x5Z29ufSBmcm9tIFwiLi9Qb2x5Z29uXCI7XG5cbmNsYXNzIFNxdWFyZSBleHRlbmRzIFBvbHlnb24ge1xuICBjb25zdHJ1Y3RvcihkaW0gPSA1KSB7XG4gICAgc3VwZXIoZGltLCBkaW0pO1xuICAgIHRoaXMubmFtZSA9IFwiU3F1YXJlXCI7XG4gIH1cbn1cbmV4cG9ydCB7XG4gIFNxdWFyZVxufSIsImltcG9ydCB7U3F1YXJlfSBmcm9tIFwiLi9TcXVhcmVcIjtcblxuXG5jb25zdCBzcXVhcmUgPSBuZXcgU3F1YXJlKDIpO1xuc3F1YXJlLnNheU5hbWUoKTtcbmNvbnNvbGUubG9nKHNxdWFyZS5hcmVhKCkpO1xuY29uc29sZS5sb2cobmV3IFNxdWFyZSgpLmFyZWEoKSk7XG5cbi8vIGltcG9ydCB7IGZvcm1hdCB9IGZyb20gXCJkYXRlLWZuc1wiO1xuLy9cbi8vIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuLy8gY29uc3QgaG91ciA9IGZvcm1hdChkYXRlLCBcIkhIOm1tOnNzXCIpO1xuLy9cbi8vIGNvbnNvbGUubG9nKGhvdXIpOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZikge1xuICBpZiAoc2VsZiA9PT0gdm9pZCAwKSB7XG4gICAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO1xuICB9XG4gIHJldHVybiBzZWxmO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59IiwiaW1wb3J0IHRvUHJvcGVydHlLZXkgZnJvbSBcIi4vdG9Qcm9wZXJ0eUtleS5qc1wiO1xuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgdG9Qcm9wZXJ0eUtleShkZXNjcmlwdG9yLmtleSksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiBmYWxzZVxuICB9KTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKSB7XG4gIF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59IiwiaW1wb3J0IHNldFByb3RvdHlwZU9mIGZyb20gXCIuL3NldFByb3RvdHlwZU9mLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuICBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHtcbiAgICBjb25zdHJ1Y3Rvcjoge1xuICAgICAgdmFsdWU6IHN1YkNsYXNzLFxuICAgICAgd3JpdGFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWVcbiAgICB9XG4gIH0pO1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc3ViQ2xhc3MsIFwicHJvdG90eXBlXCIsIHtcbiAgICB3cml0YWJsZTogZmFsc2VcbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIi4vdHlwZW9mLmpzXCI7XG5pbXBvcnQgYXNzZXJ0VGhpc0luaXRpYWxpemVkIGZyb20gXCIuL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZiwgY2FsbCkge1xuICBpZiAoY2FsbCAmJiAoX3R5cGVvZihjYWxsKSA9PT0gXCJvYmplY3RcIiB8fCB0eXBlb2YgY2FsbCA9PT0gXCJmdW5jdGlvblwiKSkge1xuICAgIHJldHVybiBjYWxsO1xuICB9IGVsc2UgaWYgKGNhbGwgIT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTtcbiAgfVxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIF9zZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5zZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobywgcCkge1xuICAgIG8uX19wcm90b19fID0gcDtcbiAgICByZXR1cm4gbztcbiAgfTtcbiAgcmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLCBwKTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiLi90eXBlb2YuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90b1ByaW1pdGl2ZShpbnB1dCwgaGludCkge1xuICBpZiAoX3R5cGVvZihpbnB1dCkgIT09IFwib2JqZWN0XCIgfHwgaW5wdXQgPT09IG51bGwpIHJldHVybiBpbnB1dDtcbiAgdmFyIHByaW0gPSBpbnB1dFtTeW1ib2wudG9QcmltaXRpdmVdO1xuICBpZiAocHJpbSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIHJlcyA9IHByaW0uY2FsbChpbnB1dCwgaGludCB8fCBcImRlZmF1bHRcIik7XG4gICAgaWYgKF90eXBlb2YocmVzKSAhPT0gXCJvYmplY3RcIikgcmV0dXJuIHJlcztcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7XG4gIH1cbiAgcmV0dXJuIChoaW50ID09PSBcInN0cmluZ1wiID8gU3RyaW5nIDogTnVtYmVyKShpbnB1dCk7XG59IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIi4vdHlwZW9mLmpzXCI7XG5pbXBvcnQgdG9QcmltaXRpdmUgZnJvbSBcIi4vdG9QcmltaXRpdmUuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KGFyZykge1xuICB2YXIga2V5ID0gdG9QcmltaXRpdmUoYXJnLCBcInN0cmluZ1wiKTtcbiAgcmV0dXJuIF90eXBlb2Yoa2V5KSA9PT0gXCJzeW1ib2xcIiA/IGtleSA6IFN0cmluZyhrZXkpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBfdHlwZW9mKG9iaik7XG59IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiZGE3YWJjYjg3OGM1MjMwMjFjZDZcIikiXSwibmFtZXMiOlsiUG9seWdvbiIsImhlaWdodCIsIndpZHRoIiwiX2NsYXNzQ2FsbENoZWNrIiwibmFtZSIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiYXJlYSIsInNheU5hbWUiLCJjb25zb2xlIiwibG9nIiwiU3F1YXJlIiwiX1BvbHlnb24iLCJfaW5oZXJpdHMiLCJfc3VwZXIiLCJfY3JlYXRlU3VwZXIiLCJfdGhpcyIsImRpbSIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImNhbGwiLCJzcXVhcmUiXSwic291cmNlUm9vdCI6IiJ9