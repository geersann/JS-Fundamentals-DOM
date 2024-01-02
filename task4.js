// На сторінці є форма "Новий користувач"
// У форму вже введені дані користувача
// Потрібно отримати дані з усіх полів та повернути та подати у вигляді наступних змінних
// name, phoneNumber, dataOfBirth, emailAddress

const formElement = document.querySelector('.array fieldset');
const submitButton = formElement.querySelector('input[type="submit"]');
const outDiv = document.querySelector('.array .out');

submitButton.addEventListener('click', function(event) {
    
    event.preventDefault();

    const name = formElement.querySelector('input[name="fio"]').value;
    const phoneNumber = formElement.querySelector('input[name="phone"]').value;
    const dataOfBirth = formElement.querySelector('input[name="birthday"]').value;
    const emailAddress = formElement.querySelector('input[name="email"]').value;

    const items = {
        name: name,
        phone: phoneNumber,
        birth: dataOfBirth,
        email: emailAddress,
    };

    outDiv.innerHTML += `
        <p>Name: ${name}</p>
        <p>Phone Number: ${phoneNumber}</p>
        <p>Date of Birth: ${dataOfBirth}</p>
        <p>Email Address: ${emailAddress}</p>
    `;
});


module.exports = {
    name,
    phoneNumber,
    dataOfBirth,
    emailAddress
};