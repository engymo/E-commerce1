let links = document.getElementById('link');
let userInfo = document.getElementById('user_info');
let users = document.getElementById('users');

if (localStorage.getItem('username')) {
    links.remove();
    userInfo.style.display = "block";
    users.innerHTML = localStorage.getItem("username");
}
