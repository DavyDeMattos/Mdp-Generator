const testing = {

  /*-----------------
  Faire un système qui détermine si votre mot de passe est fort ou non
  utiliser la regex en MD
  Critères :
    - qu'il y a au moins un caractère majuscule ```(?=.*[A-Z])```
    - qu'il y a au moins un caractère minuscule ```(?=.*[a-z])```
    - qu'il y a au moins un chiffre ```(?=.*\d)```
    - qu'il y a au moins un caractère spécial ```(@$!%?&) (?=.[@$!%*?&])```
    - qu'il y a au moins 8 caractères ```( {8,})```

   -----------------*/
  init: function() {
    // console.log("Function generation.init activé");

    // On veut surveiller quand l'utilisateur soumet le formulaire
    const generatePassword = document.querySelector('#passwordToCheck'); 
    generatePassword.addEventListener('change', testing.handleTyping);
  },


  handleTyping: function() {
    console.log("handlerTyping activé");
  }
}
document.addEventListener('DOMContentLoaded', testing.init);