//
//
//
//     /////////// samo dohvata brendove iz ajax.php
//     // $.ajax('ajax.php',{
//     //     method:'post',
//     //     type:'string',
//     //     data:{},
//     //     success:function(data){
//     //         $('#teloo').html(`<button id="dugme">Show brands</button> ${data}`);
//     //     }
//     // });
// document.getElementById('username').addEventListener('keyup',()=>{
//     //////// dohvata niz iz ajax.php
//     var usernameHTML = $('#username').val();
//     console.log(usernameHTML);
//     $.ajax('ajax.php',{
//         method:'post',
//         data:{
//             suggestPHP: usernameHTML
//         },//data
//         success:function(data, status){
//             console.log(status);
//             console.log(typeof data);
//             const formatedData = data.split('/');
//             console.log(formatedData);
//             let tempAjaxHtml ='';
//             for(let fd of  formatedData) {
//                 tempAjaxHtml+=  `<h2>${fd}</h2>`;
//             }
//             $('#suggestedUsername').html(tempAjaxHtml);
//         }//success
//     });//ajax
// });//addEvent


// document.getElementById('submitBtn').addEventListener('click', (e)=>{
//    //e.preventDefault();
//    //  let fileUpld = document.getElementById('fileTesting').value;
//     let funCall = 'fhdehfsahew7492fdusou';
//    //  if(fileUpld.length>0 || fileUpld !== 'null' || fileUpld !==''){
//         $.ajax('ajax.php',{
//             method:'post',
//             data:{
//                 fileFunctionCall : funCall
//             }, success:responsePHP =>{
//                 let response = responsePHP;
//                 console.log(response);
//             }
//
//         });
//    //  }
// })


//////////////////// sacuvano za file funkciu \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
$('.submit').on('click', function() {
    var file_data = $('.image').prop('files')[0];
    if(file_data != undefined) {
        var form_data = new FormData();
        form_data.append('file', file_data);
        $.ajax({
            type: 'POST',
            url: 'ajax.php',
            contentType: false,
            processData: false,
            data: form_data,
            success:function(response) {
                console.log(JSON.parse(response));
                // if(response == 'success') {
                //     alert('File uploaded successfully.');
                // } else if(response == 'false') {
                //     alert('Invalid file type.');
                // } else {
                //     alert('Something went wrong. Please try again.');
                // }

                $('.image').val('');
            }
        });
    }
    return false;
});
