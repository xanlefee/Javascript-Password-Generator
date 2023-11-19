# Javascript-Password-Generator
#A responsive password generator 


In this project, I created the code for functions which ask for user input before generating a unique password based on the user preferences. In this task, I had to declare variables in global and local scope, nest while loops and for loops in functions, and connect the generated password to the event listener. 

I enjoyed creating conditional statements which run the code while user input is valid, and reset the code when errors are made. 

A stand-out feature is the password generator, which randomly selects elements from various arrays which correspond to user choices, pushing them into a seperate array. 

One challenge was in working out global and local scope, though I found that once I declared certain variables globally, I could get references to the values I needed to generate the password.

I had to alter the starter code writepassword() function to get a reference specifically to my password array and not just the whole generatepassword() function, that I chose to call seperately. 

Lastly, I wanted the page to load before the confirm and prompt boxes appeared, so I added 'async' to the script reference in index.html.




DEPLOY LINK
https://xanlefee.github.io/Javascript-Password-Generator



<img src="images/Password Generator - Google Chrome.png" width="800" />



## Installation

load the deployed application in google chrome.


## Usage 

Once loaded in google chrome,  answer the prompts and generate a password by clicking on the button in the browser. 


## Credits

Starter content provided by Edex.


## License
MIT License

Copyright (c) 2023 Xanthe E. Horner

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
