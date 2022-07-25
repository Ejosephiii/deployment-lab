
let button = document.querySelector("#buy")

let buttonTwo = document.querySelector("#disclaimer")

buyButton = () => {
    alert("Siiiiike you don't got the power for this sweet baby! LOL")
}

disclaimerButton = () => {
    alert("I am not responsible for any broken personal objects for trying to buy LOL")
}

// rollbar.log("frontend hit")

button.addEventListener('click', buyButton)
buttonTwo.addEventListener('click', disclaimerButton)