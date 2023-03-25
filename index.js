// index.js

//  import the crypto module

const arg = process.argv;
const crypto = require("crypto");

//  get a commands using process.argv
let num1= arg[3]
let num2 = arg[4]

// complete the  function
if(arg[2]=="add"){
  console.log("additon is",+num1 + +num2)
}
else if(arg[2]=="mult"){
  console.log("multiplication is",+num1 * +num2)
}
else if(arg[2]=="divide"){
  console.log("division is",+num1 / +num2)
}
else if(arg[2]=="sub"){
  console.log("substraction is",+num1 - +num2)
}
else if(arg[2]=="sin"){
  console.log("sin value is",Math.sin(+num1))
}
else if(arg[2]=="cos"){
  console.log("cos value is",Math.cos(+num1))
}
else if(arg[2]=="tan"){
  console.log("tan value is",Math.tan(+num1))
}
else if(arg[2]=="random"){
  console.log("random number between(30-50)",crypto.randomInt(30, 50));
}


// switch (operation) {
  
//   default:
//     console.log("Invalid operation");
// }
