let username = document.getElementById("username");
let mail = document.getElementById("email");
let password = document.getElementById("password");
let btn = document.getElementById("sign_up");

btn.addEventListener("click", function (e){
    e.preventDefault() /*cancel refresh page and settimeout will work*/
    if(username.value ==="" || mail.value ==="" || password.value === ""){
        alert("please fill all fields")
    }else{
        localStorage.setItem("username" , username.value);
        localStorage.setItem("mail" , mail.value);
        localStorage.setItem("password" , password.value);

        setTimeout ( () => {
            window.location = "login.html"
        } , 2000)
    }
})

