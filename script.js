function validateForm() {

    var fields = [
        "nameError","emailError","rollError","ageError","phoneError",
        "passwordError","genderError","deptError","yearError",
        "collegeError","cityError","termsError"
    ];

    for (var i = 0; i < fields.length; i++) {
        document.getElementById(fields[i]).innerHTML = "";
    }

    var valid = true;

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var roll = document.getElementById("roll").value;
    var age = document.getElementById("age").value;
    var phone = document.getElementById("phone").value;
    var password = document.getElementById("password").value;
    var gender = document.getElementById("gender").value;
    var dept = document.getElementById("dept").value;
    var year = document.getElementById("year").value;
    var college = document.getElementById("college").value;
    var city = document.getElementById("city").value;
    var terms = document.getElementById("terms").checked;

    if (name === "") {
        document.getElementById("nameError").innerHTML = "Please enter your name";
        valid = false;
    }

    if (email === "" || !email.includes("@")) {
        document.getElementById("emailError").innerHTML = "Please enter a valid email address";
        valid = false;
    }

    if (roll === "") {
        document.getElementById("rollError").innerHTML = "Please enter your roll number";
        valid = false;
    }

    if (age === "" || age <= 0 || age > 120) {
        document.getElementById("ageError").innerHTML = "Please enter a valid age";
        valid = false;
    }

    if (phone === "" || phone.length !== 10 || isNaN(phone)) {
        document.getElementById("phoneError").innerHTML = "Please enter a 10-digit phone number";
        valid = false;
    }

    if (password === "" || password.length < 6) {
        document.getElementById("passwordError").innerHTML = "Password must be at least 6 characters long";
        valid = false;
    }

    if (gender === "") {
        document.getElementById("genderError").innerHTML = "Please select your gender";
        valid = false;
    }

    if (dept === "") {
        document.getElementById("deptError").innerHTML = "Please enter your department";
        valid = false;
    }

    if (year === "") {
        document.getElementById("yearError").innerHTML = "Please select your year of study";
        valid = false;
    }

    if (college === "") {
        document.getElementById("collegeError").innerHTML = "Please enter your college name";
        valid = false;
    }

    if (city === "") {
        document.getElementById("cityError").innerHTML = "Please enter your city";
        valid = false;
    }

    if (!terms) {
        document.getElementById("termsError").innerHTML = "Please accept the terms and conditions";
        valid = false;
    }

    return valid;
}
