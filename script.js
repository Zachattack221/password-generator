Assignment Code
var generateBtn = document.querySelector("#generate");

// Setting variables that correspond to the possible inputs for each character type: uppercase, lowercase, bumeric, or special
function generatePassword() {
  var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
  var numOptions = "0123456789";
  // Added in escape key for characters that cause errors in string display, removed ! and single space from special character options to minimize errors
  var specialChar = "\"#$%&\'()*+,-./:;<=>?@[\]^_`{|}~";

  // trying to add a feature that converts the string response of a prompt into an actual number between specified range

  var passwordCharCount = Number(prompt("How many characters would you like your password to be?"));
  if (passwordCharCount > 8 || passwordCharCount > 128 || passwordCharCount === NaN) {
    alert('Password must have at least 8 characters, and no more than 128');
  }
  else {
    alert("Click 'ok' to continue");
  }

  // attempts at making confirm prompts to define the possible characters to be used in password generation
  // connecting if statements tied to the confirm value of each prompt, if true section runs, if false next section will attempt
  
  var containsUpper = confirm("Do you want your password to include Uppercase letters?");
  if (containsUpper === true) {
    for (var i = 0, i < passwordCharCount; i++) {
      var randomUpper = Math.floor(math.random() * passwordCharCount.length);
    }


    var containsLower = confirm("Do you want your password to include Lowercase letters?");
    if (containsLower === true) {
      for (var i = 0, i < passwordCharCount; i++) {
        var randomNum = Math.floor(math.random() * passwordCharCount.length);
      }
    }

    var containsNumbers = confirm("Do you want your password to include numbers?");
    if (containsNumbers === true) {
      for (var i = 0, i < passwordCharCount; i++) {
        var randomNum = Math.floor(math.random() * passwordCharCount.length);
      }
    }


    var containsSpecial = confirm("Do you want your password to include special characters?");
    if (containsSpecial === true) {
      for (var i = 0, i < passwordCharCount; i++) {
        var randomSpecial = Math.floor(math.random() * passwordCharCount.length);
      }

    }

    debugger;
    return '';
  }

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;


// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
