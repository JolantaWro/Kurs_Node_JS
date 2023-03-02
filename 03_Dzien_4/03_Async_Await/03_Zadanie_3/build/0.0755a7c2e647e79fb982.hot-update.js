"use strict";
self["webpackHotUpdatees6_async_await"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34);
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
    var data, results;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return getInfo(URL);
        case 3:
          data = _context.sent;
          results = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__["default"])(data); // title.innerHTML = data.r
          console.log(results);
          // console.log(data.results)
          _context.next = 11;
          break;
        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](0);
          console.error('Błąd');
        case 11:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 8]]);
  }));
  return _printInfo.apply(this, arguments);
}
printInfo();

/***/ }),

/***/ 35:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithoutHoles)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr);
}

/***/ }),

/***/ 36:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableSpread)
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ 34:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toConsumableArray)
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(35);
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(30);
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31);
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36);




function _toConsumableArray(arr) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("14890e6d548fda7ad5f0")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wNzU1YTdjMmU2NDdlNzlmYjk4Mi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsZUFBZSxDQUFDO0FBQ3JELElBQU1DLEtBQUssR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsYUFBYSxDQUFDO0FBQ25ELElBQU1FLEtBQUssR0FBR0gsUUFBUSxDQUFDQyxhQUFhLENBQUMsWUFBWSxDQUFDO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNRyxHQUFHLEdBQUcsNEJBQTRCO0FBRXhDLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFPQSxDQUFJQyxNQUFNLEVBQUs7RUFDeEIsT0FBT0MsS0FBSyxDQUFDRCxNQUFNLENBQUMsQ0FBQ0UsSUFBSSxDQUFDLFVBQUNDLEdBQUcsRUFBSztJQUMvQixJQUFJQSxHQUFHLENBQUNDLEVBQUUsSUFBSUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssR0FBRyxFQUFFO01BQzlCLE9BQU9GLEdBQUcsQ0FBQ0csSUFBSSxFQUFFO0lBQ3JCO0lBQ0EsTUFBTSxJQUFJQyxLQUFLLENBQUMsTUFBTSxDQUFDO0VBQzNCLENBQUMsQ0FBQztBQUNOLENBQUM7QUFBQSxTQUVjQyxTQUFTQSxDQUFBO0VBQUEsT0FBQUMsVUFBQSxDQUFBQyxLQUFBLE9BQUFDLFNBQUE7QUFBQTtBQUFBLFNBQUFGLFdBQUE7RUFBQUEsVUFBQSxHQUFBRyxtRkFBQSxlQUFBQyxzRUFBQSxDQUF4QixTQUFBRSxRQUFBO0lBQUEsSUFBQUMsSUFBQSxFQUFBQyxPQUFBO0lBQUEsT0FBQUosc0VBQUEsVUFBQU0sU0FBQUMsUUFBQTtNQUFBLGtCQUFBQSxRQUFBLENBQUFDLElBQUEsR0FBQUQsUUFBQSxDQUFBRSxJQUFBO1FBQUE7VUFBQUYsUUFBQSxDQUFBQyxJQUFBO1VBQUFELFFBQUEsQ0FBQUUsSUFBQTtVQUFBLE9BRTJCdkIsT0FBTyxDQUFDRCxHQUFHLENBQUM7UUFBQTtVQUF6QmtCLElBQUksR0FBQUksUUFBQSxDQUFBRyxJQUFBO1VBQ0pOLE9BQU8sR0FBQU8sb0ZBQUEsQ0FBT1IsSUFBSSxHQUN4QjtVQUNBUyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1QsT0FBTyxDQUFDO1VBQ3BCO1VBQUFHLFFBQUEsQ0FBQUUsSUFBQTtVQUFBO1FBQUE7VUFBQUYsUUFBQSxDQUFBQyxJQUFBO1VBQUFELFFBQUEsQ0FBQU8sRUFBQSxHQUFBUCxRQUFBO1VBRUFLLE9BQU8sQ0FBQ0csS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUFBO1FBQUE7VUFBQSxPQUFBUixRQUFBLENBQUFTLElBQUE7TUFBQTtJQUFBLEdBQUFkLE9BQUE7RUFBQSxDQUU1QjtFQUFBLE9BQUFOLFVBQUEsQ0FBQUMsS0FBQSxPQUFBQyxTQUFBO0FBQUE7QUFDREgsU0FBUyxFQUFFOzs7Ozs7Ozs7Ozs7QUMzRDBDO0FBQ3RDO0FBQ2YsaUNBQWlDLGdFQUFnQjtBQUNqRDs7Ozs7Ozs7Ozs7QUNIZTtBQUNmO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ0Z1RDtBQUNKO0FBQ3NCO0FBQ2xCO0FBQ3hDO0FBQ2YsU0FBUyxpRUFBaUIsU0FBUywrREFBZSxTQUFTLDBFQUEwQixTQUFTLGlFQUFpQjtBQUMvRzs7Ozs7Ozs7VUNOQSIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uLzAzX0R6aWVuXzQvMDNfQXN5bmNfQXdhaXQvMDNfWmFkYW5pZV8zL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b0NvbnN1bWFibGVBcnJheS5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vcmFuZG9tdXNlci5tZS9hcGkvXHJcblxyXG4vLyBaZGrEmWNpZSAoLmNhcmQtaW1nLXRvcClcclxuLy8gSW1pxJkgaSBOYXp3aXNrbyAoLmNhcmQtdGl0bGUpXHJcbi8vIEVtYWlsICguY2FyZC10ZXh0KVxyXG5cclxuY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1pbWctdG9wJyk7XHJcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQtdGl0bGUnKTtcclxuY29uc3QgZW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC10ZXh0Jyk7XHJcbi8vXHJcbi8vIGNvbnN0IGZldGNoUmFuZG9tVXNlciA9IGFzeW5jICgpID0+IHtcclxuLy8gICAgIHRyeSB7XHJcbi8vICAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKCdodHRwczovL3JhbmRvbXVzZXIubWUvYXBpLycpO1xyXG4vL1xyXG4vLyAgICAgICAgIGNvbnN0IHsgcmVzdWx0cyB9ID0gYXdhaXQgcmVzcC5qc29uKCk7XHJcbi8vXHJcbi8vICAgICAgICAgcmV0dXJuIHJlc3VsdHNbMF07XHJcbi8vICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4vLyAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4vLyAgICAgfVxyXG4vLyB9O1xyXG4vL1xyXG4vLyBjb25zdCBkcmF3VXNlciA9IGFzeW5jICgpID0+IHtcclxuLy8gICAgIHRyeSB7XHJcbi8vICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGZldGNoUmFuZG9tVXNlcigpO1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCd1c2VyJywgdXNlcik7XHJcbi8vXHJcbi8vICAgICAgICAgaW1hZ2Uuc3JjID0gdXNlci5waWN0dXJlLmxhcmdlO1xyXG4vLyAgICAgICAgIHRpdGxlLmlubmVySFRNTCA9IHVzZXIubmFtZS50aXRsZTtcclxuLy8gICAgICAgICBlbWFpbC5pbm5lckhUTUwgPSB1c2VyLmVtYWlsO1xyXG4vLyAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuLy8gICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuLy8gICAgIH1cclxuLy8gfTtcclxuLy9cclxuLy8gZHJhd1VzZXIoKTtcclxuXHJcbmNvbnN0IFVSTCA9ICdodHRwczovL3JhbmRvbXVzZXIubWUvYXBpLydcclxuXHJcbmNvbnN0IGdldEluZm8gPSAoYWRyZXNzKSA9PiB7XHJcbiAgICByZXR1cm4gZmV0Y2goYWRyZXNzKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBpZiAocmVzLm9rICYmIHJlcy5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJCxYLEhWRcIilcclxuICAgIH0pXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHByaW50SW5mbyAoKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRJbmZvKFVSTClcclxuICAgICAgICBjb25zdCByZXN1bHRzID0gWy4uLmRhdGFdXHJcbiAgICAgICAgLy8gdGl0bGUuaW5uZXJIVE1MID0gZGF0YS5yXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzdWx0cylcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhLnJlc3VsdHMpXHJcbiAgICB9IGNhdGNoIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdCxYLEhWQnKVxyXG4gICAgfVxyXG59XHJcbnByaW50SW5mbygpIiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59IiwiaW1wb3J0IGFycmF5V2l0aG91dEhvbGVzIGZyb20gXCIuL2FycmF5V2l0aG91dEhvbGVzLmpzXCI7XG5pbXBvcnQgaXRlcmFibGVUb0FycmF5IGZyb20gXCIuL2l0ZXJhYmxlVG9BcnJheS5qc1wiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgbm9uSXRlcmFibGVTcHJlYWQgZnJvbSBcIi4vbm9uSXRlcmFibGVTcHJlYWQuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjE0ODkwZTZkNTQ4ZmRhN2FkNWYwXCIpIl0sIm5hbWVzIjpbImltYWdlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGl0bGUiLCJlbWFpbCIsIlVSTCIsImdldEluZm8iLCJhZHJlc3MiLCJmZXRjaCIsInRoZW4iLCJyZXMiLCJvayIsInN0YXR1cyIsImpzb24iLCJFcnJvciIsInByaW50SW5mbyIsIl9wcmludEluZm8iLCJhcHBseSIsImFyZ3VtZW50cyIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIm1hcmsiLCJfY2FsbGVlIiwiZGF0YSIsInJlc3VsdHMiLCJ3cmFwIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXYiLCJuZXh0Iiwic2VudCIsIl90b0NvbnN1bWFibGVBcnJheSIsImNvbnNvbGUiLCJsb2ciLCJ0MCIsImVycm9yIiwic3RvcCJdLCJzb3VyY2VSb290IjoiIn0=