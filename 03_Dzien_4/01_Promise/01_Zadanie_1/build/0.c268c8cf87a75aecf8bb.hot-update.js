self["webpackHotUpdatees6_async_await"](0,{

/***/ 23:
/***/ (() => {

var ulList = document.querySelector('.list-group');
var getNames = function getNames() {
  var names = ['Jan', 'Piotr', 'Anna'];
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(names);
    }, 2000);
  });
};
getNames().then(function (data) {
  data.forEach(function (name) {
    var li = document.createElement('li'); // tworze element
    li.classList.add('list-group-item'); // dodaje do niego klase
    li.innerHTML = name; // dodaje do niego tekst

    ulList.appendChild(li); // dodaje go do HTML
  });
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("8e1a762a7031676e424c")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5jMjY4YzhjZjg3YTc1YWVjZjhiYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBTUEsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxhQUFhLENBQUM7QUFFcEQsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVFBLENBQUEsRUFBZTtFQUMzQixJQUFNQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQztFQUV0QyxPQUFPLElBQUlDLE9BQU8sQ0FBQyxVQUFDQyxPQUFPLEVBQUVDLE1BQU0sRUFBSztJQUN0Q0MsVUFBVSxDQUFDLFlBQU07TUFDZkYsT0FBTyxDQUFDRixLQUFLLENBQUM7SUFDaEIsQ0FBQyxFQUFFLElBQUksQ0FBQztFQUNWLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFREQsUUFBUSxFQUFFLENBQUNNLElBQUksQ0FBQyxVQUFVQyxJQUFJLEVBQUU7RUFDOUJBLElBQUksQ0FBQ0MsT0FBTyxDQUFDLFVBQVVDLElBQUksRUFBRTtJQUMzQixJQUFNQyxFQUFFLEdBQUdaLFFBQVEsQ0FBQ2EsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDekNELEVBQUUsQ0FBQ0UsU0FBUyxDQUFDQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO0lBQ3JDSCxFQUFFLENBQUNJLFNBQVMsR0FBR0wsSUFBSSxDQUFDLENBQUM7O0lBRXJCWixNQUFNLENBQUNrQixXQUFXLENBQUNMLEVBQUUsQ0FBQyxDQUFDLENBQUM7RUFDMUIsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDOzs7Ozs7OztVQ3BCRiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uLzAzX0R6aWVuXzQvMDFfUHJvbWlzZS8wMV9aYWRhbmllXzEvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdWxMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QtZ3JvdXAnKTtcblxuY29uc3QgZ2V0TmFtZXMgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IG5hbWVzID0gWydKYW4nLCAnUGlvdHInLCAnQW5uYSddO1xuXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICByZXNvbHZlKG5hbWVzKTtcbiAgICB9LCAyMDAwKTtcbiAgfSk7XG59O1xuXG5nZXROYW1lcygpLnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpOyAvLyB0d29yemUgZWxlbWVudFxuICAgIGxpLmNsYXNzTGlzdC5hZGQoJ2xpc3QtZ3JvdXAtaXRlbScpOyAvLyBkb2RhamUgZG8gbmllZ28ga2xhc2VcbiAgICBsaS5pbm5lckhUTUwgPSBuYW1lOyAvLyBkb2RhamUgZG8gbmllZ28gdGVrc3RcblxuICAgIHVsTGlzdC5hcHBlbmRDaGlsZChsaSk7IC8vIGRvZGFqZSBnbyBkbyBIVE1MXG4gIH0pO1xufSk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiOGUxYTc2MmE3MDMxNjc2ZTQyNGNcIikiXSwibmFtZXMiOlsidWxMaXN0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiZ2V0TmFtZXMiLCJuYW1lcyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwic2V0VGltZW91dCIsInRoZW4iLCJkYXRhIiwiZm9yRWFjaCIsIm5hbWUiLCJsaSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCJdLCJzb3VyY2VSb290IjoiIn0=