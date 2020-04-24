document.querySelector('#loginForm').addEventListener('submit',ev =>{
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

    ///////////////////////  PassWord \\\\\\\\\\\\\\\\\

    var pass = document.querySelector('#pass').value;
    const reExPass = /^[A-z0-9]{5,20}$/;
    if (!reExPass.test(pass)) {
        $('#passError').html(`Please enter alfanumeric only password between 5 and 20 character in length`);
        validation = false;
    }
    dataForm.push(pass);

    if (dataForm.length > 1 && validation) {
        swal("Success!", 'Information is sent to server', "success");

        $.ajax('loginAjax.php',{
            method:'post',
            data:{
                usernameLogin: uname,
                passwordLogin:pass
            },
            success:function(data, status) {
                const registraionPHPResponse = data;
                // console.log(status);
                // console.log(data);
                let formatedResponse = registraionPHPResponse.substring(1,registraionPHPResponse.length -1);
                if (formatedResponse === `Successful login`) {
                        swal("Success!", formatedResponse, "success");
                        localStorage.setItem('LoggedIN', 'true');
                    $('#loginRegisterButtons').html(`<div class="button is-info ReLoButtons">
                <a href="account.php"  class="navbar-item has-text-white">
                  <p>Account</p></a>
              </div>`);

                } else {
                    swal("Warning!", formatedResponse, "warning");
                }
            }
        });//ajax
    }
});
