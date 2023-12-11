const textElement = document.getElementById("textElement");
const originalText = textElement.textContent;

textElement.addEventListener("mouseover", () => {
    textElement.textContent = "Mouse Over";
});

textElement.addEventListener("mouseout", () => {
    textElement.textContent = originalText;
});
