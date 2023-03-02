self["webpackHotUpdatees6_async_await"](0,{

/***/ 23:
/***/ (() => {

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
  var URL = adress;
  return fetch(URL).then(function (res) {
    if (res.ok && res.status === 200) {
      return res.json();
    }
    throw new Error("Błąd");
  });
};

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("532c0f05a8052ec443b3")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC4wNmE2YWFiOTAzMDQxZmVmMGMyNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsZUFBZSxDQUFDO0FBQ3JELElBQU1DLEtBQUssR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsYUFBYSxDQUFDO0FBQ25ELElBQU1FLEtBQUssR0FBR0gsUUFBUSxDQUFDQyxhQUFhLENBQUMsWUFBWSxDQUFDO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNRyxHQUFHLEdBQUcsNEJBQTRCO0FBRXhDLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFPQSxDQUFJQyxNQUFNLEVBQUs7RUFDeEIsSUFBTUYsR0FBRyxHQUFHRSxNQUFNO0VBRWxCLE9BQU9DLEtBQUssQ0FBQ0gsR0FBRyxDQUFDLENBQUNJLElBQUksQ0FBQyxVQUFDQyxHQUFHLEVBQUs7SUFDNUIsSUFBSUEsR0FBRyxDQUFDQyxFQUFFLElBQUlELEdBQUcsQ0FBQ0UsTUFBTSxLQUFLLEdBQUcsRUFBRTtNQUM5QixPQUFPRixHQUFHLENBQUNHLElBQUksRUFBRTtJQUNyQjtJQUNBLE1BQU0sSUFBSUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztFQUMzQixDQUFDLENBQUM7QUFDTixDQUFDOzs7Ozs7OztVQ2hERCIsInNvdXJjZXMiOlsid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC8uLzAzX0R6aWVuXzQvMDNfQXN5bmNfQXdhaXQvMDNfWmFkYW5pZV8zL2pzL2FwcC5qcyIsIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGh0dHBzOi8vcmFuZG9tdXNlci5tZS9hcGkvXHJcblxyXG4vLyBaZGrEmWNpZSAoLmNhcmQtaW1nLXRvcClcclxuLy8gSW1pxJkgaSBOYXp3aXNrbyAoLmNhcmQtdGl0bGUpXHJcbi8vIEVtYWlsICguY2FyZC10ZXh0KVxyXG5cclxuY29uc3QgaW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1pbWctdG9wJyk7XHJcbmNvbnN0IHRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQtdGl0bGUnKTtcclxuY29uc3QgZW1haWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC10ZXh0Jyk7XHJcbi8vXHJcbi8vIGNvbnN0IGZldGNoUmFuZG9tVXNlciA9IGFzeW5jICgpID0+IHtcclxuLy8gICAgIHRyeSB7XHJcbi8vICAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKCdodHRwczovL3JhbmRvbXVzZXIubWUvYXBpLycpO1xyXG4vL1xyXG4vLyAgICAgICAgIGNvbnN0IHsgcmVzdWx0cyB9ID0gYXdhaXQgcmVzcC5qc29uKCk7XHJcbi8vXHJcbi8vICAgICAgICAgcmV0dXJuIHJlc3VsdHNbMF07XHJcbi8vICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4vLyAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4vLyAgICAgfVxyXG4vLyB9O1xyXG4vL1xyXG4vLyBjb25zdCBkcmF3VXNlciA9IGFzeW5jICgpID0+IHtcclxuLy8gICAgIHRyeSB7XHJcbi8vICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IGZldGNoUmFuZG9tVXNlcigpO1xyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKCd1c2VyJywgdXNlcik7XHJcbi8vXHJcbi8vICAgICAgICAgaW1hZ2Uuc3JjID0gdXNlci5waWN0dXJlLmxhcmdlO1xyXG4vLyAgICAgICAgIHRpdGxlLmlubmVySFRNTCA9IHVzZXIubmFtZS50aXRsZTtcclxuLy8gICAgICAgICBlbWFpbC5pbm5lckhUTUwgPSB1c2VyLmVtYWlsO1xyXG4vLyAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuLy8gICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuLy8gICAgIH1cclxuLy8gfTtcclxuLy9cclxuLy8gZHJhd1VzZXIoKTtcclxuXHJcbmNvbnN0IFVSTCA9ICdodHRwczovL3JhbmRvbXVzZXIubWUvYXBpLydcclxuXHJcbmNvbnN0IGdldEluZm8gPSAoYWRyZXNzKSA9PiB7XHJcbiAgICBjb25zdCBVUkwgPSBhZHJlc3NcclxuXHJcbiAgICByZXR1cm4gZmV0Y2goVVJMKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBpZiAocmVzLm9rICYmIHJlcy5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzLmpzb24oKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJCxYLEhWRcIilcclxuICAgIH0pXHJcbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1MzJjMGYwNWE4MDUyZWM0NDNiM1wiKSJdLCJuYW1lcyI6WyJpbWFnZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsInRpdGxlIiwiZW1haWwiLCJVUkwiLCJnZXRJbmZvIiwiYWRyZXNzIiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwib2siLCJzdGF0dXMiLCJqc29uIiwiRXJyb3IiXSwic291cmNlUm9vdCI6IiJ9