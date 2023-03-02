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
          _context.next = 10;
          return fetch("https://jsonplaceholder.typicode.com/users/".concat(todo.userId));
        case 10:
          respoUser = _context.sent;
          checkIfError(respoUser);
          _context.next = 14;
          return respoUser.json();
        case 14:
          user = _context.sent;
          if (todo.completed === false) {
            completed.classList.add("badge-danger");
            completed.innerText = "Nie zrobione";
          } else {
            completed.classList.add("badge-success");
            completed.innerText = "Zrobione";
          }
          title.innerHTML = todo.title;
          // completed.innerHTML = todo.completed;
          author.innerHTML = user.name;
          _context.next = 23;
          break;
        case 20:
          _context.prev = 20;
          _context.t0 = _context["catch"](0);
          console.error(_context.t0);
        case 23:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 20]]);
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
/******/ 	__webpack_require__.h = () => ("c504ebb28dce947fdd64")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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M19Eemllbl80LzAzX0FzeW5jX0F3YWl0LzAxX1phZGFuaWVfMS9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpO1xyXG5jb25zdCBjb21wbGV0ZWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29tcGxldGVkJyk7XHJcbmNvbnN0IGF1dGhvciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhdXRob3InKTtcclxuXHJcbi8vIGh0dHBzOi8vanNvbnBsYWNlaG9sZGVyLnR5cGljb2RlLmNvbS90b2Rvcy8xID0+IHVzZXJJZFxyXG4vLyBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMvOnVzZXJJZFxyXG5cclxuY29uc3QgY2hlY2tJZkVycm9yID0gKHJlc3ApID0+IHtcclxuICAgIGlmICghcmVzcC5vayB8fCByZXNwLnN0YXR1cyAhPT0gMjAwKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5jb25zdCBnZXRVc2VySW5mbyA9IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKCdodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdG9kb3MvMScpO1xyXG4gICAgICAgIGNoZWNrSWZFcnJvcihyZXNwKTtcclxuXHJcbiAgICAgICAgY29uc3QgdG9kbyA9IGF3YWl0IHJlc3AuanNvbigpO1xyXG4gICAgICAgIGNvbnN0IHJlc3BvVXNlciA9IGF3YWl0IGZldGNoKGBodHRwczovL2pzb25wbGFjZWhvbGRlci50eXBpY29kZS5jb20vdXNlcnMvJHt0b2RvLnVzZXJJZH1gKTtcclxuXHJcbiAgICAgICAgY2hlY2tJZkVycm9yKHJlc3BvVXNlcik7XHJcbiAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHJlc3BvVXNlci5qc29uKCk7XHJcbiAgICAgICAgaWYgKHRvZG8uY29tcGxldGVkID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgICBjb21wbGV0ZWQuY2xhc3NMaXN0LmFkZChcImJhZGdlLWRhbmdlclwiKVxyXG4gICAgICAgICAgICBjb21wbGV0ZWQuaW5uZXJUZXh0ID0gXCJOaWUgenJvYmlvbmVcIlxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbXBsZXRlZC5jbGFzc0xpc3QuYWRkKFwiYmFkZ2Utc3VjY2Vzc1wiKVxyXG4gICAgICAgICAgICBjb21wbGV0ZWQuaW5uZXJUZXh0ID0gXCJacm9iaW9uZVwiXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSB0b2RvLnRpdGxlO1xyXG4gICAgICAgIC8vIGNvbXBsZXRlZC5pbm5lckhUTUwgPSB0b2RvLmNvbXBsZXRlZDtcclxuICAgICAgICBhdXRob3IuaW5uZXJIVE1MID0gdXNlci5uYW1lO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgIH1cclxufTtcclxuXHJcbmdldFVzZXJJbmZvKCk7XHJcblxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJjNTA0ZWJiMjhkY2U5NDdmZGQ2NFwiKSJdLCJuYW1lcyI6WyJ0aXRsZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjb21wbGV0ZWQiLCJhdXRob3IiLCJjaGVja0lmRXJyb3IiLCJyZXNwIiwib2siLCJzdGF0dXMiLCJFcnJvciIsImdldFVzZXJJbmZvIiwiX3JlZiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX3JlZ2VuZXJhdG9yUnVudGltZSIsIm1hcmsiLCJfY2FsbGVlIiwidG9kbyIsInJlc3BvVXNlciIsInVzZXIiLCJ3cmFwIiwiX2NhbGxlZSQiLCJfY29udGV4dCIsInByZXYiLCJuZXh0IiwiZmV0Y2giLCJzZW50IiwianNvbiIsImNvbmNhdCIsInVzZXJJZCIsImNsYXNzTGlzdCIsImFkZCIsImlubmVyVGV4dCIsImlubmVySFRNTCIsIm5hbWUiLCJ0MCIsImNvbnNvbGUiLCJlcnJvciIsInN0b3AiLCJhcHBseSIsImFyZ3VtZW50cyJdLCJzb3VyY2VSb290IjoiIn0=