function sommeNombresPremiers(nombre) {
  if (nombre <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(nombre); i++) {
    if (nombre % i === 0) {
      return false;
    }
  }
  return true;
}
let variable1 = 17;
let variable2 = 1;

if (sommeNombresPremiers(variable1)) {
  console.log("La variable1 est un nombre premier.");
} else {
  console.log("La variable1 n'est pas un nombre premier.");
}

if (sommeNombresPremiers(variable2)) {
  console.log("La variable2 est un nombre premier.");
} else {
  console.log("La variable2 n'est pas un nombre premier.");
}
