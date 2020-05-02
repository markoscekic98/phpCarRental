$('#adminAddNewVehicle').hide();
$('#addNewCarShow').click(function () {
    if ($('#adminAddNewVehicle').is(':visible')) {
        $('#adminAddNewVehicle').hide();
    } else {
        $('#adminAddNewVehicle').show();
        $('#adminAddNewVehicle').css('margin-top', '2rem');
        $('#adminAddNewVehicle').css('margin-bottom', '2rem');
    }
});
try {
    $.ajax('adminModules/adminAddCarGetBrand.php', {
        method: 'get',
        success: function (brands) {
            let brand = JSON.parse(brands);
            let addNewCarHTML = `<div class="field">
                            <p class="subtitle is-5" style="color:white">Brand </p>
                        <div class="control has-icons-left">

                            <div class="select is-primary">

                            <select name="brandSelect" id="brandSelect"><option selected="true"  value='null'disabled="disabled">Brand</option>`;
            brand.forEach(br => {
                addNewCarHTML += ` <option value="${br.brandID}" data="${br.brandID}">${br.brand}</option>`;
            });
            addNewCarHTML += `</select></div>
                            <div class="icon is-small is-left">
                            <i class="fas fa-industry iconGrey"></i>
                            </div>
                            </div>
                            </div>`;
            $('#adminAddNewVehicle').html(addNewCarHTML);
            /////////////////////////////////////////////////////////////////////////////////////////////
            document.querySelector("#brandSelect").addEventListener('change', () => {
                let selectedBrand = document.querySelector("#brandSelect");
                let selectedBrandID = selectedBrand.options[selectedBrand.selectedIndex].value;
                if (selectedBrandID > 0) {
                    // console.log(typeof selectedBrandID);
                    $.ajax('adminModules/adminAddCarGetModel.php', {
                        method: 'post',
                        data: {
                            brandID: parseInt(selectedBrandID)
                        },
                        success: (modelParam) => {
                            let model = JSON.parse(modelParam);
                            // console.log(model);
                            let addNewCarModelHTML = `<div class="field" id="addCarModelCheck">
                            <p class="subtitle is-5" style="color:white">Model </p>
                            <div class="control has-icons-left">
                            <div class="select is-primary">
                            <select name="modelSelect" id="modelSelect"><option selected="true" disabled="disabled" value="null">Model</option>`;
                            model.forEach(mdl => {
                                addNewCarModelHTML += `<option value="${mdl.modelID}">${mdl.model}</option>`;
                            });
                            addNewCarModelHTML += `</select></div>
                            <div class="icon is-small is-left">
                            <i class="fas fa-car iconGrey"></i>
                            </div></div></div>`;
                            console.log(addNewCarModelHTML);
                            if ($('#addCarModelCheck').is(':visible')) {
                                $('#addCarModelCheck').remove();
                            }
                            $('#adminAddNewVehicle').append(addNewCarModelHTML);
                        } //success
                    }); //ajax

                    $.ajax('adminModules/adminAddCarGetFeatures.php', {
                        method: "get",
                        success: (features) => {
                            let ftrs = JSON.parse(features);
                            let featuresHTML = ``;
                            /////////////////// color \\\\\\\\\\\\\\\\\\

                            let addCarColor = `<div class="field fieldCar">
                            <p class="subtitle is-5" style="color:white">Color </p>
                        <div class="control has-icons-left">

                            <div class="select is-primary">

                            <select name="addCarColor" id="addCarColor"><option selected="true" disabled="disabled" value="null"><span>Color</span></option>`;
                            ftrs[0].forEach(ftrCol => {
                                addCarColor += `<option value="${ftrCol.color}">${ftrCol.color}</option>`;
                            });
                            addCarColor += `</select></div>
                            <div class="icon is-small is-left">
                            <i class="fas fa-palette iconGrey"></i>
                            </div>
                            </div>
                            </div>`;
                            featuresHTML = addCarColor;
                            ///////////////////// body type \\\\\\\\\\\\\\\\\\\
                            let addCarBodyType = `<div class="field fieldCar">
                            <p class="subtitle is-5" style="color:white">Body type </p>
                        <div class="control has-icons-left">

                            <div class="select is-primary">

                            <select name="addCarBodyType" id="addCarBodyType"><option selected="true" disabled="disabled" value="null"><span>Body Type</span></option>`;
                            ftrs[1].forEach(ftrBdTp => {
                                addCarBodyType += `<option value="${ftrBdTp.bodyType}">${ftrBdTp.bodyType}</option>`;
                            });
                            addCarBodyType += `</select></div>
                            <div class="icon is-small is-left">
                            <i class="fas fa-truck iconGrey"></i>
                            </div>
                            </div>
                            </div>
                          
                            <div class="field fieldCar">
                            <p class="subtitle is-5" style="color:white">Number of doors </p>
                        
                            <div class="select is-primary">
                            <select name="addCarNumOfDoors" id="addCarNumOfDoors">
                                <option selected="true" disabled="disabled" value="null"><span>Number</span></option>
                                <option value="2">2 door</option>
                             <option value="3">3 door (Hyundai Veloster)</option>
                             <option value="4">4door</option>
                             <option value="1">Race car or off-roader</option>
                        </select></div></div>
                        `;
                            let dateYear = new Date().getUTCFullYear();
                            console.log(dateYear);
                            addCarBodyType += `<div class="field fieldCar">
                        <p class="subtitle is-5" style="color:white">Year</p>
                        <div class="control has-icons-left">
                         <div class="select is-primary">
                         <select name="addCarYear" id="addCarYear"> <option selected="true" disabled="disabled" value="null"><span>Year</span></option>`;

                            for (let i = dateYear - 20; i < dateYear; i++) {
                                addCarBodyType += `<option value="${i}">${i}</option>`;
                            }
                            addCarBodyType += `</select></div>
                         <div class="icon is-small is-left">
                         <i class="fas fa-calendar iconGrey"></i>
                         </div>
                         </div>
                         </div>`;
                            featuresHTML += addCarBodyType;
                            ////////////////////// fuel \\\\\\\\\\\\\\\\\\\\\\\
                            let addCarFuel = `<div class="field fieldCar">
                            <p class="subtitle is-5" style="color:white">Fuel </p>
                        <div class="control has-icons-left">
                               <div class="select is-primary">
                             <select name="addCarFuel" id="addCarFuel"><option selected="true" disabled="disabled" value="null"><span>Fuel</span></option>`;
                            ftrs[2].forEach(ftrFl => {
                                addCarFuel += `<option value="${ftrFl.fuel}">${ftrFl.fuel} </option>`;
                            });
                            addCarFuel += `</select>
                                            </div> <div class="field fieldCar">
                            <div class="icon is-small is-left">
                            <i class="fas fa-gas-pump iconGrey"></i></div></div> </div>
                            <div class="field fieldCar">
                            <p class="subtitle is-5" style="color:white; margin-top:10px;">Image name </p>
                            <p class="control has-icons-left has-icons-right">
                            <input type="text" class="input" placeholder="Image" id="addCarImage" name="addCarImage"> 
                            <span class="icon is-small is-left"><i class="fas fa-image iconGrey">
                            </i></span></p></div>
                            
                            <div class="field fieldCar">
                                <p class="subtitle is-5" style="color:white; margin-top:10px;">Engine power</p>
                                <input type="text" class="input" placeholder="Horsepower" id="addCarHorsepower" name="addCarHorsepower"> 
                            </div>
                            
                            <div class="field fieldCar">
                                <p class="subtitle is-5" style="color:white; margin-top:10px;">Price</p>
                                <input type="text" class="input" placeholder="$$$" id="addCarPrice" name="addCarPrice"> 
                            </div>
                            
                            <div class="field fieldCar">
                            <div class="container center-column white">
                            <button class='button' id="addCarEvent">Check</button></div>`;
                            featuresHTML += addCarFuel;
                            if ($('.fieldCar').is(':visible')) {
                                $('.fieldCar').remove();
                                // $('#addCarColor').remove();
                                // $('#addCarBodyType').remove();
                                // $('#addCarFuel').remove();
                            }
                            $('#adminAddNewVehicle').append(featuresHTML);
                            $.when($('#addCarModelCheck').is(':visible')).done(function () {

                                console.log('when radi');
                            });

                            //////////////////////////////////  client side check    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\
                            document.querySelector('#addCarEvent').addEventListener('click', checkButton => {
                                checkButton.preventDefault();
                                let addCarSelectedModel = document.querySelector('#modelSelect').value;
                                let addCarSelectedColor = document.querySelector('#addCarColor').value;
                                let addCarSelectedBodyType = document.querySelector('#addCarBodyType').value;
                                let addCarSelectedNumOfDoors = document.querySelector('#addCarNumOfDoors').value;
                                let addCarSelectedFuel = document.querySelector('#addCarFuel').value;
                                let addCarSelectYear = document.querySelector('#addCarYear').value;
                                let addCarInputHP = document.querySelector('#addCarHorsepower').value;
                                let addCarInputImagePathname = document.querySelector('#addCarImage').value;
                                let addCarInputPrice = document.querySelector('#addCarPrice').value;

                                let greske = [];
                                if (addCarSelectedModel === 'null') {
                                    greske.push('#modelSelect');
                                }
                                if (addCarSelectedColor === 'null') {
                                    greske.push('#addCarColor');
                                }
                                if (addCarSelectedBodyType === 'null') {
                                    greske.push('#addCarBodyType');
                                }
                                if (addCarSelectedNumOfDoors === 'null') {
                                    greske.push('#addCarNumOfDoors');
                                }
                                if (addCarSelectedFuel === 'null') {
                                    greske.push('#addCarFuel');
                                }
                                if (addCarSelectYear === 'null') {
                                    greske.push('#addCarYear');
                                }
                                if (addCarInputHP < 0) {
                                    greske.push('#addCarHorsepower');
                                }
                                if (addCarInputImagePathname.length < 5) {
                                    greske.push('#addCarImage');
                                }
                                if (addCarInputPrice < 5 || addCarInputPrice > 99999999) {
                                    greske.push('#addCarPrice');
                                }
                                if (greske.length < 1) {
                                    $.ajax('adminModules/adminAddCar.php', {
                                        method: 'post',
                                        data: {
                                            addCarModelIdPHP: addCarSelectedModel,
                                            addCarColorPHP: addCarSelectedColor,
                                            addCarBodyTypePHP: addCarSelectedBodyType,
                                            addCarSelectedDoorsPHP: addCarSelectedNumOfDoors,
                                            addCarFuelPHP: addCarSelectedFuel,
                                            addCarHpPHP: addCarInputHP,
                                            addCarImgPathnamePHP: addCarInputImagePathname,
                                            addCarPricePHP: addCarInputPrice,
                                            addCarYearPHP: addCarSelectYear
                                        },
                                        success: addCarServerResponse => {
                                            let response = JSON.parse(addCarServerResponse);
                                            console.log(response);

                                        } //success
                                    }); //ajax
                                } //if
                                else {
                                    swal("Error", "Incorrect data", "error");
                                }
                            }); ///event listener
                            ///////////////////////////////// end of client side check \\\\\\\\\\\\\\\\\
                        } //success
                    }); //ajax adminAddCarGetFeatures.php
                } //if
            }); //brandSelect EventListener
        } //success
    }); //ajax adminAddCarGetBrand.php
} catch {
    alert('greska sa bazom');
}
////////////////////////////////////////////////////////////////////////////

