var generateBtn = document.querySelector("#generate");

// Setting variables that correspond to the possible inputs for each character type: uppercase, lowercase, numeric, or special
function generatePassword() {
  var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerLetters = "abcdefghijklmnopqrstuvwxy";
  var numOptions = "0123456789";

  // Added in escape key for characters that cause errors in string display, removed ! and single space from special character options to minimize errors
  var specialChar = "\"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~";
  var possibleCharacters = "";
  var finalPassword = [];

  // Feature that converts the string response of a prompt into an actual number between specified range
  var passwordCharCount = Number(prompt("How many characters would you like your password to be?"));
  if (passwordCharCount < 8 || passwordCharCount > 128 || passwordCharCount === NaN) {
    alert('Password must have at least 8 characters, and no more than 128');
    return '';
  }

  // Confirm prompts to define the possible characters to be used in password generation
  // Connecting if statements tied to the confirm value of each prompt, if true section runs, if false next section will attempt
  var containsUpper = confirm("Do you want your password to include Uppercase letters?");
  if (containsUpper === true) {
    possibleCharacters = upperLetters;
  }

  var containsLower = confirm("Do you want your password to include Lowercase letters?");
  if (containsLower === true) {
    possibleCharacters = possibleCharacters + lowerLetters;
  }

  var containsNumbers = confirm("Do you want your password to include numbers?");
  if (containsNumbers === true) {
    possibleCharacters = possibleCharacters + numOptions;
  }

  var containsSpecial = confirm("Do you want your password to include special characters?");
  if (containsSpecial === true) {
    possibleCharacters = possibleCharacters + specialChar;
  }

  // if statement added to account for user not selecting at least one character type for password
  if (!containsUpper && !containsLower && !containsNumbers && !containsSpecial) {
    alert('You must select at least one character type for your password: Uppercase numbers, Lowercase numbers, Numbers, and/or special characters');
    return '';
  }

  for (var i = 0; i < passwordCharCount; i++) {
    var randomIndex = Math.floor(Math.random() * possibleCharacters.length);
    var char = possibleCharacters.charAt(randomIndex);
    finalPassword.push(char);
  }
  return finalPassword.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);