const button = document.getElementById("clickButton");
const output = document.getElementById("output");

button.addEventListener("dblclick", () => {
    output.textContent = "Button double-clicked!";
});
