const ulList = document.querySelector('.list-group');

const getNames = function () {
  const names = ['Jan', 'Piotr', 'Anna'];

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(names);
    }, 2000);
  });
};

getNames().then(function (namesList) {
  namesList.forEach(function (name) {
    const li = document.createElement('li'); // tworze element
    li.classList.add('list-group-item'); // dodaje do niego klase
    li.innerHTML = name; // dodaje do niego tekst

    ulList.appendChild(li); // dodaje go do HTML
  });
});