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
            document.querySelector("#brandSelect").addEventListener('change', ()=> {
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
                         if($('#addCarModelCheck').is(':visible')){
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
                        addCarBodyType +=`<div class="field fieldCar">
                        <p class="subtitle is-5" style="color:white">Year</p>
                        <div class="control has-icons-left">
                         <div class="select is-primary">
                         <select name="addCarYear" id="addCarYear"> <option selected="true" disabled="disabled" value="null"><span>Year</span></option>`;
                        
                         for(let i=dateYear-20; i<dateYear;i++){
                            addCarBodyType +=`<option value="${i}">${i}</option>`;
                         }
                         addCarBodyType+= `</select></div>
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
                        $.when($('#addCarModelCheck').is(':visible')).done(function(){
                         
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
                            let addCarSelectYear= document.querySelector('#addCarYear').value;
                            let addCarInputHP = document.querySelector('#addCarHorsepower').value;
                            let addCarInputImagePathname = document.querySelector('#addCarImage').value;
                            let addCarInputPrice = document.querySelector('#addCarPrice').value;

                            let greske =[];
                                if(addCarSelectedModel === 'null' ){
                                greske.push('#modelSelect');
                                }
                            if(addCarSelectedColor === 'null' ){
                                greske.push('#addCarColor');
                            }
                            if(addCarSelectedBodyType === 'null' ){
                                greske.push('#addCarBodyType');
                            }
                            if(addCarSelectedNumOfDoors === 'null' ){
                                greske.push('#addCarNumOfDoors');
                            }
                            if(addCarSelectedFuel === 'null' ){
                                greske.push('#addCarFuel');
                            }
                            if(addCarSelectYear === 'null' ){
                                greske.push('#addCarYear');
                            }
                            if(addCarInputHP <0 ){
                                greske.push('#addCarHorsepower');
                            }
                            if(addCarInputImagePathname.length <5 ){
                                greske.push('#addCarImage');
                            }
                            if(addCarInputPrice<5 || addCarInputPrice >99999999 ){
                                greske.push('#addCarPrice');
                            }
                            if( greske.length<1) {
                                $.ajax('adminModules/adminAddCar.php', {
                                    method: 'post',
                                    data: {
                                        addCarModelIdPHP: addCarSelectedModel,
                                        addCarColorPHP: addCarSelectedColor,
                                        addCarBodyTypePHP: addCarSelectedBodyType,
                                        addCarSelectedDoorsPHP:addCarSelectedNumOfDoors,
                                        addCarFuelPHP: addCarSelectedFuel,
                                        addCarHpPHP: addCarInputHP,
                                        addCarImgPathnamePHP: addCarInputImagePathname,
                                        addCarPricePHP : addCarInputPrice,
                                        addCarYearPHP : addCarSelectYear
                                    }, success: addCarServerResponse => {
                                        let response = JSON.parse(addCarServerResponse);
                                        console.log(response);

                                    }//success
                                });//ajax
                           }//if
                           else{
                            swal("Error", "Incorrect data", "error");
                           }
                        }); ///event listener
                        ///////////////////////////////// end of client side check \\\\\\\\\\\\\\\\\
                    }//success
                });//ajax adminAddCarGetFeatures.php
                }//if
            }); //brandSelect EventListener
        } //success
    }); //ajax adminAddCarGetBrand.php
} catch {
    alert('greska sa bazom');
}
////////////////////////////////////////////////////////////////////////////

                    //REMOVE CAR

////////////////////////////////////////////////////////////////////////////
// $('#adminRemoveCarDiv').hide();
// $('#removeCarShow').click(function () {
//     if ($('#adminRemoveCarDiv').is(':visible')) {
//         $('#adminRemoveCarDiv').hide();
//     } else {
//         $('#adminRemoveCarDiv').show();
//         // $('#adminRemoveCarDiv').css('margin-top', '2rem');
//         // $('#adminRemoveCarDiv').css('margin-bottom', '2rem');
//     }
// });

//document.querySelector('#removeCarShow').addEventListener('click',()=>{
    $.ajax('adminModules/adminGetCollumns.php',{
        method:'get',
        success:(collumns)=>{
            let removeParsed = JSON.parse(collumns);
            console.log(removeParsed, typeof removeParsed);
        //     let removeCarTML =`<div class="field">
        //     <p class="subtitle is-5" style="color:white">Collumn </p>
        //     <div class="select is-primary">
        //     <select name="brandSelect" id="brandSelect">
        //     <option selected="true"  value='null'disabled="disabled">Coullumn</option>`;
        //         for(let rmv in removeParsed){
        //             removeCarTML+= `<option value=${rmv}>${rmv}</option>`;
        //         }
        //     removeCarTML+=`</select></div>
        //     <select>
        //   <option selected="true"  value='null'disabled="disabled">jednakost</option>
        //   <option> = </option> 
        //   <option>!= </option>
        //   <option> < </option>
        //   <option> > </option>
        //   </select> 
        //     </div>`;
        let removeCarHTML = `<table class="table"> <tr>
        <td  class="is-info">ID</td>
        <td>Name</td>
        <td>Model</td>
        <td>Body</td>
        <td>Fuel</td>
        <td>Power</td>
        <td>Doors</td>
        <td>Year</td>
        <td>Color</td>
        <td>Price</td>
        <td class="is-warning">Update</td>
        <td class="is-danger">Delete</td>
        </tr><table>`;
            $('#adminRemoveCarDiv').append(removeCarHTML);
        }
    });
//});
//#addNewCarShow -button
//#adminAddNewVehicle -div

//#removeCarShow -button
//#adminRemoveCarDiv -div