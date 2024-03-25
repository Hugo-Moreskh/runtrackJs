function tri(numbers, order) {
  if (order === "asc") {
    numbers.sort(function (a, b) {
      return a - b;
    });
  } else if (order === "desc") {
    numbers.sort(function (a, b) {
      return b - a;
    });
  }
  return numbers;
}

let nombres = [4, 2, 8, 1, 6, 3];
let ordreAscendant = tri(nombres.slice(), "asc");
let ordreDecroissant = tri(nombres.slice(), "desc");

console.log("Tableau trié en ordre ascendant:", ordreAscendant);
console.log("Tableau trié en ordre décroissant:", ordreDecroissant);
