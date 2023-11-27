let resultInput = document.getElementById('result');



// Function to append a character to the display
function appendCharacter(character) {
  resultInput.value += character;
}

// Function to clear the display
function clearDisplay() {
  resultInput.value = '';
}

// Function to delete the last character from the display
function deleteCharacter() {
  resultInput.value = resultInput.value.slice(0, -1);
}

// Function to calculate the result
function calculateResult() {
  try {
    const expression = resultInput.value;
    const result = eval(expression);

    if (isNaN(result) || !isFinite(result)) {
      resultInput.value = 'Error';
    } else {
      resultInput.value = result;
    }
  } catch (error) {
    resultInput.value = 'Error';
  }
}

