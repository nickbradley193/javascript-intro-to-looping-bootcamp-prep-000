function forLoop(array) {
  var stringToAdd;
  for (i = 0; i < 25; i++) {
    if (i === 1) {
      stringToAdd = 'I am 1 strange loop.';
    } else {
      stringToAdd = `I am ${i} strange loops.`;
    }
    array.push(stringToAdd);
  }
}

