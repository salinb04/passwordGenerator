// Assignment Code
var generateBtn = document.querySelector("#generate");
function generatePassword() {
  var characterLength = prompt(
    "Choose a password length between 8 and 128 characters."
  );
  while (characterLength > 128 && characterLength < 8) {
    characterLength = prompt(
      "Please ensure your password is between 8 and 128 characters."
    );
  }

  var lowerCase = confirm(
    "Would you like your password to contain lowercase characters?"
  );
  if (lowerCase === true) {
  }

  var upperCase = confirm(
    "Would you like your password to contain uppercase characters?"
  );
  if (upperCase === true) {
  }

  var numeric = confirm(
    "Would you like your password to contain numeric characters?"
  );
  if (numeric === true) {
  }

  var special = confirm(
    "Would you like your password to contain special characters?"
  );
  if (special === true) {
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
