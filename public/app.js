
const button=() => {
    console.log(fullName.value)
    console.log(username.value)
    console.log(email.value)
    console.log(password.value)
    console.log(numbers.value)

    const userObj = {
        fullName: fullName.value,
        username: username.value,
        email: email.value,
        password: password.value,
        numbers:numbers.value,
    }

    const user = JSON.parse(localStorage.getItem("users")) || []
    console.log(user)

    const userIndex = user.findIndex((value, ind) => {
        return value.email === userObj.email
    })
    console.log(userIndex);
    if (userIndex === -1) {
        user.push(userObj)
        localStorage.setItem("users", JSON.stringify(user))
        alert("you are signup")
        window.location.assign("login.html")

    } else {
        alert("wrong email")
    }



}


const login =()=> {
    const email = document.getElementById("email")
    const password = document.getElementById("password")
    const userData = JSON.parse(localStorage.getItem("users"))
    console.log(userData)
    const checkUser = userData.find((value)=>{
        return value.email === email.value && value.password === password.value
    })

    console.log(checkUser);
    if (checkUser) {
        localStorage.setItem("currentUser", JSON.stringify(checkUser))
        alert("login")
    } else {
        alert("invalid")
    }

}


function showPass(e){
    var passInput= document.getElementById("passInput");
    console.log(e.className)
    if(e.className === "fas fa-lock"){
        e.className = "fas fa-unlock" 
        passInput.type = "text" 
    }else{
        e.className = "fas fa-lock"
        passInput.type = "password  " 

    }
}