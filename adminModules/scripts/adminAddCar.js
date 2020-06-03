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
    // $.ajax('adminModules/adminAddCarGetBrand.php', {
    //     method: 'get',
    //     success: function (brands) {
    //         let brand = JSON.parse(brands);
    //         let addNewCarHTML = `<div class="field">
    //                         <p class="subtitle is-5" style="color:white">Brand </p>
    //                     <div class="control has-icons-left">
    //
    //                         <div class="select is-primary">
    //
    //                         <select name="brandSelect" id="brandSelect"><option selected="true"  value='null'disabled="disabled">Brand</option>`;
    //         brand.forEach(br => {
    //             addNewCarHTML += ` <option value="${br.brandID}" data="${br.brandID}">${br.brand}</option>`;
    //         });
    //         addNewCarHTML += `</select></div>
    //                         <div class="icon is-small is-left">
    //                         <i class="fas fa-industry iconGrey"></i>
    //                         </div>
    //                         </div>
    //                         </div>`;
    //         $('#adminAddNewVehicle').html(addNewCarHTML);
    let addNewCarModelHTML = ``;
    /////////////////////////////////////////////////////////////////////////////////////////////
    document.querySelector("#brandSelect").addEventListener('change', () => {
        let selectedBrand = document.querySelector("#brandSelect");
        let selectedBrandID = selectedBrand.options[selectedBrand.selectedIndex].value;
        console.log(selectedBrandID);
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
                    addNewCarModelHTML = `<div class="field" id="addCarModelCheck">
                            <p class="subtitle is-5" style="color:white">Model </p>
                            <div class="control has-icons-left">
                            <div class="select is-primary">
                            <select name="modelSelect" class="forReset" id="modelSelect"><option selected="true" disabled="disabled" value="null">Model</option>`;
                    model.forEach(mdl => {
                        addNewCarModelHTML += `<option value="${mdl.modelID}">${mdl.model}</option>`;
                    });
                    addNewCarModelHTML += `</select></div>
                            <div class="icon is-small is-left">
                            <i class="fas fa-car iconGrey"></i>
                            </div></div></div>`;
                    // console.log(addNewCarModelHTML);
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

                            <select name="addCarColor" class="forReset" id="addCarColor"><option selected="true" disabled="disabled" value="null"><span>Color</span></option>`;
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

                            <select name="addCarBodyType" class="forReset" id="addCarBodyType"><option selected="true" disabled="disabled" value="null"><span>Body Type</span></option>`;
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
                            <select name="addCarNumOfDoors"  class="forReset" id="addCarNumOfDoors">
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
                         <select name="addCarYear" class="forReset" id="addCarYear"> <option selected="true" disabled="disabled" value="null"><span>Year</span></option>`;

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
                             <select name="addCarFuel"  class="forReset" id="addCarFuel"><option selected="true" disabled="disabled" value="null"><span>Fuel</span></option>`;
                    ftrs[2].forEach(ftrFl => {
                        addCarFuel += `<option value="${ftrFl.fuel}">${ftrFl.fuel} </option>`;
                    });
                    addCarFuel += `</select>
                                            </div> <div class="field fieldCar">
                            <div class="icon is-small is-left">
                            <i class="fas fa-gas-pump iconGrey"></i></div></div> </div>
                            
                            
                            <div class="field fieldCar">
                                <p class="subtitle is-5" style="color:white; margin-top:10px;">Engine power</p>
                                <input type="text" class="input forReset" placeholder="Horsepower" id="addCarHorsepower" name="addCarHorsepower"> 
                            </div>
                            
                            <div class="field fieldCar">
                                <p class="subtitle is-5" style="color:white; margin-top:10px;">Price</p>
                                <input type="text" class="input forReset" placeholder="$$$" id="addCarPrice" name="addCarPrice"> 
                            </div>
                             
                            <div class="field fieldCar">
                            <div class="container center-column white">
                            <button type="submit" name="submitAddCar" id="addCarEvent" class="submit button modal-button-image"  data-target = "#modal"  value="Submit">Check</button></div></div>
                                <div id = "modal" class = "modal">
                <div class = "modal-background"></div>
                <div class = "modal-content">
                   <div class = "box">
                    <div class="columns is-vcentered ">
                      <div class="column is-8" id="addCarModalhtmlID">
                       
                      
                      </div>
                      <div class="column is-warning is-4"  id="resultOfUpdateCar">
                   
                      </div>
                    </div>
                    </div>
                </div>
                <button class = "modal-close is-large button is-dark" aria-label = "close"></button>
             </div>

                            `;
                    featuresHTML += addCarFuel;
                    if ($('.fieldCar').is(':visible')) {
                        $('.fieldCar').remove();
                        // $('#addCarColor').remove();
                        // $('#addCarBodyType').remove();
                        // $('#addCarFuel').remove();
                    }
                    $.when($('#addCarModelCheck').is(':visible')).done(function () {
                        $('#adminAddNewVehicle').append(featuresHTML);
                    });

                    //////////////////////////////////  client side check    \\\\\\\\\\\\\\\\\\\\\\\\\\\\\
                   // document.getElementById('addCarEvent').addEventListener('click', () => {

                       // checkButton.preventDefault();
                       $(".modal-button-image").click(function () {
                        console.log('pritisnuto je');
                        //let targetValue = $(this).val();
                        let target = $(this).data("target");
                        $("html").addClass("is-clipped");
                        $(target).addClass("is-active");
                        $.when($(target).addClass("is-active")).done(function () {
                            $('#addCarModalhtmlID').html(`<button class="button is-warning is-loading">Loading</button>`);
                            // $('.submit').on('click', function() {
                            //     var file_data = $('.image').prop('files')[0];
                            //     if(file_data != undefined) {
                            //         var form_data = new FormData();
                            //         form_data.append('file', file_data);
                            //         $.ajax({
                            //             type: 'POST',
                            //             url: 'adminModules/ajaxFile.php',
                            //             contentType: false,
                            //             processData: false,
                            //             data: form_data,
                            //             success:function(response) {
                            //                 console.log(JSON.parse(response));
                            //                 // if(response == 'success') {
                            //                 //     alert('File uploaded successfully.');
                            //                 // } else if(response == 'false') {
                            //                 //     alert('Invalid file type.');
                            //                 // } else {
                            //                 //     alert('Something went wrong. Please try again.');
                            //                 // }
                            //             }
                            //         });
                            //     }
                            //     return false;
                            // });
                        });
                    
                    
                        let addCarSelectedModel = document.querySelector('#modelSelect').value;
                        let addCarSelectedColor = document.querySelector('#addCarColor').value;
                        let addCarSelectedBodyType = document.querySelector('#addCarBodyType').value;
                        let addCarSelectedNumOfDoors = document.querySelector('#addCarNumOfDoors').value;
                        let addCarSelectedFuel = document.querySelector('#addCarFuel').value;
                        let addCarSelectYear = document.querySelector('#addCarYear').value;
                        let addCarInputHP = document.querySelector('#addCarHorsepower').value;

                        let addCarInputPrice = document.querySelector('#addCarPrice').value;

                        let formErr = [];
                        if (addCarSelectedModel === 'null') {
                            formErr.push('model');
                        }
                        if (addCarSelectedColor === 'null') {
                            formErr.push('color');
                        }
                        if (addCarSelectedBodyType === 'null') {
                            formErr.push('bodytype');
                        }
                        if (addCarSelectedNumOfDoors === 'null') {
                            formErr.push('number of doors');
                        }
                        if (addCarSelectedFuel === 'null') {
                            formErr.push('fuel');
                        }
                        if (addCarSelectYear === 'null') {
                            formErr.push('year when car is made');
                        }
                        if (addCarInputHP < 0) {
                            formErr.push('horsepower');
                        }
                        // if (addCarInputImagePathname.length < 5) {
                        //     formErr.push('#addCarImage');
                        // }
                        if (addCarInputPrice < 5 || addCarInputPrice > 99999999) {
                            formErr.push('price');
                        }
                        if (formErr.length < 1) {

                            $.ajax('adminModules/adminAddCar.php', {
                                method: 'post',
                                // contentType: false,
                                // processData: false,
                                data: {
                                    addCarModelIdPHP: addCarSelectedModel,
                                    addCarColorPHP: addCarSelectedColor,
                                    addCarBodyTypePHP: addCarSelectedBodyType,
                                    addCarSelectedDoorsPHP: addCarSelectedNumOfDoors,
                                    addCarFuelPHP: addCarSelectedFuel,
                                    addCarHpPHP: addCarInputHP,
                                    //  addCarImgPathnamePHP: form_data,
                                    addCarPricePHP: addCarInputPrice,
                                    addCarYearPHP: addCarSelectYear
                                },
                                success: addCarServerResponse => {
                                    let response = addCarServerResponse;
                                    // swal("Success", response, "success");
                                    console.log(response);
                                    ///////////
                                    if (JSON.parse(response) === 'Car successfully added to database') {
                                    $('#addCarModalhtmlID').html(`<input type="file" name="image" class="image" required  style="width:125px; border-radius:5px" id="addCarImageInsert" >
                             <input type="submit" name="submit" class="submitFile button is-dark"  style="margin-left:1rem" value="Submit" id="adminAddCarImageInsert">`);
                                     }
                                    $('.submitFile').on('click', function() {
                                        var file_data = $('.image').prop('files')[0];
                                        if(file_data != undefined) {
                                            var form_data = new FormData();
                                            form_data.append('file', file_data);
                                            $.ajax('adminModules/adminAddCarFile.php',{
                                                type: 'POST',
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
                                                }
                                            });
                                        }
                                        return false;
                                    });
                                 } //success
                            }); //ajax
                        } //if
                        else {
                           let errorsAddCarHTML = ``;
                           for(let err of formErr ){
                                errorsAddCarHTML +=` <div class="buttons"><button class="button is-warning formErrorNotification">Please correct: ${err} </button></div>`;
                                
                           }
                            $('#addCarModalhtmlID').html(errorsAddCarHTML);
                           $('.formErrorNotification').css({'margin':'0.1rem'});
                           $('#resultOfUpdateCar').html(`<button class="button is-info" id="resetForm">Reset form</button>`);
                           document.getElementById('resetForm').addEventListener('click',() =>{
                               window.location.reload();
                           });
                        }
                    });
                        $(".modal-close").click(function () {
                            $("html").removeClass("is-clipped");
                            $(this).parent().removeClass("is-active");
                        });
                    // });

                    ///////////////////////////////// end of client side check \\\\\\\\\\\\\\\\\
                } //success
            }); //ajax adminAddCarGetFeatures.php
        } //if
    }); //brandSelect EventListener

} catch {
    alert('greska sa bazom');
}
////////////////////////////////////////////////////////////////////////////

//REMOVE CAR

////////////////////////////////////////////////////////////////////////////

