const form = document.forms[0];
const submitBtn = document.querySelector('button');
const nameError = document.querySelector('.error-name');
const surnameError = document.querySelector('.error-surname');
const robotText = document.querySelector('.robot-text');
const robotError = document.querySelector('.error-robot');
const phoneError = document.querySelector('.error-phone');
const emailError = document.querySelector('.error-email');
const phoneInput = document.querySelector('.user-phone');



const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const letters = ["A", "a", "B", "b", "C", "c", "D", "d", "E", "e", "F", "f", "J", "j"];

function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

const arr = [];
const arr1 = [];
let order = null;

const patterns = {
    phone: /^\+380\d{2}\s\d{3}\s\d{2}\s\d{2}$/,
    name: /^([A-Z]|[А-Я])/,
    email: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{4,}@[a-z]{2,}\.(com|ua|dp|uk)$/
}
const tel = patterns.email.test("Nick1982@ii.ua")
console.log(tel)





for (let i = 0; i < 5; i += 1){
    let letter = randomInteger(0, letters.length-1);

    arr.push(letters[letter])
}


robotText.textContent = arr.join('');


form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', onFormInputChange);



function onFormInputChange(evt){
        const form = evt.currentTarget;
    const formElements = evt.currentTarget.elements;
    if (formElements.name.value.length === 0) {
        nameError.style.display = "none";
    }
    if (
        // formElements.name.value.length >= 2 && formElements.name.value[0] === formElements.name.value[0].toUpperCase()
                formElements.name.value.length >= 2 && patterns.name.test(formElements.name.value)
    ) {
 
        nameError.style.display = "none";
    } 
      if ((formElements.name.value.length < 2 && formElements.name.value.length > 0) ?? formElements.name.value[0] !== formElements.name.value[0].toUpperCase()) {
 
          nameError.style.display = "block";
    } 


     if (formElements.surname.value.length === 0) {
        surnameError.style.display = "none";
    }
    if (formElements.surname.value.length >= 2 && patterns.name.test(formElements.surname.value)
    ) {

        surnameError.style.display = "none";
    } 
      if ((formElements.surname.value.length < 2 && formElements.surname.value.length > 0) ?? formElements.surname.value[0] !== formElements.surname.value[0].toUpperCase()) {
   
          surnameError.style.display = "block";
    } 
    if (formElements.robot.value.length === 0) {
             robotError.style.display = "none" 
    }

        if (formElements.robot.value !== robotText.textContent && formElements.robot.value.length !== 0) {
        robotError.style.display = "block"
        }
    
         if (formElements.robot.value === robotText.textContent) {
        robotError.style.display = "none"
         }
    
    
    if (formElements.phone.value.length === 0) {
        phoneError.style.display = "none";
    }
    
    if (!patterns.phone.test(formElements.phone.value) && formElements.phone.value.length !== 0) {
        phoneError.style.display = "block"
    }

    if (patterns.phone.test(formElements.phone.value)) {
        phoneError.style.display = "none"

    }

     if (formElements.email.value.length === 0) {
        emailError.style.display = "none";
    }
    
    if (!patterns.email.test(formElements.email.value) && formElements.email.value.length !== 0) {
        emailError.style.display = "block"
    }

    if (patterns.email.test(formElements.email.value)) {
        emailError.style.display = "none"
  
    }
    
    
    if (formElements.name.value.length >= 2 && formElements.name.value[0] === formElements.name.value[0].toUpperCase()
        && formElements.surname.value.length >= 2 && formElements.surname.value[0] === formElements.surname.value[0].toUpperCase()
        && formElements.robot.value === robotText.textContent
        && patterns.phone.test(formElements.phone.value)
        && patterns.email.test(formElements.email.value)
    ) {
       submitBtn.classList.remove('disabled');
    }
    if (((formElements.name.value.length < 2 && formElements.name.value.length > 0) ?? formElements.name.value[0] !== formElements.name.value[0].toUpperCase())
        || ((formElements.surname.value.length < 2 && formElements.surname.value.length > 0) ?? formElements.surname.value[0] !== formElements.surname.value[0].toUpperCase())
        || formElements.robot.value !== robotText.textContent
        || !patterns.email.test(formElements.email.value)
    ) {
        submitBtn.classList.add('disabled');
    }



}

function onFormSubmit(evt) {
    evt.preventDefault();
    const form = evt.currentTarget;
    const formElements = evt.currentTarget.elements;


for (let i = 0; i < 8; i += 1){
    let number = randomInteger(0, numbers.length-1);
    console.log(number)
    arr1.push(numbers[number])
}
    order = arr1.join('');
   
    const orderObj = {
        name: formElements.name.value,
        surname: formElements.surname.value,
        email: formElements.email.value,
        goods: formElements.goods.value,
        phone: formElements.phone.value,
        orderNumber: order
    };



    localStorage.setItem('order', JSON.stringify(orderObj))

    location.href = "./order.html";

}




