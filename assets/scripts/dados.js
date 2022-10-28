
var usernameValid = document.getElementById('username').value;

function validar() {
    if (usernameValid != '') {
        document.getElementById('button').style.display = 'block'
    } else {
        alert('insira um username')
    }
}


