let user = document.getElementById("username");
let pass = document.getElementById("password");
let btn2 = document.getElementById("sign-in");

let getUser = localStorage.getItem("username");
let getPass = localStorage.getItem("password");


btn2.addEventListener('click', function(e) {
    e.preventDefault();

    if(user.value === "" || pass.value === ""){
        alert("متملي البيانات يا ابني ")
        
    }else{
        if(getUser=== user.value.trim()  && getPass === pass.value.trim()){
            setTimeout ( () => {
                window.location = "index.html"
            } , 1000);

        }else{
            alert("worng password or username")
        }
    }
});