function forLoop(array) {
  var stringToAdd;
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      stringToAdd = 'I am 1 strange loop.';
    } else {
      stringToAdd = `I am ${i} strange loops.`;
    }
    array.push(stringToAdd);
  }
}

function whileLoop(number) {
  while (number >= 0) {
    console.log(number--);
  }
  return 'done';
}

function maybeTrue() {
  return Math.random() >= 0.5;
}

function doWhileLoop(array) {
  do {
    array.pop();
  } while (array.length > 0 && maybeTrue());
  return array;
}