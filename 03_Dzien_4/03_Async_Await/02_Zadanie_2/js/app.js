const valueRandom = document.querySelector("#random-value")
const messageElement = document.querySelector("#message")



const asyncAction = () => {
  return new Promise((resolve, reject) => {
    const random = Math.floor(Math.random() * 100) + 1;

    setTimeout(() => {
      if (random <= 50) {
        resolve({
          value: random,
          status: "OK"
        });
      } else {
        reject({
          value: random,
          status: "ERROR",
          errorMsg: "Value is greater then 50"
        });
      }
    }, 1250);
  });
};

async function checkRandom() {
  try {
    const data = await asyncAction()
    if (data.status === "OK") {
      valueRandom.innerHTML = data.value
    }
    console.log(data)
  } catch (err){
    messageElement.innerHTML = err.errorMsg
    console.log(err)
  }
}
checkRandom()