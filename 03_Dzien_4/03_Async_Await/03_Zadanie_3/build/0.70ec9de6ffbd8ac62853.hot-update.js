"use strict";
self["webpackHotUpdatees6_async_await"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(28);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(24);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(25);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);



// https://randomuser.me/api/

// Zdjęcie (.card-img-top)
// Imię i Nazwisko (.card-title)
// Email (.card-text)

var image = document.querySelector('.card-img-top');
var title = document.querySelector('.card-title');
var email = document.querySelector('.card-text');
//
// const fetchRandomUser = async () => {
//     try {
//         const resp = await fetch('https://randomuser.me/api/');
//
//         const { results } = await resp.json();
//
//         return results[0];
//     } catch (error) {
//         console.error(error);
//     }
// };
//
// const drawUser = async () => {
//     try {
//         const user = await fetchRandomUser();
//         console.log('user', user);
//
//         image.src = user.picture.large;
//         title.innerHTML = user.name.title;
//         email.innerHTML = user.email;
//     } catch (error) {
//         console.error(error);
//     }
// };
//
// drawUser();

var URL = 'https://randomuser.me/api/';
var getInfo = function getInfo(adress) {
  return fetch(adress).then(function (res) {
    if (res.ok && res.status === 200) {
      return res.json();
    }
    throw new Error("Błąd");
  });
};
function printInfo() {
  return _printInfo.apply(this, arguments);
}
function _printInfo() {
  _printInfo = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee() {
    var data, _data, results;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return getInfo(URL);
        case 3:
          data = _context.sent;
          _data = (0,_babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_0__["default"])(data), results = _data.slice(0); // title.innerHTML = data.r
          console.log(results);
          console.log(data.results);
          _context.next = 12;
          break;
        case 9:
          _context.prev = 9;
          _context.t0 = _context["catch"](0);
          console.error('Błąd');
        case 12:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 9]]);
  }));
  return _printInfo.apply(this, arguments);
}
printInfo();

/***/ }),

/***/ 32:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}

/***/ }),

/***/ 29:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithHoles)
/* harmony export */ });
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

/***/ }),

/***/ 30:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArray)
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ 33:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableRest)
/* harmony export */ });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ 28:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toArray)
/* harmony export */ });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(29);
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31);
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33);




