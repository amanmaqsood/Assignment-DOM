const button = document.getElementById("clickButton");
const output = document.getElementById("output");

button.addEventListener("click", () => {
    output.textContent = "Button clicked!";
});
