const Validator = require("validator");
const isEmpty = require("./is-empty");
module.exports = function validateMessage(data) {
  let errors = {};

  data.firstname = !isEmpty(data.firstname) ? data.firstname : "";
  data.lastname = !isEmpty(data.lastname) ? data.lastname : "";
  data.position = !isEmpty(data.position) ? data.position : "";
  data.adress = !isEmpty(data.adress) ? data.adress : "";
  data.city = !isEmpty(data.city) ? data.city : "";
  data.country = !isEmpty(data.country) ? data.country : "";
  data.company = !isEmpty(data.company) ? data.company : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.message = !isEmpty(data.message) ? data.message : "";

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email invalide";
  }

  if (Validator.isEmpty(data.firstname)) {
    errors.firstname = "Prénom manquant";
  }
  if (Validator.isEmpty(data.lastname)) {
    errors.lastname = "Nom manquant";
  }
  if (Validator.isEmpty(data.company)) {
    errors.company = "Nom de l'entreprise manquant";
  }
  if (Validator.isEmpty(data.position)) {
    errors.position = "Poste occupé manquant";
  }
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email manquant";
  }
  if (Validator.isEmpty(data.message)) {
    errors.message = "Message manquant";
  }
  if (Validator.isEmpty(data.adress)) {
    errors.adress = "Adresse manquante";
  }
  if (Validator.isEmpty(data.city)) {
    errors.city = "Ville manquante";
  }
  if (Validator.isEmpty(data.country)) {
    errors.country = "Pays manquant";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
