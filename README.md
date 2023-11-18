# Javascript-Password-Generator
A responsive password generator 


// 

function generatePassword(length) {


    //characters that can be used

    var chars = getPasswordoptions.characterz ()


    let rando =  chars(divided by random number)

let opensesasame= ""; 




// Loop through the length of the password
    for (let i = 0; i < length; i++)
    {
        // Generate a random index from 0 to chars.length - 1
        let index = Math.floor(Math.random() * chars.length);
 
        // Append the character at that index to the password
        password += chars[index];
    }
 
    // Return the password
    return password;



}