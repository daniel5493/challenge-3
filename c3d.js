// Assignment code here


// Get references to the #generate element
let generateBtn = document.getElementById("generate");

// Write password to the #password input
function writePassword() {
  let generate =' ';
  let passwordbank = 'ABCDEFGHIJKLMNOPQRSTWXYZ'+'abcdefghijklmnopqrstwxyz'+'0123456789@#$';
  let passwordText = document.getElementById("password");
generate
// THEN I am presented with a series of prompts for password criteria

// prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
let passwordline = window.prompt("please write between 8 to 128 charaters")
console.log(passwordline)
if (passwordline < 8 || passwordline >128) {
  alert('you are wrong')
  writePassword()
  // passwordline = window.prompt("invalid password please write between 8 to 128 charaters")
  console.log(passwordline)
}
// I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

// my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria



// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page



  //   let gen =math.floor(math.random()
  //    for (let x = 0; x <=6; x++) {
  //   * generatePassword.length + 1);
  //    generate += password.generatePassword.gen
  // }

   passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
