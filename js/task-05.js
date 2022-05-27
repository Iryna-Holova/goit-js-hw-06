const nameInputEl = document.querySelector('#name-input');
const nameOutputEl = document.querySelector('#name-output');

const changeOutput = (event) => {
    (event.currentTarget.value)
        ? nameOutputEl.textContent = event.currentTarget.value
        : nameOutputEl.textContent = 'Anonymous';
}

nameInputEl.addEventListener('input', (changeOutput));