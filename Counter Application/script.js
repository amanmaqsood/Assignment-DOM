// Get the HTML elements
const countElement = document.getElementById("count");
const incrementBtn = document.getElementById("incrementBtn");
const decrementBtn = document.getElementById("decrementBtn");
const resetBtn = document.getElementById("resetBtn");

let count = 0;

// Update the count display
function updateCount() {
    countElement.textContent = count;
}

// Event listener for the increment button
incrementBtn.addEventListener("click", () => {
    count++;
    updateCount();
});

// Event listener for the decrement button
decrementBtn.addEventListener("click", () => {
    count--;
    updateCount();
});

// Event listener for the reset button
resetBtn.addEventListener("click", () => {
    count = 0;
    updateCount();
});

// Initialize the count display
updateCount();
