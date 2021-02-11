
        (function() {
            emailjs.init("user_4rlo1PKSZgk499xvgseOM"); // emailJs : userid
        })();
       function emailSubmit() {
           const emailForm = document.getElementById('email-form');
   
           var templateParams = {
                   to_name: emailForm.querySelector('input[name=to_name]').value,
                   from_name: emailForm.querySelector('input[name=from_name]').value,
                   email: emailForm.querySelector('input[name=email]').value,
                   phone_num: emailForm.querySelector('input[name=phone_num]').value,
                   message: emailForm.querySelector('textarea[name=message]').value
               };
           // service Id : service_gxov6gg
           // template Id : template_e3h5wax
           emailjs.send("service_gxov6gg","template_e3h5wax", templateParams)
               .then(function(response) {
                   alert('Email Send Success!');
                   }, function(error) {
                   alert('Email Send Failed!');
               });
           return false;
    
       }

       document.querySelector('#phone_input').addEventListener('input', function() {
           const regexp = /^[0-9]*$/;
           
           let phoneVal = this.value;
           if( !regexp.test(phoneVal) ) {
               alert("Only Number Please!");
               this.value = phoneVal.substring(0,-1);
           }
       })