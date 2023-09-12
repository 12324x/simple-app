// JavaScript code
const button = document.getElementById("clickMeButton");
const message = document.getElementById("message");

button.addEventListener("click", function () {
    message.textContent = "Button clicked!";
});
