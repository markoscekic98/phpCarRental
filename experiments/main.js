





document.getElementById('csrf_test').addEventListener('click',
    () => {
    let getCSRF = document.querySelector("meta").getAttribute("content");
    $.ajax('csrf.php', {
        method: 'post',
        type: 'json',
        data: {
            csrfAjx: getCSRF
        }, success: (respons) => {
            let serverDecode =respons; //JSON.parse(respons);
            console.log(serverDecode);
        }
    });

});

//console.log(getCSRF);

// $.ajax('weather.php',{
//     method:'get',
//     type:'json',
//     success:response =>{
//     console.log(response);
//         const wetherApiUrl = `http://api.openweathermap.org/data/2.5/weather?q=belgrade&appid=${response}`;
//         $.ajax(wetherApiUrl, {
//             method:'get',
//             type:'json',
//             success: weatherRespns =>{
//                 //console.log(weatherRespns);
//                 //console.log(weatherRespns.weather[0].main);
//                 const weatherType = weatherRespns.weather[0].main;
//
//                     localStorage.setItem('weather', weatherType);
//
//             }
//         });
//     }
// });