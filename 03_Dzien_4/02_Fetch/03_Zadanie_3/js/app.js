const URL = 'https://fer-api.coderslab.pl/v1/holidays'

const key_API = '?key=e92601251-c0a2-4s63-v73f-54041195480f'

document.addEventListener("DOMContentLoaded", function (){
    const ulElements = document.querySelector("#app")
    fetch("https://fer-api.coderslab.pl/v1/holidays?key=e92601251-c0a2-4s63-v73f-54041195480f&country=PL" )
        .then(res => res.json().then(res => {
                res.holidays.forEach(el => {
                    const newElement = document.createElement("li");
                    ulElements.appendChild(newElement);
                    // newElement.innerHTML = el.name + el.date;
                    newElement.innerHTML = `<date class="holiday-date">${el.date}</date><h3 class="holiday-name">${el.name}</h3>`
                });
            })
        )
});