const form = document.getElementById('form-list');
const camp = document.querySelectorAll('.required');
const spanMensage = document.querySelectorAll('.spanRequired')
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

console.log(camp, spanMensage);
function setError (index) {
    camp[index].style.border = '1px solid #e63636';
    spanMensage[index].style.display = 'block';
}
function removeError (index) {
    camp[index].style.border = '';
    spanMensage[index].style.display = 'none';
}

function nameValidate() {
    if(camp[0].value.length < 3) {
        setError(0);
    }
    else {
        removeError(0);
    }
}

function emailValidate() {
    if(!emailRegex.test(camp[1].value)){
        setError(1);
    }
    else {
        removeError(1);
    }
}
function validatePassword () {
    if(camp[2].value.length < 8) {
        setError(2)
    }
    else {
        removeError(2);
        comparePassword()
    }
}
function comparePassword () {
    if(camp[2].value == camp[3].value && camp[3].value.length >= 8) {
        removeError(3);
    }
    else {
        setError(3);
    }
}

form.addEventListener('submit', (value) => {
    value.preventDefault();
    nameValidate();
    emailValidate();
    validatePassword();
    comparePassword();
});