const form = document.querySelector('#MyForm');
const FirstName = document.querySelector('#FirstName');
const LastName = document.querySelector('#LastName');
const Email = document.querySelector('#Email');
const CheckBox = document.querySelector('#CheckBox');
const Small = document.querySelector('.small');

function Success(input) {
    const formControl = input.parentElement;
    formControl.className = 'formControl success';
}

function ShowError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'formControl error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

form.addEventListener('submit', function (e) {
    if (FirstName.value == "") {
        ShowError(FirstName, 'Pls Enter First Name');
        e.preventDefault();
    } else {
        Success(FirstName);
    }
    if (LastName.value == "") {
        ShowError(LastName, 'Pls Enter Last Name');
        e.preventDefault();
    } else {
        Success(LastName);
    }
    if (Email.value == "") {
        ShowError(Email, 'Pls Enter Your Email');
        e.preventDefault();
    } else {
        Success(Email);
    }
    if (CheckBox.checked == false) {
        Small.innerText = 'Check The box';
        e.preventDefault();
    }
});