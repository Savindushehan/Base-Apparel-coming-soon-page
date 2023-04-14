var emailField=document.getElementById("email-field");
var emailLabel=document.getElementById("email-label");
var emailError=document.getElementById("email-error");
var pattern=/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/;
var emailImage=document.getElementById("image");
var Email=document.getElementsByClassName("email");

function validateEmail(){
    emailLabel.innerHTML="";
    if(!emailField.value.match(pattern)){
        emailError.innerHTML="please provide a valid email";
        emailImage.style.display='block';
        emailField.style.borderColor="hsl(0, 93%, 68%)";
        return false;
    }else{
        emailError.innerHTML="";
        emailImage.style.display='none';
        emailField.style.borderColor="hsl(0, 36%, 70%)";
        return true;
    }
}
