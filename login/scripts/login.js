let userDetails = JSON.parse(localStorage.getItem("userDetails"))
console.log('userDetails:', userDetails)

document.querySelector("form").addEventListener("submit", loginFun)

let btn = document.querySelector(".btn").addEventListener("click", creatFun)

function creatFun() {
    window.location.href="create.html"
}

function loginFun() {
    event.preventDefault()
    let enteredEmail = document.querySelector("#enteredEmail").value
    let enteredPassword = document.querySelector("#enteredPassword").value
    console.log('enteredPassword:', enteredPassword)
    console.log('enteredEmail:', enteredEmail)

    let flag = false;
    for (let i = 0; i < userDetails.length; i++) {
        let actEmail = userDetails[i].userEmail
        console.log('actEmail:', actEmail)
        let actPassword = userDetails[i].userPassword
        console.log('actPassword:', actPassword)

        if (enteredEmail == actEmail && enteredPassword == actPassword) {
            flag = true;
            document.querySelector("#enteredEmail").value = null
            document.querySelector("#enteredPassword").value = null
            break;
        }
    }
    if (flag) {
        // window.location.href="index.html"
        alert("Harsh you rule")
    }

    else {
        alert("invalid Credentials")
        document.querySelector("#enteredEmail").value = null
        document.querySelector("#enteredPassword").value = null
    }

}