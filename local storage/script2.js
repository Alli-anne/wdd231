function submitForm(event) {
    const nameElement = document.getElementById("name");
    const emailElement = document.getElementById("email");
    
    let error = "";
    if (nameElement.value === "") {
        error += "Please enter your name \n";
    }
    if (emailElement.value === "") {
        error += "Please enter your email \n";
    }
        else if (!validateEmail(emailElement.value)) {
            error += "Please enter a valid email \n";
        }
    }
    if (error) {
        event.preventDefault();
        document.getElementById("form-error").innerContent = error;
    }
}   
function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }
  
document.getElementById("contact-form").addEventListener("submit", submitForm);