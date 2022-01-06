let username = document.getElementById('username')
let password = document.getElementById('paswd')
let wrongUser = document.getElementById('wrongUser')
let wrongPwd = document.getElementById('wrongPwd')

const btn = document.getElementById('login')
const user = "Abhishek"
const pass = "108avp"
const address = "123 Delhi"
const mobile = "987654321"



btn.addEventListener('click', (e) => {
    usernameCheck()
    passwordCheck()
    if (username.value === user && password.value === pass) {
        sessionStorage.setItem('name', user);
        sessionStorage.setItem('LoggedIn', true);
        sessionStorage.setItem('address', address);
        sessionStorage.setItem('contact', mobile);
        location.href = "./first.html"
    }
})

function usernameCheck() {
    if (username.value === user) {
        wrongUser.innerHTML = '';
    } else
        if (username.value != "") {
            wrongUser.innerHTML = 'Wrong Username';
        }
        else {
            wrongUser.innerHTML = 'Enter Username';
        }
}
function passwordCheck() {
    if (password.value === pass) {
        wrongPwd.innerHTML = '';
    } else
        if (password.value != "") {
            wrongPwd.innerHTML = 'Wrong Password';
        }
        else {
            wrongPwd.innerHTML = 'Enter Password';
        }
}