function _toArray(arr) {
  return (0,_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || (0,_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ }),

/***/ 31:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(o, minLen);
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("53d98d6b8e001613b557")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43MGVjOWRlNmZmYmQ4YWM2Mjg1My5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsZUFBZSxDQUFDO0FBQ3JELElBQU1DLEtBQUssR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsYUFBYSxDQUFDO0FBQ25ELElBQU1FLEtBQUssR0FBR0gsUUFBUSxDQUFDQyxhQUFhLENBQUMsWUFBWSxDQUFDO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNRyxHQUFHLEdBQUcsNEJBQTRCO0FBRXhDLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFPQSxDQUFJQyxNQUFNLEVBQUs7RUFDeEIsT0FBT0MsS0FBSyxDQUFDRCxNQUFNLENBQUMsQ0FBQ0UsSUFBSSxDQUFDLFVBQUNDLEdBQUcsRUFBSztJQUMvQixJQUFJQSxHQUFHLENBQUNDLEVBQUUsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssR0FBRyxFQUFFO01BQzlCLE9BQU9GLEdBQUcsQ0FBQ0csSUFBSSxFQUFFO0lBQ3JCO0lBQ0EsTUFBTSxJQUFJQyxLQUFLLENBQUMsTUFBTSxDQUFDO0VBQzNCLENBQUMsQ0FBQztBQUNOLENBQUM7QUFBQSxTQUVjQyxTQUFTQSxDQUFBO0VBQUEsT0FBQUMsVUFBQSxDQUFBQyxLQUFBLE9BQUFDLFNBQUE7QUFBQTtBQUFBLFNBQUFGLFdBQUE7RUFBQUEsVUFBQSxHQUFBRyxtRkFBQSxlQUFBQyxzRUFBQSxDQUF4QixTQUFBRSxRQUFBO0lBQUEsSUFBQUMsSUFBQSxFQUFBQyxLQUFBLEVBQUFDLE9BQUE7SUFBQSxPQUFBTCxzRUFBQSxVQUFBTyxTQUFBQyxRQUFBO01BQUEsa0JBQUFBLFFBQUEsQ0FBQUMsSUFBQSxHQUFBRCxRQUFBLENBQUFFLElBQUE7UUFBQTtVQUFBRixRQUFBLENBQUFDLElBQUE7VUFBQUQsUUFBQSxDQUFBRSxJQUFBO1VBQUEsT0FFMkJ4QixPQUFPLENBQUNELEdBQUcsQ0FBQztRQUFBO1VBQXpCa0IsSUFBSSxHQUFBSyxRQUFBLENBQUFHLElBQUE7VUFBQVAsS0FBQSxHQUFBUSwwRUFBQSxDQUNXVCxJQUFJLEdBQWZFLE9BQU8sR0FBQUQsS0FBQSxDQUFBUyxLQUFBLEtBQ2pCO1VBQ0FDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVixPQUFPLENBQUM7VUFDcEJTLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDWixJQUFJLENBQUNFLE9BQU8sQ0FBQztVQUFBRyxRQUFBLENBQUFFLElBQUE7VUFBQTtRQUFBO1VBQUFGLFFBQUEsQ0FBQUMsSUFBQTtVQUFBRCxRQUFBLENBQUFRLEVBQUEsR0FBQVIsUUFBQTtVQUV6Qk0sT0FBTyxDQUFDRyxLQUFLLENBQUMsTUFBTSxDQUFDO1FBQUE7UUFBQTtVQUFBLE9BQUFULFFBQUEsQ0FBQVUsSUFBQTtNQUFBO0lBQUEsR0FBQWhCLE9BQUE7RUFBQSxDQUU1QjtFQUFBLE9BQUFOLFVBQUEsQ0FBQUMsS0FBQSxPQUFBQyxTQUFBO0FBQUE7QUFDREgsU0FBUyxFQUFFOzs7Ozs7Ozs7OztBQzNESTtBQUNmO0FBQ0EseUNBQXlDLFNBQVM7QUFDbEQ7QUFDQTs7Ozs7Ozs7Ozs7QUNKZTtBQUNmO0FBQ0E7Ozs7Ozs7Ozs7O0FDRmU7QUFDZjtBQUNBOzs7Ozs7Ozs7OztBQ0ZlO0FBQ2Y7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDRmlEO0FBQ0U7QUFDc0I7QUFDdEI7QUFDcEM7QUFDZixTQUFTLDhEQUFjLFNBQVMsK0RBQWUsU0FBUywwRUFBMEIsU0FBUywrREFBZTtBQUMxRzs7Ozs7Ozs7Ozs7O0FDTnFEO0FBQ3RDO0FBQ2Y7QUFDQSxvQ0FBb0MsZ0VBQWdCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBLHNGQUFzRixnRUFBZ0I7QUFDdEc7Ozs7Ozs7O1VDUkEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi8wM19Eemllbl80LzAzX0FzeW5jX0F3YWl0LzAzX1phZGFuaWVfMy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5V2l0aEhvbGVzLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlUmVzdC5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9BcnJheS5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL3JhbmRvbXVzZXIubWUvYXBpL1xyXG5cclxuLy8gWmRqxJljaWUgKC5jYXJkLWltZy10b3ApXHJcbi8vIEltacSZIGkgTmF6d2lza28gKC5jYXJkLXRpdGxlKVxyXG4vLyBFbWFpbCAoLmNhcmQtdGV4dClcclxuXHJcbmNvbnN0IGltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQtaW1nLXRvcCcpO1xyXG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLXRpdGxlJyk7XHJcbmNvbnN0IGVtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQtdGV4dCcpO1xyXG4vL1xyXG4vLyBjb25zdCBmZXRjaFJhbmRvbVVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbi8vICAgICB0cnkge1xyXG4vLyAgICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9yYW5kb211c2VyLm1lL2FwaS8nKTtcclxuLy9cclxuLy8gICAgICAgICBjb25zdCB7IHJlc3VsdHMgfSA9IGF3YWl0IHJlc3AuanNvbigpO1xyXG4vL1xyXG4vLyAgICAgICAgIHJldHVybiByZXN1bHRzWzBdO1xyXG4vLyAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuLy8gICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuLy8gICAgIH1cclxuLy8gfTtcclxuLy9cclxuLy8gY29uc3QgZHJhd1VzZXIgPSBhc3luYyAoKSA9PiB7XHJcbi8vICAgICB0cnkge1xyXG4vLyAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBmZXRjaFJhbmRvbVVzZXIoKTtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZygndXNlcicsIHVzZXIpO1xyXG4vL1xyXG4vLyAgICAgICAgIGltYWdlLnNyYyA9IHVzZXIucGljdHVyZS5sYXJnZTtcclxuLy8gICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSB1c2VyLm5hbWUudGl0bGU7XHJcbi8vICAgICAgICAgZW1haWwuaW5uZXJIVE1MID0gdXNlci5lbWFpbDtcclxuLy8gICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbi8vICAgICB9XHJcbi8vIH07XHJcbi8vXHJcbi8vIGRyYXdVc2VyKCk7XHJcblxyXG5jb25zdCBVUkwgPSAnaHR0cHM6Ly9yYW5kb211c2VyLm1lL2FwaS8nXHJcblxyXG5jb25zdCBnZXRJbmZvID0gKGFkcmVzcykgPT4ge1xyXG4gICAgcmV0dXJuIGZldGNoKGFkcmVzcykudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlcy5vayAmJiByZXMuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQsWCxIVkXCIpXHJcbiAgICB9KVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBwcmludEluZm8gKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0SW5mbyhVUkwpXHJcbiAgICAgICAgY29uc3QgWy4uLnJlc3VsdHNdID0gZGF0YVxyXG4gICAgICAgIC8vIHRpdGxlLmlubmVySFRNTCA9IGRhdGEuclxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdHMpXHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YS5yZXN1bHRzKVxyXG4gICAgfSBjYXRjaCB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignQsWCxIVkJylcclxuICAgIH1cclxufVxyXG5wcmludEluZm8oKSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7XG4gIGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoO1xuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIGFycjJbaV0gPSBhcnJbaV07XG4gIHJldHVybiBhcnIyO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn0iLCJpbXBvcnQgYXJyYXlXaXRoSG9sZXMgZnJvbSBcIi4vYXJyYXlXaXRoSG9sZXMuanNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vaXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCBub25JdGVyYWJsZVJlc3QgZnJvbSBcIi4vbm9uSXRlcmFibGVSZXN0LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdG9BcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVJlc3QoKTtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjUzZDk4ZDZiOGUwMDE2MTNiNTU3XCIpIl0sIm5hbWVzIjpbImltYWdlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGl0bGUiLCJlbWFpbCIsIlVSTCIsImdldEluZm8iLCJhZHJlc3MiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJvayIsInN0YXR1cyIsImpzb24iLCJFcnJvciIsInByaW50SW5mbyIsIl9wcmludEluZm8iLCJhcHBseSIsImFyZ3VtZW50cyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIm1hcmsiLCJfY2FsbGVlIiwiZGF0YSIsIl9kYXRhIiwicmVzdWx0cyIsIndyYXAiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicHJldiIsIm5leHQiLCJzZW50IiwiX3RvQXJyYXkiLCJzbGljZSIsImNvbnNvbGUiLCJsb2ciLCJ0MCIsImVycm9yIiwic3RvcCJdLCJzb3VyY2VSb290IjoiIn0=