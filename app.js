// Assignment Code
let generateBtn = document.querySelector("#generate");
let generatePassword = () => {
    let myPass = ''
    let passLength //initialized as an empty variable
    let getpassLength = () => {
        passLength = parseInt(window.prompt('How many characters in your password would you like?', 'Enter a number between 8-100'))
        if (passLength<= 7 || passLength > 100 || isNaN(passLength)) {
            window.alert('Invalid entry. Please enter a number between 8-100.')
            getpassLength()
        }
    }
    getpassLength()

    let charSpecial = window.confirm('Do you want to include special characters?')
    let charNums = window.confirm('Do you want to include numbers?')
    let charLower = window.confirm('Do you want to include lower case letters?')
    let charUpper = window.confirm('Do you want to include upper case letters?')
    
    
    
    
    
    
    
    return myPass
}

// Write password to the #password input
function writePassword() {
  let password = generatePassword();
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// prompt how many characters in password would you like?
// do you want to include special characters? 
//do you want to include lower case letters 
//do you want to include upper case letters
//do you want to include numbers 
//password must be between 8-100 characters
//MUST include every category that the user selects
