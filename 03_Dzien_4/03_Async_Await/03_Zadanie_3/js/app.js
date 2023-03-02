// https://randomuser.me/api/

// Zdjęcie (.card-img-top)
// Imię i Nazwisko (.card-title)
// Email (.card-text)

const image = document.querySelector('.card-img-top');
const title = document.querySelector('.card-title');
const email = document.querySelector('.card-text');
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

const URL = 'https://randomuser.me/api/'

const getInfo = (adress) => {
    return fetch(adress).then((res) => {
        if (res.ok && res.status === 200) {
            return res.json()
        }
        throw new Error("Błąd")
    })
}

async function printInfo () {
    try {
        const data = await getInfo(URL)
        const results = data.results[0]
        title.innerText = `${results.name.first} ${results.name.last}`
        email.innerText = results.email
        console.log(results)
        image.src = results.picture.large

    } catch {
        console.error('Błąd')
    }
}
printInfo()