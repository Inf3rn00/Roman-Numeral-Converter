function romanToInt(romanNumeral) {
  const romanObj = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  let prevValue = 0;
  let charCount = {};

  for (let char of romanNumeral) {
    const currentValue = romanObj[char];

    if (charCount[char] === undefined) {
      charCount[char] = 1;
    } else if (charCount[char] < 3) {
      charCount[char]++;
    } else {
      // Invalid numeral because a character is repeated more than 3 times
      return " invalid because a character cannot be repeated more than 3 times";
    }

    if (currentValue > prevValue) {
      result += currentValue - 2 * prevValue;
    } else {
      result += currentValue;
    }

    prevValue = currentValue;
  }

  return result;
}

function convertToInt() {
  const formInput = document.getElementById("convert-input");
  const romanInput = document
    .getElementById("convert-input")
    .value.toUpperCase();
  const resultParagraph = document.querySelector(".ans");
  const errorMessage = document.querySelector("#error-text");

  // Basic validation for valid Roman numeral characters
  const validChars = "IVXLCDM";
  let isValid = true;

  // Check for empty input and display appropriate message
  if (romanInput === "") {
    errorMessage.textContent = "Please enter a Roman numeral.";
    resultParagraph.textContent = "";
    formInput.style.border = "solid 1px red";
    return;
  }

  for (let char of romanInput) {
    if (!validChars.includes(char)) {
      isValid = false;
      break;
    }
  }

  if (isValid) {
    const integerValue = romanToInt(romanInput);

    resultParagraph.textContent = `The integer value of "${romanInput.toUpperCase()}" is ${integerValue}`;
    errorMessage.textContent = "";
    formInput.style.border = ""; // Reset border style to normal
  } else {
    errorMessage.textContent =
      "Invalid Roman numeral. Please use only characters I, V, X, L, C, D, and M.";
    resultParagraph.textContent = "";
    formInput.style.border = "solid 1px red";
  }
}
