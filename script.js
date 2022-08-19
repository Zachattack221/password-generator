// Assignment Code
var generateBtn = document.querySelector("#generate");

// Setting variables that correspond to the possible inputs for each character type: uppercase, lowercase, bumeric, or special
function generatePassword() {
  var upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var numOptions = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  // Added in escape key for characters that cause errors in string display, removed ! and single space from special character options to minimize errors
  var specialChar = ['@', '"', '/', '[', ']', '{', '}', '|', '#', '$', '%', '^', '&', '*', '_', '~', '-', '?', '<', '>'];
  var possibleCharacters = [];

  // trying to add a feature that converts the string response of a prompt into an actual number between specified range

  var passwordCharCount = Number(prompt("How many characters would you like your password to be?"));
  if (passwordCharCount < 8 || passwordCharCount > 128 || passwordCharCount === NaN) {
    alert('Password must have at least 8 characters, and no more than 128');
    return '';
  }

  // attempts at making confirm prompts to define the possible characters to be used in password generation
  // connecting if statements tied to the confirm value of each prompt, if true section runs, if false next section will attempt

  var containsUpper = confirm("Do you want your password to include Uppercase letters?");
  if (containsUpper === true) {
    possibleCharacters.push(upperLetters);
  }

  var containsLower = confirm("Do you want your password to include Lowercase letters?");
  if (containsLower === true) {
    possibleCharacters.push(lowerLetters);
  }

  var containsNumbers = confirm("Do you want your password to include numbers?");
  if (containsNumbers === true) {
    possibleCharacters.push(numOptions);
  }


  var containsSpecial = confirm("Do you want your password to include special characters?");
  if (containsSpecial === true) {
    possibleCharacters.push(specialChar);
  }
  
  // if statement added to account for user not selecting at least one character type for password
  if (!containsUpper && !containsLower && !containsNumbers && !containsSpecial) {
    alert('You must select at least one character type for your password: Uppercase numbers, Lowercase numbers, Numbers, and/or special characters');
    return '';
  }

}

for (var i = 0; i < passwordCharCount; i++) { 
Math.floor(math.random) * passwordCharCount

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
