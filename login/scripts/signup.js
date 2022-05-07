document.querySelector("form").addEventListener("submit", formSubmit)

let userDetails = JSON.parse(localStorage.getItem("userDetails")) || []
function formSubmit()
{
    event.preventDefault()
    // console.log("yes")
    function userData(fn, ln, em, zc, pn, pw)
    {
        this.firstName = fn
        this.lastName = ln
        this.userEmail = em
        this.zipCode = zc
        this.phoneNumber = pn
        this.userPassword = pw
    }
    let firstName = document.querySelector("#firstName").value
    let lastName = document.querySelector("#lasttName").value
    let userEmail = document.querySelector("#userEmail").value
    let zipCode = document.querySelector("#zipCode").value
    let phoneNumber = document.querySelector("#phoneNumber").value
    let userPassword = document.querySelector("#userPassword").value
    let userEmailConf = document.querySelector("#userEmailConf").value

    let userObj = new userData(firstName, lastName, userEmail, zipCode, phoneNumber, userPassword)

    document.querySelector("#firstName").value = null
    document.querySelector("#userEmail").value = null
    document.querySelector("#userPassword").value = null
    document.querySelector("#lasttName").value = null
    document.querySelector("#zipCode").value = null
    document.querySelector("#phoneNumber").value = null
    document.querySelector("#userEmailConf").value = null

    if(userEmail === userEmailConf) {
        userDetails.push(userObj)
        localStorage.setItem("userDetails", JSON.stringify(userDetails))
        window.location.href="login.html"
    }

    else {
        alert("Enter same email id")
    }
}
