// Assignment Code
var generateBtn = document.querySelector("#generate");

// Setting variables that correspond to the possible inputs for each character type: uppercase, lowercase, bumeric, or special

var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
var numOptions = "0123456789";
var specialChar = "\"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~";


 return;
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
