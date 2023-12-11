const button = document.getElementById("hoverButton");

button.addEventListener("mouseover", () => {
    button.classList.add("red");
});

button.addEventListener("mouseout", () => {
    button.classList.remove("red");
});
