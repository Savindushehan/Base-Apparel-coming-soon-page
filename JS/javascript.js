console.clear();

var emailField = document.getElementById("email-field");
var emailError = document.getElementById("email-error");
var warnIcon = document.getElementById("warn-icon");
var submitBtn = document.getElementById("submit-btn");

var pattern = /^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;

submitBtn.onclick = function () {
    console.log("Btn clicked");
    if (!emailField.value.match(pattern)) {
        emailError.innerHTML = "please provide a valid email";
        emailField.style.borderColor = "hsl(0, 93%, 68%)";
        warnIcon.style.display = "block";
        return false;
    } else {
        emailError.innerHTML = "";
        emailField.style.borderColor = "hsl(0, 36%, 70%)";
        warnIcon.style.display = "none";
        return true;
    }
}
