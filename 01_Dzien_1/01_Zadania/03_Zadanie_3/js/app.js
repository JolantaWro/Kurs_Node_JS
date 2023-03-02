const randomize = (param1, param2, fn) => {
    if (typeof fn !== "function") {
        throw new Error("to nie jest funkcja");
    }
    const randomNumber = Math.floor(Math.random() * (param2 - param1 + 1) + param1);

    return fn(randomNumber)
}
randomize(2, 5, console.log)