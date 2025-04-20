function validateForm() {
    var form = document.frmRegister;

    // Regular expressions for validation
    var phonePattern = /^(\(0\d{1,3}\)\d{7})|(0\d{9,10})$/;
    var emailPattern = /^[a-zA-Z]\w*(\.\w+)*@\w+(\.\w{2,3})+$/;

    // Validate username
    if (form.txtUsername.value.trim() === "") {
        alert("Username can't be empty!");
        form.txtUsername.focus();
        return false;
    }

    // Validate password
    if (form.txtPassword1.value.length < 6) {
        alert("Password must be at least 6 characters long!");
        form.txtPassword1.focus();
        return false;
    }

    // Validate confirm password
    if (form.txtPassword1.value !== form.txtPassword2.value) {
        alert("Passwords do not match!");
        form.txtPassword2.focus();
        return false;
    }

    // Validate phone number
    if (!phonePattern.test(form.txtPhone.value)) {
        alert("Invalid phone number!");
        form.txtPhone.focus();
        return false;
    }

    // Validate email
    if (!emailPattern.test(form.txtEmail.value)) {
        alert("Invalid email address!");
        form.txtEmail.focus();
        return false;
    }

    // Validate at least one favourite is selected
    if (!form.chkMusic.checked && !form.chkReading.checked) {
        alert("You must select at least one favourite!");
        form.chkMusic.focus();
        return false;
    }

    // Validate picture upload
    if (form.filePicture.value === "") {
        alert("You must upload a picture!");
        form.filePicture.focus();
        return false;
    }

    // Validate description
    if (form.txtDescription.value.trim() === "") {
        alert("You must enter a description!");
        form.txtDescription.focus();
        return false;
    }

    // If all validations pass
    alert("All information is valid. Form submitted successfully!");
    return true;
}

// Attach the validateForm function to the form's onsubmit event
document.frmRegister.onsubmit = validateForm;

<form name ="frmRegister" method="get" onsubmit="return validateForm()">
</form>