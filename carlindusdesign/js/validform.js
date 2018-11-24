
function onLoad() {
    var form = document.querySelector('form[data-validForm]');
    if(form != null){
      form.addEventListener('submit', validForm);
      form.addEventListener('reset', resetErrorMessage);
    }
}
document.addEventListener("DOMContentLoaded", onLoad);



// Validation des champs de formulaire
function checkRequiredFields(){
  var isValid = true;
  var requiredFields = document.querySelectorAll('[data-required]');

  requiredFields.forEach(function(requiredField){
    if (requiredField.value == null || requiredField.value == ''){
      requiredField.insertAdjacentHTML('afterend', '<span class="invalidField">ce champ est obligatoire</span>');
      isValid = false;
    }
  });

  return isValid;
}

function isEmail(email){
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return email.match(mailformat);
}

function checkEmailFields(){
  var isValid = true;
  var emailFields = document.querySelectorAll('[data-email]');
  emailFields.forEach(function(emailField){
    if (!isEmail(emailField.value)){
      emailField.insertAdjacentHTML('afterend', '<span class="invalidField">ce champ doit être un email</span>');
      isValid = false;
    }
  });

  return isValid;
}

function validForm(event){
  resetErrorMessage();

  if(!checkRequiredFields() || !checkEmailFields()){
    event.preventDefault();
  }
}

function resetErrorMessage(){
  var errorMessages = document.querySelectorAll('span.invalidField');
  errorMessages.forEach(function(errorMessage){
    errorMessage.remove();
  })
}
