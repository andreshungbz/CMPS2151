const inputField = document.querySelector('#value1');
const errorOutput = document.querySelector('#errorOutput');

function alphanumeric(inputText) {
  const regex = /^[0-9a-zA-Z]+$/;

  if (regex.test(inputText)) {
    alert('Your registration number has accepted: you can try another.');
    inputField.focus();
    return true;
  } else {
    alert('Please input alphanumeric characters only.');
    return false;
  }
}

const submitButton = document.querySelector('input[type="submit"]');
submitButton.addEventListener('click', (e) => {
  if (!alphanumeric(inputField.value)) {
    e.preventDefault();
    errorOutput.textContent = 'Please input alphanumeric characters only.';
  } else {
    errorOutput.textContent = '';
  }
});
