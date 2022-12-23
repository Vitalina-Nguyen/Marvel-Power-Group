const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
const nameError = document.querySelector('.error.name'),
    companyError = document.querySelector('.error.company'),
    emailError = document.querySelector('.error.email'),
    nameInput = document.querySelector('#form-input-name'),
    companyInput = document.querySelector('#form-input-company'),
    emailInput = document.querySelector('#form-input-email')

    //Проверка правильности почты
    function isEmailValid(value) {
        return EMAIL_REGEXP.test(value);
    }

function sendFormError () {

    if (nameInput.value === '' || companyInput.value === '' ||
        emailInput.value === '' || !isEmailValid(emailInput.value) ) {

        if (nameInput.value === '') {
            nameError.classList.remove('none')
        } else nameError.classList.add('none')

        if (companyInput.value === '') {
            companyError.classList.remove('none')
        } else companyError.classList.add('none')

        if (emailInput.value === '') {
            emailError.innerHTML = 'Email field is required'
            emailError.classList.remove('none')
        } else emailError.classList.add('none')

        if (!isEmailValid(emailInput.value)) {
            emailError.innerHTML = 'The email address is incorrect'
            emailError.classList.remove('none')
        } else emailError.classList.add('none')
    }
    else {
        if (!(nameError.classList.contains('none') ||
              companyError.classList.contains('none') ||
              emailError.classList.contains('none')))
              {
                  nameError.classList.add('none')
                  companyError.classList.add('none')
                  emailError.classList.add('none')
              }

        console.log(`Name: ${nameInput.value} \nCompany: ${companyInput.value}
              \nEmail: ${emailInput}`)
        nameInput.value === ''
        companyInput.value === ''
        emailInput.value === ''
    }
}
