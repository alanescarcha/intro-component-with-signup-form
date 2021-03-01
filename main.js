// Declarar variables
const form = document.getElementById("form");
//First Name
const firstname = document.getElementById("first-name");
const firstNameError = document.querySelector("#first-name + span.error")
const iconErrorName = document.getElementById("iconErrorName");
//Last Name
const lastname = document.getElementById("last-name");
const lastNameError = document.querySelector("#last-name + span.error");
const iconErrorLastName = document.getElementById("iconErrorLastName");
//Email
const email = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");
const iconErrorEmail = document.getElementById("iconErrorEmail");
//Password
const password = document.getElementById("password");
const passwordError = document.querySelector("#password + span.error");
const iconErrorPassword = document.getElementById("iconErrorPassword");

// Tipos de Errores
const showError = () => {
    //First Name
    if (!firstname.validity.valid) {
        firstname.className = "errorActive";
        iconErrorName.className = "iconError";
    }
    if (firstname.validity.valueMissing) {
        firstNameError.textContent = "First Name cannot be empty";
    } else if (firstname.validity.patternMismatch) {
        firstNameError.textContent = "First name cannot contain number";
    } else {
        firstname.className = null;
        firstNameError.textContent = "";
        firstNameError.className = "error";
        iconErrorName.className = "iconErrorDisable";
    }

    //Last Name
    if (!lastname.validity.valid) {
        lastname.className = "errorActive";
        iconErrorLastName.className = "iconError";
    }
    if (lastname.validity.valueMissing) {
        lastNameError.textContent = "Last Name cannot be empty";
    } else if (lastname.validity.patternMismatch) {
        lastNameError.textContent = "Last name cannont contain number";
    } else {
        lastname.className = null;
        lastNameError.textContent = "";
        lastNameError.className = "error";
        iconErrorLastName.className = "iconErrorDisable";
    }

    //Email
    if (!email.validity.valid) {
        email.className = "errorActive";
        iconErrorEmail.className = "iconError";
    }
    if (email.validity.valueMissing) {
        emailError.textContent = "Email cannot be empty";
    } else if (email.validity.patternMismatch) {
        emailError.textContent = "Looks like this is not an email";
    } else {
        email.className = null;
        emailError.textContent = "";
        emailError.className = "error";
        iconErrorEmail.className = "iconErrorDisable";
    }

    // Password
    if (!password.validity.valid) {
        password.className = "errorActive";
        iconErrorPassword.className = "iconError";
    }
    if (password.validity.valueMissing) {
        passwordError.textContent = "Password cannot be empty";
    } else if (password.validity.patternMismatch) {
        passwordError.textContent = "Password must be at least 6 characters";
    } else {
        password.className = null;
        passwordError.textContent = "";
        passwordError.className = "error";
        iconErrorPassword.className = "iconErrorDisable";
    }
}

// Quitar todos los errores
const NoError = () => {
    firstname.className = null;
    firstNameError.textContent = "";
    firstNameError.className = "error";
    iconErrorName.className = "iconErrorDisable";
    lastname.className = null;
    lastNameError.textContent = "";
    lastNameError.className = "error";
    iconErrorLastName.className = "iconErrorDisable";
    email.className = null;
    emailError.textContent = "";
    emailError.className = "error";
    iconErrorEmail.className = "iconErrorDisable";
    password.className = null;
    passwordError.textContent = "";
    passwordError.className = "error";
    iconErrorPassword.className = "iconErrorDisable";
}

// Verificar inputs y enviar formulario
function validateForm() {
    if (!firstname.validity.valid || !lastname.validity.valid || !email.validity.valid || !password.validity.valid) {
        showError();
        return false;
    } else {
        NoError();
        alert("Form submitted successfully!");
    }
}