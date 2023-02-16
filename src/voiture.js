// récupeerer ce qui est dans l'input durée location et kilométrage
// utiliser ses données pour calculer le coût d'une location
// choisir la loaction la moins chère
// afficher dans le textarea afficher "Le vehicule soit diesel soit essence est le moins cher"

function showResult() {
  let dureeValue = document.getElementById("Duree").value;

  let kilometrage = document.getElementById("Kilometrage").value;
  let result = calculer(dureeValue, kilometrage);
  let phrase;
  console.log(result);
  if (result.essence < result.diesel) {
    phrase = "Le vehicule essence est le moins cher";
  } else {
    phrase = "Le vehicule diesel est le moins cher";
  }
  let textArea = document.getElementById("Resultat");
  textArea.value = phrase;
}

const LOCATION_ESSENCE = 40;
const KILOMETRES_ESSENCE = 0.15;
const LOCATION_DIESEL = 50;
const KILOMETRES_DIESEL = 0.1;

function calculer(dureeLoc, numKm) {
  let resultEssence = dureeLoc * LOCATION_ESSENCE + KILOMETRES_ESSENCE * numKm;
  let resultDiesel = dureeLoc * LOCATION_DIESEL + KILOMETRES_DIESEL * numKm;
  let result = {
    essence: resultEssence,
    diesel: resultDiesel,
  };
  return result;
  // rerenvoyer un object {essence: resultEssenc, dielse:resultDielse}
}
