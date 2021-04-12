const isDogBetter = true;
const isCatBetter = false;
console.log(isDogBetter && isCatBetter);
console.log(isDogBetter || isCatBetter);
console.log(isDogBetter && isCatBetter);
console.log(!(isDogBetter && isCatBetter));

const atoms = 237;
const sandGrains = 400;
const starsInSky = 500;
console.log(atoms < starsInSky && atoms < sandGrains);
console.log(atoms !== sandGrains);
console.log(starsInSky > sandGrains || starsInSky < atoms);
console.log(atoms >= 10 && sandGrains <= 10);
console.log(atoms * starsInSky > 10 || atoms * sandGrains < 100);
