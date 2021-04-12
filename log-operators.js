const isDogBetter = true;
const isCatBetter = false;
console.log(isDogBetter && isCatBetter); // Prints 'false' because both variables are not the same
console.log(isDogBetter || isCatBetter); // JS calculates the variable on the right and returns 'true'
console.log(!(isDogBetter && isCatBetter)); // The NOT (!) negates the result of the variables in the inner brackets and returns true

const atoms = 237;
const sandGrains = 400;
const starsInSky = 500;
console.log(atoms > starsInSky && atoms > sandGrains); //
console.log(atoms !== sandGrains);
console.log(starsInSky < sandGrains || starsInSky > atoms);
console.log(atoms >= 10 && sandGrains <= 10);
console.log(atoms * starsInSky < 10 || atoms * sandGrains > 100);
