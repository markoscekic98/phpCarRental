document.querySelector('#contactForm').addEventListener('submit',ev =>{
    //document.querySelector('form').reset();
    // this.preventDefault();
   console.log("logovanje");

    ev.preventDefault();
     var dataForm = [];
     var validation = true;
     ///////// username ////////
     var uname = document.querySelector('#uname').value.trim();
     const reExName = /^[a-z0-9]{4,13}$/;
     if (uname.length < 2) {
      $('#usernameError').html(`Please enter your username`);
       validation = false;
     }
     if (!reExName.test(uname)) {
       $('#usernameError').html(`Please enter your first name correctly`);
       validation = false;
     }
     dataForm.push(uname);
  
  
  /////////DOB \\\\\\\\\
    const date = new Date();
    const year = date.getFullYear();
  
    var dob = document.getElementById('dob').value.trim();
    
    if(dob === 'nul' || dob === 'undefined' || dob.length<2){
      $('#dobError').html("Please enter date of birth to continue registration");
      validation= false;
    }
    const dobArr= dob.split('-');
    const dobYear = Number(dobArr[0]);
    if(dobYear+18 > year){
      $('#dobError').html("Age requirement is 18!");
      validation = false;
    }
   dataForm.push(dob);
  
     /////////////////  E M A I L \\\\\\\\\\\\\\\
  
     var em = document.querySelector('#email').value.trim();
     const reExEmail = /^[a-z0-9._%+]+@[a-z0-7.]+\.[a-z]{2,4}$/;
     if (em.length < 1) {
       $('emailError').html(`Please enter your email address`);
       validation = false;
     }
     if (!reExEmail.test(em)) {
       $('#emailError').html(`Please enter valid email address`);
       validation = false;
     }
    dataForm.push(em);
  
     ///////////////////////  PassWord \\\\\\\\\\\\\\\\\
    
     var pass = document.querySelector('#pass').value;
     const reExPass = /^[A-z0-9]{5,20}$/;
     if (!reExPass.test(pass)) {
       $('#passError').html(`Please enter alfanumeric only password between 5 and 20 character in length`);
       validation = false;
     }
    dataForm.push(pass);
  
     if (dataForm.length > 3 && validation) {
         swal("Success!", 'Information is sent to server', "success");

        $.ajax('registrationAjax.php',{
            method:'post',
            data:{
                usernameAjax: uname,
                dobAjax: dob,
                emAjax: em,
                passAjax:pass
            },
            success:function(data, status) {
                const registraionPHPResponse = data;
                // console.log(status);
                // console.log(data);
                let formatedResponse = registraionPHPResponse.substring(1,registraionPHPResponse.length -1);
                if (formatedResponse === `Your registration was successful`) {
                    swal("Success!", formatedResponse, "success");
                } else if((formatedResponse.split(`""`)).length>0){

                    const phpResponseStrToArr = formatedResponse.split(`""`);
                    const formatedPhpResponse = `${phpResponseStrToArr[0]} & ${phpResponseStrToArr[1].toLowerCase()}`;
                    swal("Warning!", `${formatedPhpResponse}`, "warning");
                }  else{
                        swal("Warning!", `${formatedResponse}`, "warning");
                    }//else
            }//if
        });//ajax
     }//if data validation
});//event listener
