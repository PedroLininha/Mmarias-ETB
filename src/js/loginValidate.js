const form = document.getElementById('list-form');
const validate = document.querySelectorAll('.validate');
const spanError = document.querySelectorAll('.span-validate')
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

function setError(index) {
    validate[index].style.border = '1px solid #e63636'
    spanError[index].style.display = 'block';
}
function removeError(index) {
    validate[index].style.border = '';
    spanError[index].style.display = 'none';
}
function validateEmail() {
    if(!emailRegex.test(validate[0].value)) {
        setError(0);
    }else {
        removeError(0);
    }
}
function validatePassword() {
   if(validate[1].value.length < 8) {
        setError(1);
   } 
   else {
        removeError(1);
   }
}
form.addEventListener('submit', (value) => {
    value.preventDefault();
    validateEmail();
    validatePassword();
})
