/*
Script Files for ALL EXERCISES
comment out exercises as they are completed, label them accordingly
*/

//*******************************Exercise 3.1 - index1.html***************************
function ProcessData(fname, email, gend, live, stat) {
  // name
  const fullName = document.forms[0][fname].value;
  const firstName = fullName.split(' ')[0];
  const lastName = fullName.slice(fullName.indexOf(' ') + 1);

  // email
  const chosenEmail = document.forms[0][email].value;

  // gender
  const genderRadioGroup = document.getElementsByName(gend);
  let chosenGender;
  for (const radio of genderRadioGroup) {
    if (radio.checked) {
      chosenGender = radio.value;
    }
  }

  // address
  const address = document.forms[0][live].value;

  // status
  const status = document.forms[0][stat].value;

  alert(
    `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${chosenEmail}\nGender: ${chosenGender}\nAddress: ${address}\nStatus: ${status}`
  );
}

//*******************************Exercise 3.2 - index2.html***************************
