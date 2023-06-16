
//  Generating  the random number

const randomNum = Math.floor(Math.random()*100);

console.log(randomNum)


//Selectors

const input = document.querySelector("#input")
input.style.backgroundColor = "red"

const check = document.querySelector("#button")
check.style.color = "white"


const numberAttempt = document.querySelector("#attempt")
numberAttempt.style.color = "blue"

const span = document.querySelector("#attemptLeft")
span.style.color = "black"

const resetButton = document.querySelector("#resetButton")
resetButton.style.backgroundColor = "blue"

const attepmtDiv = document.querySelector("#attepmtDiv")


let attemptLeft = 3


// "Click" Event Listener to Button

check.addEventListener("click", () => {
    input.value = ""
    if(input.value == randomNum) {
        console.log("Omg You done it")
        numberAttempt.innerText = "You must be a Wizard, Congratulationss!!!"
    }
    else if (attemptLeft === 1 ) {
        numberAttempt.innerText = "Sorry , You lost"

    }
    else if (input.value !== randomNum){
        attemptLeft--
        span.innerText = attemptLeft
        console.log(attemptLeft)
    }

})



resetButton.onclick = () => {

    if (attemptLeft === 1) {
        console.log(attemptLeft)
        const attempt1 = document.createElement("h1")
        attempt1.innerHTML = `        <h1 id="attempt">Number of Attempts: <span id="attemptLeft">3</span> </h1>`
        attepmtDiv.appendChild(attempt1)
        numberAttempt.innerText.remove()
    }

//     if ( attemptLeft  ) {
//         console.log("hesss")
// }

}





