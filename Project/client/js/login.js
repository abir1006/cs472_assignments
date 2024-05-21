let loginBtn = document.getElementById("login-btn");
let userName = document.getElementById("user_name");
let userPassword = document.getElementById("user_password");

window.onload = function () {
    loginBtn.onclick = function (e) {
        e.preventDefault();

        userName.onkeypress = function () {
            userName.setAttribute("class", "form-control");
        }

        userPassword.onkeypress = function () {
            userPassword.setAttribute("class", "form-control");
        }

        if (!userName.value) {
            userName.setAttribute("class", "form-control field_error");
        }

        if (!userPassword.value) {
            userPassword.setAttribute("class", "form-control field_error");
        }

        if (!userName.value || !userPassword.value) {
            return false;
        }

        window.location.href = 'my-music.html';

    }
}