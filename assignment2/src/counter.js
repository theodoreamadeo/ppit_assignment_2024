let counter = 0; //Start the counter from 0

const counterDisplay = document.getElementById("counter-display");
const increaseButton = document.getElementById("increase-button");
const decreaseButton = document.getElementById("decrease-button");
const resetButton = document.getElementById("reset-button");
const alertSystem = document.getElementById("alert-system");

increaseButton.addEventListener("click", () => {
    counter++;
    counterDisplay.textContent = counter;

    // Clear the alert message when counter increments
    alertSystem.textContent = "";
    alertSystem.style.color = "";
})

decreaseButton.addEventListener("click", () => {
    if (counter == 0 ){
        alertSystem.textContent = "Counter cannot be less than zero!";
        alertSystem.style.color ="red";
    }
    else {
        counter--;
        counterDisplay.textContent = counter;

        // Clear the alert message when counter increments
        alertSystem.textContent = "";
        alertSystem.style.color = "";
    }
})

resetButton.addEventListener("click", () => {
    counter = 0;
    counterDisplay.textContent = counter;

    // Clear the alert message when counter increments
    alertSystem.textContent = "";
    alertSystem.style.color = "";
})