//REMOVE CAR

////////////////////////////////////////////////////////////////////////////

$.ajax('adminModules/adminGetCollumns.php', {
    method: 'get',
    success: (collumns) => {
        let removeParsed = JSON.parse(collumns);
        console.log(removeParsed, typeof removeParsed);

        let removeCarHTML = `<table class="table is-striped" id="tableVisible"> <tr>
        <td  class="is-link">   ID</td>
        <td class="is-link">    Name</td>
        <td class="is-link">    Model</td>
        <td class="is-link">    Body</td>
        <td class="is-link">    Fuel</td>
        <td class="is-link">    Power</td>
        <td class="is-link">    Doors</td>
        <td class="is-link">    Year</td>
        <td class="is-link">    Color</td>
        <td class="is-link">    Price</td>
        <td class="is-link">    Update</td>
        <td class="is-link">     Delete</td>
        </tr> 
        <tr id="transparrentTr"> <td class="is-info"></td>  <td class="is-light"></td> <td class="is-light"></td> <td class="is-light"></td> 
        <td class="is-light"></td> <td class="is-light"></td> <td class="is-light"></td> <td class="is-light"></td>
        <td class="is-light"></td> <td class="is-light"></td> 
        <td class="is-dark"></td> <td class="is-dark"></td></tr> `;
        $.ajax('adminModules/adminGetAllCars.php', {
            method: 'get',
            success: function (data) {
                dataP = JSON.parse(data);
                console.log(dataP);
                dataP.forEach(dp => {
                    removeCarHTML += `<tr >
                 <td class="is-info" >${dp.carID} </td>
                 <td >${dp.brand} </td>
                 <td >${dp.model} </td>
                 <td >${dp.bodyType}</td>
                 <td >${dp.fuel} </td>
                 <td >${dp.hp} hp</td>
                 <td >${dp.numOfDoors} </td>
                 <td >${dp.year} </td>
                 <td >${dp.color} </td>
                 <td >$${dp.initialPriceCar} </td>
                 <td class="is-dark">   <button class="is-warning button  tebleButtons updateCarModalButt modal-button" data-target = "#modal"  name="updateCar" value="${dp.carID}">   Update  </button>   </td>
                 <td class="is-dark">  <button class="is-danger  button  tebleButtons removeCarModalButt  modal-button" name="removeCar" value="${dp.carID}">  Delete  </button>   </td>
                 </tr>`;
                });
                removeCarHTML += `</table> <div id = "modal" class = "modal">
                <div class = "modal-background"></div>
                <div class = "modal-content">
                   <div class = "box">
                    <div class="columns is-vcentered ">
                      <div class="column is-8">
                        <input type="text"  class="input"  style="width:125px; border-radius:5px" id="adminCarUpdatePrice" placeholder ="New price">
                        <button class="button is-dark" style="margin-left:1rem" id="adminCarUpdatePriceEvent">Submit</button>
                      </div>
                      <div class="column is-warning is-4"  id="resultOfUpdateCar">
                   
                      </div>
                    </div>
                    </div>
                </div>
                <button class = "modal-close is-large button is-dark" aria-label = "close"></button>
             </div>`;
                $('#adminRemoveCarDiv').append(removeCarHTML);
               

                $(".modal-button").click(function () {
                    var target = $(this).data("target");
                    let targetValue = $(this).val();
                   
                   localStorage.removeItem('carIDUpdate');
                   localStorage.setItem('carIDUpdate', JSON.stringify(targetValue));
                    document.querySelector('#adminCarUpdatePriceEvent').addEventListener('click',()=>{
                        let lsID = JSON.parse(localStorage.getItem('carIDUpdate'));
                        let getTypedPrice = document.getElementById('adminCarUpdatePrice').value;
                        console.log(lsID, getTypedPrice);
                    if (getTypedPrice > 10 && getTypedPrice < 100000) {
                        $.ajax('adminModules/adminCarUpdate.php', {
                            method: 'post',
                            data: {
                                updateCarIDPHP : lsID,
                                newPricePHP: getTypedPrice
                            },
                            success: (updatePriceResponse) => {
                                let parsedResp = JSON.parse(updatePriceResponse);
                               // console.log(updatePriceResponse);
                               if(parsedResp === `Price is updated`){
                                   document.getElementById('resultOfUpdateCar').innerHTML = `<p class="button is-success"${parsedResp}</p>`
                                   console.log('doslo');
                               }
                            }
                        });
                    }
                    if (getTypedPrice === 'null' || getTypedPrice < 10 || getTypedPrice > 100000) {
                        swal('Error');
                    }
                });
                    console.log(targetValue);
                    $("html").addClass("is-clipped");
                    $(target).addClass("is-active");
                });

                $(".modal-close").click(function () {
                    $("html").removeClass("is-clipped");
                    $(this).parent().removeClass("is-active");
                });
            }
        });



    }
});