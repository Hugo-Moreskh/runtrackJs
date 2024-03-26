function addOne() {
  var valeurActuel = parseInt(compteur.textContent);
  var nouvelleValeur = valeurActuel + 1;
  compteur.textContent = nouvelleValeur;
}
var button = document.getElementById("button");
var compteur = document.getElementById("compteur");
button.addEventListener("click", function () {
  addOne();
});
