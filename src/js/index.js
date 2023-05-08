function validateForm() {
    const name = document.getElementById("name")
    const email = document.getElementById("email")
    const phone = document.getElementById("phone")
    const message = document.getElementById("message")

    const nameError = document.getElementById("nameError")
    const emailError = document.getElementById("emailError")
    const phoneError = document.getElementById("phoneError")
    const messageError = document.getElementById("messageError")


    if (name.value === "") {
        name.style.border = "solid 1px #F52E2E"
        nameError.style.display = "inline"
    } else {
        name.style.border = "solid 1px #00C22B"
        nameError.style.display = "none"
    }

    if (email.value === "") {
        email.style.border = "solid 1px #F52E2E"
        emailError.style.display = "inline"
    } else {
        email.style.border = " solid 1px #00C22B"
        emailError.style.display = "none"
    }

    if (phone .value === "") {
        phone.style.border = "solid 1px #F52E2E"
        phoneError.style.display = "inline"
    } else {
        phone.style.border = " solid 1px #00C22B"
        phoneError.style.display = "none"
    }

    if (message.value === "") {
        message.style.border = "solid 1px #F52E2E"
        messageError.style.display = "inline"
    } else{
        message.style.border = "solid 1px #00C22B"
        messageError.style.display = "none"
    }
}



