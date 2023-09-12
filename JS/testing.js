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
    generatePassword.addEventListener('input', testing.handleTyping);
  },

/**
 * Récupère les caractères entré par l'utilisateur pour les vérifier plus tard
 * @param {string} event 
 */
  handleTyping: function(event) {
    // console.log("handlerTyping activé");
    let log = event.target.value;
    testing.passwordChecking(log);
    
  },

  /**
   * Fonction qui vérifie sir le mdp contient les éléments sécurisant le mdp via des regex
   * @param {string} mdp 
   */
  passwordChecking: function(mdp) {
    // console.log("passwordChecking activé");
    // if(/^(?=.[A-Z])(?=.[a-z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,26}$/.test(mdp)){
    //   console.log("Success");
    // }
    let strong = 0;

    if ((/.{0,7}/).test(mdp)){
      // console.log("<8");
      strong += 10;
    }
    if(/[@$!%?&]/.test(mdp)){
      // console.log("special");
      strong += 20;
    }
    if ((/[A-Z]/).test(mdp)){
      // console.log("MAJ");
      strong += 10;
    }
    if ((/.{8,}/).test(mdp)){
      // console.log("<8");
      strong += 50;
    }
    if ((/[\d]/).test(mdp)){
      // console.log("number");
      strong += 10;
    }

    testing.handleProgressBar(strong);
    // console.log(strong);
  },

  /**
   * Gère la couleurs, le texte et la progression dans la barre
   * @param {string} number // Pourcentage de progression
   */
  handleProgressBar: function(number){
    const progressBar = document.querySelector('.progress-bar');
    progressBar.style.width = `${number}%`;
    // console.log(progressBar);
    const isStrong = document.querySelector('#values');
    const allClass = ["bg-danger", "bg-warning", "text-dark", "bg-success"];
    progressBar.classList.remove(...allClass)
    // console.log(allClass);
    if (number <= 25){
      // progressBar.classList.remove("bg-danger", "bg-warning", "text-dark", "bg-success");
      progressBar.classList.add("bg-danger");
      isStrong.textContent = "Très Faible";
    }else if (25 < number && number <= 65){
      // progressBar.classList.remove(allClass);
      // progressBar.classList.remove("bg-danger", "bg-warning", "text-dark", "bg-success");
      progressBar.classList.add("bg-danger");
      isStrong.textContent = "Faible";
    }else if (65 < number && number <= 85){
      // progressBar.classList.remove(allClass);
      // progressBar.classList.remove("bg-danger", "bg-warning", "text-dark", "bg-success");
      progressBar.classList.add("bg-warning", "text-dark");
      isStrong.textContent = "Moyen";
    }else if (85 < number){
      // progressBar.classList.remove(allClass);
      // progressBar.classList.remove("bg-danger", "bg-warning", "text-dark", "bg-success");
      progressBar.classList.add("bg-success");
      isStrong.textContent = "Fort";
    }
    
  }
}
document.addEventListener('DOMContentLoaded', testing.init);