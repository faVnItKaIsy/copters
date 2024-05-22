let phone = document.querySelector("#phoneInput");
let password = document.querySelector("#pass");
let pPassword1 = document.querySelector("#pPassword1");
let spanPassword2 = document.querySelector("#spanPassword2");


const submitReg = document.querySelector('.sub'); 
submitReg.addEventListener('click', function (event) { 


/*поле телефон*/
if(phone.value == ""){
    pPhone1.style.display = 'block';
    phone.style.border = '2px solid rgb(255, 0, 0)';
  } else if(!/[0-9]{11}/.test(phone.value)){
    phone.style.border = '2px solid rgb(255, 0, 0)';
    pPhone1.style.display = 'none';
    pPhone2.style.display = 'block';
  } else {
    phone.style.border = '2px solid #20a314';
    pPhone1.style.display = 'none';
    pPhone2.style.display = 'none';
  } 
  

/*поле пароль*/
  if(password.value == ""){
    pPassword1.style.display = 'block';
    password.style.border = '2px solid rgb(255, 0, 0)';
  } else if(!/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}/.test(password.value)){//если вписанное в поле не соответствует формату 
    password.style.border = '2px solid rgb(255, 0, 0)';
    pPassword1.style.display = 'none';
    spanPassword2.style.display = 'block';
  } else {
    password.style.border = '2px solid #20a314';
    pPassword1.style.display = 'none';
    spanPassword2.style.display = 'none';
  } 

});


let showPassword = document.querySelectorAll('.showPassword');
showPassword.forEach(item =>
    item.addEventListener('click', toggleType)
); 
function toggleType() {     
    let input = this.closest('.inputs').querySelector('#pass');
if (input.type = 'password') {
    input.type = 'text';
} else {
    input.type = 'password';
}
}