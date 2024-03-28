var JsonString =
  '{"name": "La Plateforme","adress": "8 rue d Hozier","city": "Marseille"}';
const key = "city";

function jsonValueKey(tableau, clé) {
  var tableau = JSON.parse(tableau);
  return tableau[clé];
}

console.log(jsonValueKey(JsonString, key));
