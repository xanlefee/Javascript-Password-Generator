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

   
    let userconfirm;
  
   


    let quezzies = confirm("Do you want to generate a password right now?");





    while (quezzies === true) {

        for (let i = 0; i < 1; i++) {

            let digitz = prompt("How many characters do you want?");
           




            if (digitz < 8 || digitz > 128 || digitz === NaN) {

                alert("Soz, the number must be between 8-128!");
                quezzies === true;
               

            }

            else {

                
                quezzies === false;


                userconfirm = confirm("You want " + digitz + " characters, confirm?");

                while (userconfirm === true) {

                    for (let i = 0; i < 5; i++) {

                        let case_lower = confirm("Do you want lower case?");
                        let case_upp = confirm("Do you want upper case?");
                        let numba = confirm("Do you want numbers?");
                        let speshal = confirm("Do you want special characters?");

                        if (case_lower == false && case_upp == false && numba == false && speshal == false) {
                            alert("Sorry, you must say Yes (Y) to something...");
                        }

                        else {

                            alert("Let us proceed!");

                            







                            userconfirm = false;
                            return userconfirm;
                            
                        }


                    }


                }

var characterz = digitz;
                return quezzies;
                






            }



        }




    }





}





getPasswordOptions();





// Function for getting a random element from an array
function getRandom(arr) {


return arr[Math.floor(Math.random() * arr.length)]

    //if (getPasswordOptions.case_lower == true) {

        
    }



// Function to generate password with user input
function generatePassword() {

    let pword = [""];
  

    if (getPasswordOptions.case_upp === true) {

        pword.push(getRandom(upperCasedCharacters));
    }

    if (getPasswordOptions.case_lower === true) {

        pword.push(getRandom(lowerCasedCharacters));
    }

    if (getPasswordOptions.speshal === true) {

        pword.push(getRandom(specialCharacters));
    }

    if (getPasswordOptions.numba === true) {

        pword.push(getRandom(numericCharacters));
    }


  //  pword.length = getPasswordOptions.characterz;

   // getRandom(specialCharacters);
 //   getRandom(upperCasedCharacters);
  //  getRandom(lowerCasedCharacters);
  //  getRandom(numericCharacters);

}

console.log(generatePassword.pword);

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