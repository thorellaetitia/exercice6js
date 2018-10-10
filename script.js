document.getElementById("submit").addEventListener("click", function () { //création de la fonction après le click sur Valider//
  var firstNumber = document.getElementById("firstNumber").value;//recupère l'id du premier nombre dans le formulaire//
  var secondNumber = document.getElementById("secondNumber").value;//recupère l'id du deuxième nombre dans le formulaire//
  var regexDecimal = /^[0-9 .,]+$/;//défini le regex//
  if (regexDecimal.test(firstNumber) && regexDecimal.test(secondNumber)){ //création des conditions par rapport au regex//
    alert(result = firstNumber % secondNumber); //affichage du résultat//
  }
  else
  {
    alert("indiquez un nombre correct");
  } })
