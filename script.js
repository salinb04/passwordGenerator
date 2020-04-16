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

  //for (var i = 0, n = characterLength.length; i < length i++) {
  //  retval += lowerCharSet.charAt(Math.floor(Math.random() * n));
  //}
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
