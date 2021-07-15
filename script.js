function generatePassword(){

}
//array
var generateBtn = document.querySelector("#generate");
var upperCases = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowerCases = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var Characters = ["!","@","#","$","%","&","+"]
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var string 
var password = generatePassword();
//generate Prompt
var passwordLength = prompt("how long would you like your password to be? The password must be between 8 to 128 characters long");

var upperCases = window.confirm("do you want to use upperCase?");
if (upperCases === true){
  console.log("true");
}
var lowerCases = window.confirm("do you want to use lowerCase?");
if (lowerCases === true){
 console.log("true");
}
 var Characters = window.confirm("do you want to use specialSymbols?");
  if (Characters === true){
    console.log("true");
 }
 var numbers = window.confirm("do you want to use numbers?");
 if (numbers === true){
   console.log("true");

   }


// Write password to the #password input
function writePassword() { 
  var password = generatePassword (upperCase, lowerCase,Characters,number);
  var passwordText = document.querySelector("#generate");
  passwordText.value = password;
}
console.log("password",password);
for(var i = 0;  i< passwordLength; i++) {
var randomNumbers = Math.floor(Math.random() * allowed.length);
password+= allowed[random];


}
// Add event listener to generate button
var generateBtn = document.querySelector("#generate");
var includeUpperCases = includeUpperCases
var includeLowerCases = includeLowerCases
var includeNumbers = includeNumbers
var includecharacters = includecharacters
var password = generatePassword(passwordLength, includeUpperCases, includeNumbers, includeCharacters, includeLowerCases);

generateBtn.addEventListener("click", writePassword);


