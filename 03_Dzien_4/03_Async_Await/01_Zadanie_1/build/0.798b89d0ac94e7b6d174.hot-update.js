"use strict";
self["webpackHotUpdatees6_async_await"](0,{

/***/ 23:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(24);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(25);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);


var title = document.getElementById('title');
var completed = document.getElementById('completed');
var author = document.getElementById('author');

// https://jsonplaceholder.typicode.com/todos/1 => userId
// https://jsonplaceholder.typicode.com/users/:userId

var checkIfError = function checkIfError(resp) {
  if (!resp.ok || resp.status !== 200) {
    throw new Error();
  }
};
var getUserInfo = /*#__PURE__*/function () {
  var _ref = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee() {
    var resp, todo, respoUser, user;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return fetch('https://jsonplaceholder.typicode.com/todos/1');
        case 3:
          resp = _context.sent;
          checkIfError(resp);
          _context.next = 7;
          return resp.json();
        case 7:
          todo = _context.sent;
          console.log(todo);
          _context.next = 11;
          return fetch("https://jsonplaceholder.typicode.com/users/".concat(todo.userId));
        case 11:
          respoUser = _context.sent;
          checkIfError(respoUser);
          _context.next = 15;
          return respoUser.json();
        case 15:
          user = _context.sent;
          title.innerHTML = todo.title;
          completed.innerHTML = todo.completed;
          author.innerHTML = user.name;
          _context.next = 24;
          break;
        case 21:
          _context.prev = 21;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
        case 24:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 21]]);
  }));
  return function getUserInfo() {
    return _ref.apply(this, arguments);
  };
}();
getUserInfo();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5bf60598edd0a7d67e2e")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC43OThiODlkMGFjOTRlN2I2ZDE3NC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsT0FBTyxDQUFDO0FBQzlDLElBQU1DLFNBQVMsR0FBR0YsUUFBUSxDQUFDQyxjQUFjLENBQUMsV0FBVyxDQUFDO0FBQ3RELElBQU1FLE1BQU0sR0FBR0gsUUFBUSxDQUFDQyxjQUFjLENBQUMsUUFBUSxDQUFDOztBQUVoRDtBQUNBOztBQUVBLElBQU1HLFlBQVksR0FBRyxTQUFmQSxZQUFZQSxDQUFJQyxJQUFJLEVBQUs7RUFDM0IsSUFBSSxDQUFDQSxJQUFJLENBQUNDLEVBQUUsSUFBSUQsSUFBSSxDQUFDRSxNQUFNLEtBQUssR0FBRyxFQUFFO0lBQ2pDLE1BQU0sSUFBSUMsS0FBSyxFQUFFO0VBQ3JCO0FBQ0osQ0FBQztBQUVELElBQU1DLFdBQVc7RUFBQSxJQUFBQyxJQUFBLEdBQUFDLG1GQUFBLGVBQUFDLHNFQUFBLENBQUcsU0FBQUUsUUFBQTtJQUFBLElBQUFULElBQUEsRUFBQVUsSUFBQSxFQUFBQyxTQUFBLEVBQUFDLElBQUE7SUFBQSxPQUFBTCxzRUFBQSxVQUFBTyxTQUFBQyxRQUFBO01BQUEsa0JBQUFBLFFBQUEsQ0FBQUMsSUFBQSxHQUFBRCxRQUFBLENBQUFFLElBQUE7UUFBQTtVQUFBRixRQUFBLENBQUFDLElBQUE7VUFBQUQsUUFBQSxDQUFBRSxJQUFBO1VBQUEsT0FFT0MsS0FBSyxDQUFDLDhDQUE4QyxDQUFDO1FBQUE7VUFBbEVsQixJQUFJLEdBQUFlLFFBQUEsQ0FBQUksSUFBQTtVQUVWcEIsWUFBWSxDQUFDQyxJQUFJLENBQUM7VUFBQ2UsUUFBQSxDQUFBRSxJQUFBO1VBQUEsT0FFQWpCLElBQUksQ0FBQ29CLElBQUksRUFBRTtRQUFBO1VBQXhCVixJQUFJLEdBQUFLLFFBQUEsQ0FBQUksSUFBQTtVQUNWRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ1osSUFBSSxDQUFDO1VBQUFLLFFBQUEsQ0FBQUUsSUFBQTtVQUFBLE9BRU9DLEtBQUssK0NBQUFLLE1BQUEsQ0FBK0NiLElBQUksQ0FBQ2MsTUFBTSxFQUFHO1FBQUE7VUFBcEZiLFNBQVMsR0FBQUksUUFBQSxDQUFBSSxJQUFBO1VBRWZwQixZQUFZLENBQUNZLFNBQVMsQ0FBQztVQUFDSSxRQUFBLENBQUFFLElBQUE7VUFBQSxPQUVMTixTQUFTLENBQUNTLElBQUksRUFBRTtRQUFBO1VBQTdCUixJQUFJLEdBQUFHLFFBQUEsQ0FBQUksSUFBQTtVQUVWekIsS0FBSyxDQUFDK0IsU0FBUyxHQUFHZixJQUFJLENBQUNoQixLQUFLO1VBQzVCRyxTQUFTLENBQUM0QixTQUFTLEdBQUdmLElBQUksQ0FBQ2IsU0FBUztVQUNwQ0MsTUFBTSxDQUFDMkIsU0FBUyxHQUFHYixJQUFJLENBQUNjLElBQUk7VUFBQ1gsUUFBQSxDQUFBRSxJQUFBO1VBQUE7UUFBQTtVQUFBRixRQUFBLENBQUFDLElBQUE7VUFBQUQsUUFBQSxDQUFBWSxFQUFBLEdBQUFaLFFBQUE7VUFFN0JNLE9BQU8sQ0FBQ08sS0FBSyxDQUFBYixRQUFBLENBQUFZLEVBQUEsQ0FBTztRQUFDO1FBQUE7VUFBQSxPQUFBWixRQUFBLENBQUFjLElBQUE7TUFBQTtJQUFBLEdBQUFwQixPQUFBO0VBQUEsQ0FFNUI7RUFBQSxnQkFyQktMLFdBQVdBLENBQUE7SUFBQSxPQUFBQyxJQUFBLENBQUF5QixLQUFBLE9BQUFDLFNBQUE7RUFBQTtBQUFBLEdBcUJoQjtBQUVEM0IsV0FBVyxFQUFFOzs7Ozs7OztVQ3BDYiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uLzAzX0R6aWVuXzQvMDNfQXN5bmNfQXdhaXQvMDFfWmFkYW5pZV8xL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RpdGxlJyk7XHJcbmNvbnN0IGNvbXBsZXRlZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb21wbGV0ZWQnKTtcclxuY29uc3QgYXV0aG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2F1dGhvcicpO1xyXG5cclxuLy8gaHR0cHM6Ly9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tL3RvZG9zLzEgPT4gdXNlcklkXHJcbi8vIGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS91c2Vycy86dXNlcklkXHJcblxyXG5jb25zdCBjaGVja0lmRXJyb3IgPSAocmVzcCkgPT4ge1xyXG4gICAgaWYgKCFyZXNwLm9rIHx8IHJlc3Auc3RhdHVzICE9PSAyMDApIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcclxuICAgIH1cclxufTtcclxuXHJcbmNvbnN0IGdldFVzZXJJbmZvID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS90b2Rvcy8xJyk7XHJcblxyXG4gICAgICAgIGNoZWNrSWZFcnJvcihyZXNwKTtcclxuXHJcbiAgICAgICAgY29uc3QgdG9kbyA9IGF3YWl0IHJlc3AuanNvbigpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRvZG8pXHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3BvVXNlciA9IGF3YWl0IGZldGNoKGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMvJHt0b2RvLnVzZXJJZH1gKTtcclxuXHJcbiAgICAgICAgY2hlY2tJZkVycm9yKHJlc3BvVXNlcik7XHJcblxyXG4gICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCByZXNwb1VzZXIuanNvbigpO1xyXG5cclxuICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSB0b2RvLnRpdGxlO1xyXG4gICAgICAgIGNvbXBsZXRlZC5pbm5lckhUTUwgPSB0b2RvLmNvbXBsZXRlZDtcclxuICAgICAgICBhdXRob3IuaW5uZXJIVE1MID0gdXNlci5uYW1lO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIH1cclxufTtcclxuXHJcbmdldFVzZXJJbmZvKCk7XHJcblxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1YmY2MDU5OGVkZDBhN2Q2N2UyZVwiKSJdLCJuYW1lcyI6WyJ0aXRsZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb21wbGV0ZWQiLCJhdXRob3IiLCJjaGVja0lmRXJyb3IiLCJyZXNwIiwib2siLCJzdGF0dXMiLCJFcnJvciIsImdldFVzZXJJbmZvIiwiX3JlZiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIm1hcmsiLCJfY2FsbGVlIiwidG9kbyIsInJlc3BvVXNlciIsInVzZXIiLCJ3cmFwIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXYiLCJuZXh0IiwiZmV0Y2giLCJzZW50IiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJjb25jYXQiLCJ1c2VySWQiLCJpbm5lckhUTUwiLCJuYW1lIiwidDAiLCJlcnJvciIsInN0b3AiLCJhcHBseSIsImFyZ3VtZW50cyJdLCJzb3VyY2VSb290IjoiIn0=