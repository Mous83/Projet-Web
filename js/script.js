
function generer() {
    // Récupération des valeurs saisies par l'utilisateur
    var pseudo = document.getElementById("pseudo").value;
    var jeu = document.getElementById("jv").value;
    var console = document.getElementById("console").value;
    var note = document.getElementById("note").value;
    var commentaire = document.getElementById("comment").value;
  
    // Création d'une nouvelle ligne dans le tableau
    var table = document.getElementById("montab");
    var newRow = table.insertRow(table.rows.length);
  
    // Insertion des cellules avec les valeurs saisies
    var pseudoCell = newRow.insertCell(0);
    pseudoCell.innerHTML = pseudo;
    var jeuCell = newRow.insertCell(1);
    jeuCell.innerHTML = jeu;
    var consoleCell = newRow.insertCell(2);
    consoleCell.innerHTML = console;
    var noteCell = newRow.insertCell(3);
    noteCell.innerHTML = note;
    var commentaireCell = newRow.insertCell(4);
    commentaireCell.innerHTML = commentaire;
}

function del(){
  document.getElementById("pseudo").value = "";
  document.getElementById("jv").value = "";
  document.getElementById("console").value = "";
  document.getElementById("note").value = "1";
  document.getElementById("comment").value = "";
}

function verifierFormulaire() {
  var pseudo = document.getElementById("pseudo").value;
  var jeu = document.getElementById("jv").value;
  var console = document.getElementById("console").value;
  var note = document.getElementById("note").value;
  var commentaire = document.getElementById("comment").value;

  // Vérification des champs obligatoires
  if (pseudo === "" || jeu === "" || console === "" || note === "" || commentaire === "") {
    alert("Veuillez remplir tous les champs !");
  }else{
    generer();
    del();
  }


}

function supprimer() {
  if (confirm("Confirmez-vous la suppression de tous vos commentaires ?"))
  {
    var monTableau = document.getElementById("montab");
    var nbLignes = monTableau.rows.length;

    for (var i = nbLignes - 1 ; i > 0; i--) {
      monTableau.deleteRow(i);
    }
  } 
  }
  