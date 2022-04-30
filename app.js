// Assignment Code
const specialChars = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '{', '[', '}', ']', '|', ':', ';', '<', '>', '?', '/']
const nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
const uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

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

    let newArray = []
    let charSpecial
    let randoSpecial = ''
    let chooseSpecial = () => {
        let charSpecial = window.confirm('Do you want to include special characters?')
        if ( charSpecial) {
            for(let i = 0; i < specialChars.length; i++) {
                let optOne = newArray.push( specialChars[i] )  
            }
        } 
    }
    chooseSpecial()

    let charNums
    let randoNums = ''
    let chooseNums = () => {
        let charNums = window.confirm('Do you want to include numbers?')
        if ( charNums ) {
            for (let i = 0; i < nums.length; i++) {
                let optTwo = newArray.push( nums[i] )
            }
        }
    }
    chooseNums()

    let charLower
    let randoLower = ''
    let chooseLower = () => {
        let charLower = window.confirm('Do you want to include lower case letters?')
        if ( charLower ) {
            for (let i = 0; i < lowercase.length; i++) {
                let optThree = newArray.push( lowercase[i] )
            }
        } 
    }
    chooseLower()

    let charUpper
    let randoUpper = ''
    let chooseUpper = () => {
        let charUpper = window.confirm('Do you want to include upper case letters?')
        if ( charUpper ) {
            for (let i = 0; i < uppercase.length; i++) {
                let optFour = newArray.push( uppercase[i] )
            }
        } 
    }
    chooseUpper()
    
    //if yes, create a pool of possible characters - do you want special characters? add to array. do you want lower case? add to array
    //when done, get random from array pool 
    // += means add it and redefine 

     for (let i = 0; i < passLength; i++) {
            let x = Math.random() * passLength //any number from 0 to passLength
            let y = Math.floor(x) //rounds down into a whole number
            myPass += newArray[Math.floor(Math.random() * newArray.length)]
        }

    return myPass
}

// Write password to the #password input
function writePassword() {
  let batman = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = batman; // .value returns the last output of generatePassword function (property of HTML text area element)
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
