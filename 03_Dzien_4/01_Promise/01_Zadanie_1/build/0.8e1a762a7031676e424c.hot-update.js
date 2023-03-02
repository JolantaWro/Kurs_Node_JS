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
getNames().then(function (namesList) {
  namesList.forEach(function (name) {
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
/******/ 	__webpack_require__.h = () => ("e0fe622996a204cfd8ab")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC44ZTFhNzYyYTcwMzE2NzZlNDI0Yy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsSUFBTUEsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGFBQWEsQ0FBQyxhQUFhLENBQUM7QUFFcEQsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVFBLENBQUEsRUFBZTtFQUMzQixJQUFNQyxLQUFLLEdBQUcsQ0FBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQztFQUV0QyxPQUFPLElBQUlDLE9BQU8sQ0FBQyxVQUFDQyxPQUFPLEVBQUVDLE1BQU0sRUFBSztJQUN0Q0MsVUFBVSxDQUFDLFlBQU07TUFDZkYsT0FBTyxDQUFDRixLQUFLLENBQUM7SUFDaEIsQ0FBQyxFQUFFLElBQUksQ0FBQztFQUNWLENBQUMsQ0FBQztBQUNKLENBQUM7QUFFREQsUUFBUSxFQUFFLENBQUNNLElBQUksQ0FBQyxVQUFVQyxTQUFTLEVBQUU7RUFDbkNBLFNBQVMsQ0FBQ0MsT0FBTyxDQUFDLFVBQVVDLElBQUksRUFBRTtJQUNoQyxJQUFNQyxFQUFFLEdBQUdaLFFBQVEsQ0FBQ2EsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDekNELEVBQUUsQ0FBQ0UsU0FBUyxDQUFDQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO0lBQ3JDSCxFQUFFLENBQUNJLFNBQVMsR0FBR0wsSUFBSSxDQUFDLENBQUM7O0lBRXJCWixNQUFNLENBQUNrQixXQUFXLENBQUNMLEVBQUUsQ0FBQyxDQUFDLENBQUM7RUFDMUIsQ0FBQyxDQUFDO0FBQ0osQ0FBQyxDQUFDOzs7Ozs7OztVQ3BCRiIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uLzAzX0R6aWVuXzQvMDFfUHJvbWlzZS8wMV9aYWRhbmllXzEvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdWxMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxpc3QtZ3JvdXAnKTtcblxuY29uc3QgZ2V0TmFtZXMgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IG5hbWVzID0gWydKYW4nLCAnUGlvdHInLCAnQW5uYSddO1xuXG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICByZXNvbHZlKG5hbWVzKTtcbiAgICB9LCAyMDAwKTtcbiAgfSk7XG59O1xuXG5nZXROYW1lcygpLnRoZW4oZnVuY3Rpb24gKG5hbWVzTGlzdCkge1xuICBuYW1lc0xpc3QuZm9yRWFjaChmdW5jdGlvbiAobmFtZSkge1xuICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTsgLy8gdHdvcnplIGVsZW1lbnRcbiAgICBsaS5jbGFzc0xpc3QuYWRkKCdsaXN0LWdyb3VwLWl0ZW0nKTsgLy8gZG9kYWplIGRvIG5pZWdvIGtsYXNlXG4gICAgbGkuaW5uZXJIVE1MID0gbmFtZTsgLy8gZG9kYWplIGRvIG5pZWdvIHRla3N0XG5cbiAgICB1bExpc3QuYXBwZW5kQ2hpbGQobGkpOyAvLyBkb2RhamUgZ28gZG8gSFRNTFxuICB9KTtcbn0pOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImUwZmU2MjI5OTZhMjA0Y2ZkOGFiXCIpIl0sIm5hbWVzIjpbInVsTGlzdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldE5hbWVzIiwibmFtZXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInNldFRpbWVvdXQiLCJ0aGVuIiwibmFtZXNMaXN0IiwiZm9yRWFjaCIsIm5hbWUiLCJsaSIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJpbm5lckhUTUwiLCJhcHBlbmRDaGlsZCJdLCJzb3VyY2VSb290IjoiIn0=