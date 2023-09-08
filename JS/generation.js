const generation = {
  init: function() {
    // console.log("Function generation.init activé");

    // On veut surveiller quand l'utilisateur soumet le formulaire
    const generatePassword = document.querySelector('.passwordGeneration form'); 
    generatePassword.addEventListener('submit', generation.handleFormSubmit);
  },

  /**
   * Fonction qui se déclanche à la validation du formulaire de génération de mot de passe
   * @param {*} event // Envoi du formulaire
   */
  handleFormSubmit: function(event) {
    // console.log("handleFormSubmit appelé");
    // Comme le clic sur le lien recharge la page, on bloque ce comportement par défaut
    event.preventDefault();
    // console.log(generation.passwordLenght(5));
    const inputs = document.querySelectorAll('.form-check-input');
    
    // console.log(inputs);
    /*inputs.forEach(input => {
      console.log(input.checked);
      console.log(input.value);
      console.log(input.name);
    });
    generation.makePassword(inputs[0].checked, inputs[1].checked, inputs[2].checked)*/
    let result = "";
    const password = document.querySelector('#generate-mdp');
    result = generation.passwordLenght((Math.random() * (25 - 8) + 8));

    password.innerHTML = result;
    // generation.passwordLenght((Math.random() * 25));
  },

  /**
   * Fonction qui servira à générer un mot de passe
   * @param {boolean} isEight // Si true, veux dire que le mdp doit être < 8
   * @param {boolean} isNumber 
   * @param {boolean} isSpecial 
   */
  makePassword: function(isEight, isNumber, isSpecial ) {

    // console.log(isEight);
    const mdp = (isEight) ? generation.passwordLenght(28) : null;

    console.log(mdp);
  },

  /**
   * 
   * @param {int} length 
   * @returns string
   */
  passwordLenght: function(length){
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ@$!%?&abcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
  }
}
document.addEventListener('DOMContentLoaded', generation.init);