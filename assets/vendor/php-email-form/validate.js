

let forms = document.querySelectorAll('.php-email-form');
let timeout;

function relod() {
  timeout = setTimeout(vanish, 3000);
}

function vanish(){
  document.getElementById('success').classList.remove('d-block');
}

  forms.forEach( function (e) {
    e.addEventListener('submit', function sendEmail(e) {
      e.preventDefault();
      let thisForm = this;
      Email.send({
        SecureToken : "59abed73-647d-4a5d-88fd-d79eedb028c5",
        To : 'mevinmevi88@gmail.com',
        From :"smartlabverifysample@gmail.com",
        Subject : "New contact form Enquiry",
        Body : "Name :" + document.getElementById("name").value
            + "<br> Email :" + document.getElementById("email").value
            + "<br> Subject :" + document.getElementById("subject").value
            + "<br> Message :" + document.getElementById("message").value
        }).then((response)=>{
        console.log(response);
        if(response.trim()=='OK'){
          document.getElementById('success').classList.add('d-block');
          thisForm.reset();
          relod();
          
        }else{
          document.getElementById('fail').classList.add('d-block');
        }
          
        
        });
    })
  })







/* function sendEmail(){
  Email.send({
SecureToken : "59abed73-647d-4a5d-88fd-d79eedb028c5",
To : 'mevinmevi88@gmail.com',
From :"smartlabverifysample@gmail.com",
Subject : "New contact form Enquiry",
Body : "Name :" + document.getElementById("name").value
    + "<br> Email :" + document.getElementById("email").value
    + "<br> Subject :" + document.getElementById("subject").value
    + "<br> Message :" + document.getElementById("message").value
}).then((response)=>{
console.log(response);

});

} */

/* ---------------------- */

/* (function () {
  "use strict";

  let forms = document.querySelectorAll('.php-email-form');

  forms.forEach( function(e) {
    e.addEventListener('submit', function(event) {
      event.preventDefault();

      let thisForm = this;

      let action = thisForm.getAttribute('action');
      let recaptcha = thisForm.getAttribute('data-recaptcha-site-key');
      
      if( ! action ) {
        displayError(thisForm, 'The form action property is not set!')
        return;
      }
      thisForm.querySelector('.loading').classList.add('d-block');
      thisForm.querySelector('.error-message').classList.remove('d-block');
      thisForm.querySelector('.sent-message').classList.remove('d-block');

      let formData = new FormData( thisForm );

      if ( recaptcha ) {
        if(typeof grecaptcha !== "undefined" ) {
          grecaptcha.ready(function() {
            try {
              grecaptcha.execute(recaptcha, {action: 'php_email_form_submit'})
              .then(token => {
                formData.set('recaptcha-response', token);
                sendEmail(thisForm, action, formData);
              })
            } catch(error) {
              displayError(thisForm, error)
            }
          });
        } else {
          displayError(thisForm, 'The reCaptcha javascript API url is not loaded!')
        }
      } else {
        sendEmail(thisForm, action, formData);
      }
    });
  });



  function php_email_form_submit(thisForm, action, formData) {
    fetch(action, {
      method: 'POST',
      body: formData,
      headers: {'X-Requested-With': 'XMLHttpRequest'}
    })
    .then(response => {
      return response.text();
    })
    .then(data => {
      thisForm.querySelector('.loading').classList.remove('d-block');
      if (data.trim() == 'OK') {
        thisForm.querySelector('.sent-message').classList.add('d-block');
        thisForm.reset(); 
      } else {
        throw new Error(data ? data : 'Form submission failed and no error message returned from: ' + action); 
      }
    })
    .catch((error) => {
      displayError(thisForm, error);
    });
  }

  function displayError(thisForm, error) {
    thisForm.querySelector('.loading').classList.remove('d-block');
    thisForm.querySelector('.error-message').innerHTML = error;
    thisForm.querySelector('.error-message').classList.add('d-block');
  }

})();
 */

