(function(){
  // Browser sanity check:
  if (!('querySelector' in document && 'addEventListener' in document)) {
    // Old, old browser. Say buh-bye
    // console.log('Old browser');
    return;
  }

   // Email validity function
  function validate_email(value) {
    var email = clean_whitespace(value);
    return validate(email,/^[^@\s]+@[^@\s]+$/g);
  }
  
  document.addEventListener('DOMContentLoaded',function(){
    // Select the necessary elements from the DOM
    var email_input = document.querySelector('#email');
    // Disable the submit button until we are reasonable sure
    // that we have a ten-digit phone number
    signup_submit.setAttribute('disabled','disabled');

    // Listen for keyup event ANYWHERE in the form
    signup_form.addEventListener('keyup',function(){
      // Check the likely validity of phone AND email
      if (validate_email(email_input.value)) {
        // If valid, remove the disabled attribute on the submit button
        signup_submit.removeAttribute('disabled');
      } else {
        // This will re-disable the submit button if the input changes to an invalid state
        signup_submit.setAttribute('disabled','disabled');
      }
    });

}());