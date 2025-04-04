let string = "";
let buttons = document.querySelectorAll(".button");
let inputField = document.querySelector(".input");

buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
        let value = e.target.innerHTML;

        if (value === "=") {
            try {
                string = eval(string); // Evaluates the expression
                inputField.value = string;
            } catch {
                inputField.value = "Error"; // Handles errors
                string = "";
            }
        } else if (value === "C") {
            string = ""; // Clears input
            inputField.value = string;
        } else {
            string += value;
            inputField.value = string;
        }
    });
});
