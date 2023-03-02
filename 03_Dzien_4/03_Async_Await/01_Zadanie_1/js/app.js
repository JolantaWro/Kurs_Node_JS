const title = document.getElementById('title');
const completed = document.getElementById('completed');
const author = document.getElementById('author');

// https://jsonplaceholder.typicode.com/todos/1 => userId
// https://jsonplaceholder.typicode.com/users/:userId

const checkIfError = (resp) => {
    if (!resp.ok || resp.status !== 200) {
        throw new Error();
    }
};

const getUserInfo = async () => {
    try {
        const resp = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        checkIfError(resp);

        const todo = await resp.json();
        const respoUser = await fetch(`https://jsonplaceholder.typicode.com/users/${todo.userId}`);

        checkIfError(respoUser);
        const user = await respoUser.json();
        if (todo.completed === false) {
            completed.classList.add("badge-danger")
            completed.innerText = "Nie zrobione"
        } else {
            completed.classList.add("badge-success")
            completed.innerText = "Zrobione"
        }

        title.innerHTML = todo.title;
        // completed.innerHTML = todo.completed;
        author.innerHTML = user.name;
    } catch (error) {
        console.error(error);
    }
};

getUserInfo();

