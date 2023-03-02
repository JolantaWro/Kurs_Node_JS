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
fetch(URL).then(function (res) {
  return res.json();
}).then(function (data) {
  return console.log(data);
})["catch"](function (err) {
  return console.error(err);
});

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
/******/ 	__webpack_require__.h = () => ("2ef6aceece2cd7220757")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC41ZGQ1YTdkZWQ5MDE0YzhiODllZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBR0MsUUFBUSxDQUFDQyxhQUFhLENBQUMsZUFBZSxDQUFDO0FBQ3JELElBQU1DLEtBQUssR0FBR0YsUUFBUSxDQUFDQyxhQUFhLENBQUMsYUFBYSxDQUFDO0FBQ25ELElBQU1FLEtBQUssR0FBR0gsUUFBUSxDQUFDQyxhQUFhLENBQUMsWUFBWSxDQUFDO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNRyxHQUFHLEdBQUcsNEJBQTRCO0FBRXhDQyxLQUFLLENBQUNELEdBQUcsQ0FBQyxDQUNMRSxJQUFJLENBQUMsVUFBQUMsR0FBRztFQUFBLE9BQUlBLEdBQUcsQ0FBQ0MsSUFBSSxFQUFFO0FBQUEsRUFBQyxDQUN2QkYsSUFBSSxDQUFDLFVBQUFHLElBQUk7RUFBQSxPQUFJQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsSUFBSSxDQUFDO0FBQUEsRUFBQyxTQUMxQixDQUFDLFVBQUFHLEdBQUc7RUFBQSxPQUFJRixPQUFPLENBQUNHLEtBQUssQ0FBQ0QsR0FBRyxDQUFDO0FBQUEsRUFBQzs7QUFHckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O1VDL0RBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXM2LWFzeW5jLWF3YWl0Ly4vMDNfRHppZW5fNC8wM19Bc3luY19Bd2FpdC8wM19aYWRhbmllXzMvanMvYXBwLmpzIiwid2VicGFjazovL2VzNi1hc3luYy1hd2FpdC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaHR0cHM6Ly9yYW5kb211c2VyLm1lL2FwaS9cclxuXHJcbi8vIFpkasSZY2llICguY2FyZC1pbWctdG9wKVxyXG4vLyBJbWnEmSBpIE5hendpc2tvICguY2FyZC10aXRsZSlcclxuLy8gRW1haWwgKC5jYXJkLXRleHQpXHJcblxyXG5jb25zdCBpbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLWltZy10b3AnKTtcclxuY29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZC10aXRsZScpO1xyXG5jb25zdCBlbWFpbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLXRleHQnKTtcclxuLy9cclxuLy8gY29uc3QgZmV0Y2hSYW5kb21Vc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4vLyAgICAgdHJ5IHtcclxuLy8gICAgICAgICBjb25zdCByZXNwID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vcmFuZG9tdXNlci5tZS9hcGkvJyk7XHJcbi8vXHJcbi8vICAgICAgICAgY29uc3QgeyByZXN1bHRzIH0gPSBhd2FpdCByZXNwLmpzb24oKTtcclxuLy9cclxuLy8gICAgICAgICByZXR1cm4gcmVzdWx0c1swXTtcclxuLy8gICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbi8vICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbi8vICAgICB9XHJcbi8vIH07XHJcbi8vXHJcbi8vIGNvbnN0IGRyYXdVc2VyID0gYXN5bmMgKCkgPT4ge1xyXG4vLyAgICAgdHJ5IHtcclxuLy8gICAgICAgICBjb25zdCB1c2VyID0gYXdhaXQgZmV0Y2hSYW5kb21Vc2VyKCk7XHJcbi8vICAgICAgICAgY29uc29sZS5sb2coJ3VzZXInLCB1c2VyKTtcclxuLy9cclxuLy8gICAgICAgICBpbWFnZS5zcmMgPSB1c2VyLnBpY3R1cmUubGFyZ2U7XHJcbi8vICAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gdXNlci5uYW1lLnRpdGxlO1xyXG4vLyAgICAgICAgIGVtYWlsLmlubmVySFRNTCA9IHVzZXIuZW1haWw7XHJcbi8vICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4vLyAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4vLyAgICAgfVxyXG4vLyB9O1xyXG4vL1xyXG4vLyBkcmF3VXNlcigpO1xyXG5cclxuY29uc3QgVVJMID0gJ2h0dHBzOi8vcmFuZG9tdXNlci5tZS9hcGkvJ1xyXG5cclxuZmV0Y2goVVJMKVxyXG4gICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAudGhlbihkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKVxyXG4gICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpXHJcblxyXG5cclxuLy8gY29uc3QgZ2V0SW5mbyA9IChhZHJlc3MpID0+IHtcclxuLy8gICAgIHJldHVybiBmZXRjaChhZHJlc3MpLnRoZW4oKHJlcykgPT4ge1xyXG4vLyAgICAgICAgIGlmIChyZXMub2sgJiYgcmVzLnN0YXR1cyA9PT0gMjAwKSB7XHJcbi8vICAgICAgICAgICAgIHJldHVybiByZXMuanNvbigpXHJcbi8vICAgICAgICAgfVxyXG4vLyAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkLFgsSFZFwiKVxyXG4vLyAgICAgfSlcclxuLy8gfVxyXG4vL1xyXG4vLyBhc3luYyBmdW5jdGlvbiBwcmludEluZm8gKCkge1xyXG4vLyAgICAgdHJ5IHtcclxuLy8gICAgICAgICBjb25zdCBkYXRhID0gZ2V0SW5mbyhVUkwpXHJcbi8vICAgICAgICAgY29uc3QgcmVzdWx0cyA9IGRhdGFcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHRzKVxyXG4vLyAgICAgfSBjYXRjaCB7XHJcbi8vICAgICAgICAgY29uc29sZS5lcnJvcignQsWCxIVkJylcclxuLy8gICAgIH1cclxuLy8gfVxyXG4vLyBwcmludEluZm8oKSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjJlZjZhY2VlY2UyY2Q3MjIwNzU3XCIpIl0sIm5hbWVzIjpbImltYWdlIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwidGl0bGUiLCJlbWFpbCIsIlVSTCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiY29uc29sZSIsImxvZyIsImVyciIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==