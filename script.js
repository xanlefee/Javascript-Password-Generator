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

// Function to prompt user for password options
function getPasswordOptions() {

    let quezzies = confirm("Do you want to generate a password right now?");
    let usernumber;

 
 

    while (quezzies) {

        for (let i = 0; i < 5; i++) {


            let digitz = prompt("How many characters do you want?");
            digitz = usernumber;

            // make conditionals for user number!
        
            let case_low = confirm("Do you want to use lower case characters? Y or N?");


            let case_upper = confirm("Do you want to use upper case characters? Y or N?");


            let numero = confirm("Do you want to use numbers? Y or N?");


            let spesh = confirm("Do you want to use special characters? Y or N?");

          
          


            if (case_low == false && case_upper == false && numero == false && spesh == false) {
                alert("Sorry, you must say Yes (Y) to something...");
            }

            
           

            

            else  {

                alert("Let us proceed!");
                quezzies = false; 
            }





          


         
    

        }




    }



}

getPasswordOptions();

//if getPasswordOptions.case_low == "Y" { 

   // return lowerCasedCharacters()


//}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector('#password');

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);