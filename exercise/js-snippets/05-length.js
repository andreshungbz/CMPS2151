const max = 140;

let text = prompt('Enter your post');

let length = text.length;
alert(
  `You have written ${length} characters, you have ${
    max - length
  } characters left.`
);
