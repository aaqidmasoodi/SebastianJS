// STEP 1: SELECT IT
const button = document.getElementById('login-btn')

// SELECT THE BOX
const box = document.getElementById('box-container')


// THE FUNCTION THAT IS SUPPOSED TO BE RUN WHEN THE BTN IS CLICKED
// ADD AN EVENT LISTENING
//                                ---this function is called
// THIS IS THE MOST

// DO NOT USE CHAT GPT - Research!

let currentColor = "red"
button.addEventListener('click', () => {
    if (currentColor === "red") {
        currentColor = "purple"
    } else {
        currentColor = "red"
    }
    box.style.backgroundColor = currentColor
})

console.log(button)