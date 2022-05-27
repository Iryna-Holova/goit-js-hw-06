const validationInputEl = document.querySelector('#validation-input');
const lengthOfInput = Number(validationInputEl.getAttribute('data-length'));

const onInputBlur = (event) => {
    if (event.currentTarget.value.length === lengthOfInput) {
        validationInputEl.classList.remove('invalid'),
        validationInputEl.classList.add('valid')
    } else 
        validationInputEl.classList.remove('valid'),
        validationInputEl.classList.add('invalid')
}

validationInputEl.addEventListener('blur', onInputBlur)
