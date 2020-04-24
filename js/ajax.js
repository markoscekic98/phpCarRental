


    /////////// samo dohvata brendove iz ajax.php
    // $.ajax('ajax.php',{
    //     method:'post',
    //     type:'string',
    //     data:{},
    //     success:function(data){
    //         $('#teloo').html(`<button id="dugme">Show brands</button> ${data}`);
    //     }
    // });
document.getElementById('username').addEventListener('keyup',()=>{
    //////// dohvata niz iz ajax.php
    var usernameHTML = $('#username').val();
    console.log(usernameHTML);
    $.ajax('ajax.php',{
        method:'post',
        data:{
            suggestPHP: usernameHTML
        },//data
        success:function(data, status){
            console.log(status);
            console.log(typeof data);
            const formatedData = data.split('/');
            console.log(formatedData);
            let tempAjaxHtml ='';
            for(let fd of  formatedData) {
                tempAjaxHtml+=  `<h2>${fd}</h2>`;
            }
            $('#suggestedUsername').html(tempAjaxHtml);
        }//success
    });//ajax
});//addEvent