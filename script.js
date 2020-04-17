// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  var characterLength = 0;
  while (
    characterLength < 8 ||
    characterLength > 128 ||
    isNaN(characterLength)
  ) {
    characterLength = parseInt(
      prompt("How many characters would you like your password to be?")
    );
  }

  var lowerCase = confirm(
    "Would you like your password to contain lowercase characters?"
  );

  var upperCase = confirm(
    "Would you like your password to contain uppercase characters?"
  );

  var numeric = confirm(
    "Would you like your password to contain numeric characters?"
  );

  var special = confirm(
    "Would you like your password to contain special characters?"
  );

  var lowerCharSet = "abcdefghijklmnopqrstuvwxyz";
  var upperCharSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numericCharSet = "1234567890";
  var specialCharSet = "!@#$%^&*()-_`~<>.,/|";

  var optionsArray = [];

  if (lowerCase === true) {
    optionsArray.push(lowerCharSet);
  }

  if (upperCase) {
    optionsArray.push(upperCharSet);
  }

  if (numeric) {
    optionsArray.push(numericCharSet);
  }

  if (special) {
    optionsArray.push(specialCharSet);
  }

  if (!lowerCase && !upperCase && !numeric && !special) {
    alert("You must select at least one character set!");
    return;
  }

  var password = [];
  var optionsIndex = 0;

  for (let i = 0; i < characterLength; i++) {
    if (optionsIndex > optionsArray.length - 1) {
      optionsIndex = 0;
    }
    var currentOption = optionsArray[optionsIndex];

    password.push(randomCharacter(currentOption));
    optionsIndex = optionsIndex + 1;
  }
  return password.join("");
}

function randomCharacter(characterString) {
  var randomIndex = Math.floor(Math.random() * characterString.length);
  var randomCharacter = characterString[randomIndex];
  return randomCharacter;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
