document.querySelector('#contactForm').addEventListener('submit', ev => {
    //document.querySelector('form').reset();
    // this.preventDefault();
    ev.preventDefault();
    let dataForm = [];
    let validation = true;
    const uname = document.querySelector('#uname').value.trim();
    const dob = document.getElementById('dob').value.trim();
    const em = document.querySelector('#email').value.trim();
    const pass = document.querySelector('#pass').value;
    const getCSRF = document.querySelector('meta[name="csrf-token"]').content
    ///////// username ////////
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
    if (dob === 'nul' || dob === 'undefined' || dob.length < 2) {
        $('#dobError').html("Please enter date of birth to continue registration");
        validation = false;
    }
    const dobArr = dob.split('-');
    const dobYear = Number(dobArr[0]);
    if (dobYear + 18 > year) {
        $('#dobError').html("Age requirement is 18!");
        validation = false;
    }
    dataForm.push(dob);
    /////////////////  E M A I L \\\\\\\\\\\\\\\
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
    const reExPass = /^[A-z0-9]{5,20}$/;
    if (!reExPass.test(pass)) {
        $('#passError').html(`Please enter alphanumeric only password between 5 and 20 character in length`);
        validation = false;
    }
    dataForm.push(pass);
    //////////////CSRF Token\\\\\\\\\\\\\\\\\\\
    console.log(getCSRF);
    if (getCSRF.length < 50 || getCSRF.length > 100) {
        validation = false;
        swal("Warning!", `Website is being hacked`, "warning");
    }
    if (dataForm.length === 4 && validation) {
        $.ajax('registrationAjax.php', {
            method: 'post',
            data: {
                usernameAjax: uname,
                dobAjax: dob,
                emAjax: em,
                passAjax: pass,
                csrfTokenLogin: getCSRF
            },
            success: function (data, status) {
                console.log(data);
                const registraionPHPResponse = data;

                let formatedResponse = registraionPHPResponse.substring(1, registraionPHPResponse.length - 1);
                if (formatedResponse === `Your registration was successful`) {
                    swal("Success!", formatedResponse, "success");
                } else {
                    swal("Warning!", `${formatedResponse}`, "warning");
                }//else
            }//if
        });//ajax
    }//if data validation
});//event listener
