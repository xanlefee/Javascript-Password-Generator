// Array of special characters to be included in password
var specialCharacters = [
    '@',
    '%',
    '+',
    '\\',
    '/',
    "'",
    '!',
    '#',
    '$',
    '^',
    '?',
    ':',
    ',',
    ')',
    '(',
    '}',
    '{',
    ']',
    '[',
    '~',
    '-',
    '_',
    '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z'
];


// declaring variables in global scope  so I can call them in different functions

let case_lower;
let case_upp;
let numba;
let speshal;
let digitz;

// Function to prompt user for password options
function getPasswordOptions() {

    // starts off confirming user wants to generate a password
    let userconfirm;
    let quezzies = confirm("Do you want to generate a password?");

    //while they do want to generate a password, the questions will be asked...

    while (quezzies === true) {

        for (let i = 0; i < 1; i++) {

            digitz = prompt("How many characters do you want?");



            //this filters out invalid responses and resets the question

            if (digitz < 8 || digitz > 128 || isNaN(digitz)) {

                alert("Input must be a number between 8-128!");
                quezzies === true;

            }

            else {


                quezzies === false;


                userconfirm = confirm("Do you want " + digitz + "?");

                //this user confirmation starts another while loop asking what characters the user wants...

                while (userconfirm === true) {

                    for (let i = 0; i < 5; i++) {


                        case_lower = confirm("Do you want lower case?");



                        case_upp = confirm("Do you want upper case?");

                        numba = confirm("Do you want numbers?");

                        speshal = confirm("Do you want special characters?");
                        // if the user says no to all then it resets

                        if (case_lower == false && case_upp == false && numba == false && speshal == false) {
                            alert("Sorry, you must say Yes (Y) to something...");
                        }

                        else {

                            alert("Let us proceed!");




                            // then the loop ends once data is input


                            userconfirm = false;
                            return userconfirm;

                        }


                    }


                }


                return quezzies;



            }

        }


    }


}




//getPasswordOptions();


// Function for getting a random element from an array - will be used on all the arrays to generate password
function getRandom(arr) {


    return arr[Math.floor(Math.random() * arr.length)]




}
//declaring password array globally
let passWord = [""];


// Function to generate password with user input
function generatePassword() {

    // while loop ensures the password length matches the user input 


    while (passWord.length < digitz) {

        //then elements are added to the password array based on the user's criteria 
        if (case_upp === true) {

            passWord.push(getRandom(upperCasedCharacters));
        }

        if (case_lower === true) {

            passWord.push(getRandom(lowerCasedCharacters));
        }

        if (speshal === true) {

            passWord.push(getRandom(specialCharacters));
        }

        if (numba === true) {

            passWord.push(getRandom(numericCharacters));
        }

    }


}
//generatePassword();


// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {

    // here password is turned into a string and joined 

    var password = passWord.join("");
    var passwordText = document.querySelector('#password');

    passwordText.value = password;
}

// Add event listener to generate button
//generateBtn.addEventListener('click', writePassword);

generateBtn.addEventListener('click', event => {

    event.preventDefault();

    getPasswordOptions();
    generatePassword();
    writePassword()


});

