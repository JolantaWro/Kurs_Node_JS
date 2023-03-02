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

// const getInfo = (adress) => {
//     return fetch(adress).then((res) => {
//         if (res.ok && res.status === 200) {
//             return res.json()
//         }
//         throw new Error("Błąd")
//     })
// }
//
// async function printInfo () {
//     try {
//         const data = getInfo(URL)
//         const results = data
//         console.log(results)
//     } catch {
//         console.error('Błąd')
//     }
// }
// printInfo()

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5dd5a7ded9014c8b89ee")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41NzA4NTUzZWMyNDc0ZjIzMDdkYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsZUFBZSxDQUFDO0FBQ3JELElBQU1DLEtBQUssR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsYUFBYSxDQUFDO0FBQ25ELElBQU1FLEtBQUssR0FBR0gsUUFBUSxDQUFDQyxhQUFhLENBQUMsWUFBWSxDQUFDO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNRyxHQUFHLEdBQUcsNEJBQTRCOztBQUV4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7VUN6REEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9lczYtYXN5bmMtYXdhaXQvLi8wM19Eemllbl80LzAzX0FzeW5jX0F3YWl0LzAzX1phZGFuaWVfMy9qcy9hcHAuanMiLCJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBodHRwczovL3JhbmRvbXVzZXIubWUvYXBpL1xyXG5cclxuLy8gWmRqxJljaWUgKC5jYXJkLWltZy10b3ApXHJcbi8vIEltacSZIGkgTmF6d2lza28gKC5jYXJkLXRpdGxlKVxyXG4vLyBFbWFpbCAoLmNhcmQtdGV4dClcclxuXHJcbmNvbnN0IGltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQtaW1nLXRvcCcpO1xyXG5jb25zdCB0aXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLXRpdGxlJyk7XHJcbmNvbnN0IGVtYWlsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmQtdGV4dCcpO1xyXG4vL1xyXG4vLyBjb25zdCBmZXRjaFJhbmRvbVVzZXIgPSBhc3luYyAoKSA9PiB7XHJcbi8vICAgICB0cnkge1xyXG4vLyAgICAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9yYW5kb211c2VyLm1lL2FwaS8nKTtcclxuLy9cclxuLy8gICAgICAgICBjb25zdCB7IHJlc3VsdHMgfSA9IGF3YWl0IHJlc3AuanNvbigpO1xyXG4vL1xyXG4vLyAgICAgICAgIHJldHVybiByZXN1bHRzWzBdO1xyXG4vLyAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuLy8gICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuLy8gICAgIH1cclxuLy8gfTtcclxuLy9cclxuLy8gY29uc3QgZHJhd1VzZXIgPSBhc3luYyAoKSA9PiB7XHJcbi8vICAgICB0cnkge1xyXG4vLyAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBmZXRjaFJhbmRvbVVzZXIoKTtcclxuLy8gICAgICAgICBjb25zb2xlLmxvZygndXNlcicsIHVzZXIpO1xyXG4vL1xyXG4vLyAgICAgICAgIGltYWdlLnNyYyA9IHVzZXIucGljdHVyZS5sYXJnZTtcclxuLy8gICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSB1c2VyLm5hbWUudGl0bGU7XHJcbi8vICAgICAgICAgZW1haWwuaW5uZXJIVE1MID0gdXNlci5lbWFpbDtcclxuLy8gICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbi8vICAgICB9XHJcbi8vIH07XHJcbi8vXHJcbi8vIGRyYXdVc2VyKCk7XHJcblxyXG5jb25zdCBVUkwgPSAnaHR0cHM6Ly9yYW5kb211c2VyLm1lL2FwaS8nXHJcblxyXG4vLyBjb25zdCBnZXRJbmZvID0gKGFkcmVzcykgPT4ge1xyXG4vLyAgICAgcmV0dXJuIGZldGNoKGFkcmVzcykudGhlbigocmVzKSA9PiB7XHJcbi8vICAgICAgICAgaWYgKHJlcy5vayAmJiByZXMuc3RhdHVzID09PSAyMDApIHtcclxuLy8gICAgICAgICAgICAgcmV0dXJuIHJlcy5qc29uKClcclxuLy8gICAgICAgICB9XHJcbi8vICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQsWCxIVkXCIpXHJcbi8vICAgICB9KVxyXG4vLyB9XHJcbi8vXHJcbi8vIGFzeW5jIGZ1bmN0aW9uIHByaW50SW5mbyAoKSB7XHJcbi8vICAgICB0cnkge1xyXG4vLyAgICAgICAgIGNvbnN0IGRhdGEgPSBnZXRJbmZvKFVSTClcclxuLy8gICAgICAgICBjb25zdCByZXN1bHRzID0gZGF0YVxyXG4vLyAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdHMpXHJcbi8vICAgICB9IGNhdGNoIHtcclxuLy8gICAgICAgICBjb25zb2xlLmVycm9yKCdCxYLEhWQnKVxyXG4vLyAgICAgfVxyXG4vLyB9XHJcbi8vIHByaW50SW5mbygpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNWRkNWE3ZGVkOTAxNGM4Yjg5ZWVcIikiXSwibmFtZXMiOlsiaW1hZ2UiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJ0aXRsZSIsImVtYWlsIiwiVVJMIl0sInNvdXJjZVJvb3QiOiIifQ==