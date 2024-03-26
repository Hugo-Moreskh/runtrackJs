function jourTravaille(date) {
  const joursFeries2024 = {
    "01-01": "Nouvel An",
    "04-04": "Pâques",
    "01-05": "Fête du Travail",
    "08-05": "Victoire 1945",
    "13-05": "Ascension",
    "14-07": "Fête nationale",
    "15-08": "Assomption",
    "01-11": "Toussaint",
    "11-11": "Armistice 1918",
    "25-12": "Noël",
  };

  const joursSemaine = [
    "Dimanche",
    "Lundi",
    "Mardi",
    "Mercredi",
    "Jeudi",
    "Vendredi",
    "Samedi",
  ];
  const moisAnnee = [
    "Décembre",
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Aout",
    "Septembre",
    "Octobre",
    "Novembre",
  ];

  const annee = date.getFullYear();
  const mois = date.getMonth() + 1;
  const jour = date.getDate();
  const jourSemaineIndex = date.getDay();
  const nomJourSemaine = joursSemaine[jourSemaineIndex];
  const nomMois = moisAnnee[mois];
  const dateFormatted = `${nomJourSemaine} ${jour} ${nomMois} ${annee}`;

  if (joursFeries2024[`${("0" + jour).slice(-2)}-${("0" + mois).slice(-2)}`]) {
    console.log(
      `Le ${dateFormatted} est un jour férié (${
        joursFeries2024[`${("0" + jour).slice(-2)}-${("0" + mois).slice(-2)}`]
      }).`
    );
  } else if (jourSemaineIndex === 0 || jourSemaineIndex === 6) {
    console.log(`Non, ${dateFormatted} est un week-end.`);
  } else {
    console.log(`Oui, ${dateFormatted} est un jour travaillé.`);
  }
}

const dateTest = new Date(2024, 0, 1);
jourTravaille(dateTest);

const dateTest1 = new Date(2024, 0, 5);
jourTravaille(dateTest1);

const dateTest2 = new Date(2024, 0, 6);
jourTravaille(dateTest2);
