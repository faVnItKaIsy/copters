let isname = document.querySelector("#name");
let surname = document.querySelector("#surname");
let patronymic = document.querySelector("#patronymic");
let passportSeries = document.querySelector("#passportSeries");
let passportNumber = document.querySelector("#passportNumber");
let dateB = document.querySelector("#dateB");

let phone = document.querySelector("#phoneInput");

let password = document.querySelector("#pass");
let passwordRepete = document.querySelector("#passR");


let pName1 = document.querySelector("#pName1");
let pName2 = document.querySelector("#pName2");

let pSurname1 = document.querySelector("#pSurname1");
let pSurname2 = document.querySelector("#pSurname2");

let pPatronymic = document.querySelector("#pPatronymic");

let pPassport1 = document.querySelector("#pPassport1");
let pPassport2 = document.querySelector("#pPassport2");



let pPhone1 = document.querySelector("#pPhone1");
let pPhone2 = document.querySelector("#pPhone2");

let pDateB1 = document.querySelector("#pDateB1");
let pDateB2= document.querySelector("#pDateB2");


let pPassword1 = document.querySelector("#pPassword1");
let spanPassword2 = document.querySelector("#spanPassword2");

let pPasswordRepete1 = document.querySelector("#pPasswordRepete1");
let pPasswordRepete2 = document.querySelector("#pPasswordRepete2");



const submitReg = document.querySelector('.sub'); 
submitReg.addEventListener('click', function (event) {



/*поле имя*/
if(isname.value == ""){
   pName1.style.display = 'block';
   isname.style.border = '2px solid rgb(255, 0, 0)';
  } else if(!/([А-Яа-яЁё]{2,})/.test(isname.value)){ 
    pName1.style.display = 'none';
    pName2.style.display = 'block';
    isname.style.border = '2px solid rgb(255, 0, 0)';
  } else {
    isname.style.border = '2px solid #20a314';
    pName1.style.display = 'none';
    pName2.style.display = 'none';
  } 

  /*поле фамилия*/
  if(surname.value == ""){
    pSurname1.style.display = 'block';
    surname.style.border = '2px solid rgb(255, 0, 0)';
  } else if(!/[А-Яа-яЁё]+(-[а-яёА-ЯЁ]+)?$/.test(surname.value)){
    surname.style.border = '2px solid rgb(255, 0, 0)';
    pSurname1.style.display = 'none';
    pSurname2.style.display = 'block';
  } else {
    surname.style.border = '2px solid #20a314';
    pSurname1.style.display = 'none';
    pSurname2.style.display = 'none';
  } 

  /*поле отчество*/
  if(patronymic.value != "" && !/[А-Яа-яЁё]/.test(patronymic.value)){
    patronymic.style.border = '2px solid rgb(255, 0, 0)';
    pPatronymic.style.display = 'block';
  } else {
    patronymic.style.border = '2px solid #20a314'; 
    pPatronymic.style.display = 'none';
  }

  /*поле серия паспорта*/
  if(passportSeries.value == ""){
    pPassport1.style.display = 'block';
    passportSeries.style.border = '2px solid rgb(255, 0, 0)';
  } else if(/d[0-9]{4}/.test(passportSeries.value)){
    passportSeries.style.border = '2px solid rgb(255, 0, 0)';
    pPassport1.style.display = 'none';
    pPassport2.style.display = 'block';
  } else {
    passportSeries.style.border = '2px solid #20a314';
    pPassport1.style.display = 'none';
    pPassport2.style.display = 'none';
  } 
/*поле номер паспорта*/
  if(passportNumber.value == ""){
    pPassport1.style.display = 'block';
    passportNumber.style.border = '2px solid rgb(255, 0, 0)';
  } else if(/[0-9]{6}/.test(passportNumber.value)){
    passportNumber.style.border = '2px solid rgb(255, 0, 0)';
    pPassport1.style.display = 'none';
    pPassport2.style.display = 'block';
  } else {
    passportNumber.style.border = '2px solid #20a314';
    pPassport1.style.display = 'none';
    pPassport2.style.display = 'none';
  } 

/*поле дата рождения*/ 
  if(dateB.value == ""){
    pDateB1.style.display = 'block';
    dateB.style.border = '2px solid rgb(255, 0, 0)';
  } else if(/([0-9]{8})$/.test(dateB.value)){
    dateB.style.border = '2px solid rgb(255, 0, 0)';
    pDateB1.style.display = 'none';
    pDateB2.style.display = 'block';
  } else {
    dateB.style.border = '2px solid #20a314';
    pDateB1.style.display = 'none';
    pDateB2.style.display = 'none';
  } 



/*поле телефон*/
  if(phone.value == ""){
    pPhone1.style.display = 'block';
    phone.style.border = '2px solid red';
  } else if(!/[0-9]{11}$/.test(phone.value)){
    phone.style.border = '2px solid rgb(255, 0, 0)'
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
  } else if(!/(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{6,}$/.test(password.value)){
    password.style.border = '2px solid rgb(255, 0, 0)';
    pPassword1.style.display = 'none';
    spanPassword2.style.display = 'block';
  } else {
    password.style.border = '2px solid #20a314';
    pPassword1.style.display = 'none';
    spanPassword2.style.display = 'none';
  } 

  /*поле повтор пароля*/
  if(password.value == ""){
    pPasswordRepete1.style.display = 'block';
    passwordRepete.style.border = '2px solid rgb(255, 0, 0)';
  } else if(password.value != passwordRepete.value){
    passwordRepete.style.border = '2px solid rgb(255, 0, 0)';
    pPasswordRepete1.style.display = 'none';
    pPasswordRepete2.style.display = 'block';
  } else {
    passwordRepete.style.border = '2px solid #20a314';
    pPasswordRepete1.style.display = 'none';
    pPasswordRepete2.style.display = 'none';
  } 
});



let showPassword = document.querySelectorAll('.showPassword');
showPassword.forEach(item =>
    item.addEventListener('click', toggleType)
); 
function toggleType() {     
    let input = this.closest('.inputs').querySelector('#pass');;
if (input.type === 'password') {
    input.type = 'text';
} else {
    input.type = 'password';
}
}