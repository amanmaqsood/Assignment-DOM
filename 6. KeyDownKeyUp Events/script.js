const output = document.getElementById("output");
const pressKey = output.querySelector("p:first-child");
const releasedKey = output.querySelector("p:last-child");

document.addEventListener("keydown", (event) => {
    pressKey.textContent = `Pressing key: ${event.key}`;
});

document.addEventListener("keyup", (event) => {
    releasedKey.textContent = `Released key: ${event.key}`;
});
