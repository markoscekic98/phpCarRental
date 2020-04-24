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
            addNewCarHTML += `</select></div><div class="field"></div>
                            <div class="icon is-small is-left">
                            <i class="fas fa-industry iconGrey"></i>
                            </div>
                            </div>
                            </div>`;
            $('#adminAddNewVehicle').html(addNewCarHTML);
            /////////////////////////////////////////////////////////////////////////////////////
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
                            let addNewCarModelHTML = `<div class="field">
                            <p class="subtitle is-5" style="color:white">Model </p>
                        <div class="control has-icons-left">

                            <div class="select is-primary">

                            <select name="modelSelect" id="modelSelect"><option selected="true" disabled="disabled" value="null">Model</option>`;
                            model.forEach(mdl => {
                                addNewCarModelHTML += `<option value="${mdl.modelID}">${mdl.model}</option>`;
                            });
                            addNewCarModelHTML += `</select></div><div class="field"></div>
                            <div class="icon is-small is-left">
                            <i class="fas fa-car iconGrey"></i>
                            </div>
                            </div>
                            </div>`;
                            $('#modelSelect').remove();
                            $('#adminAddNewVehicle').append(addNewCarModelHTML);

                        } //success
                    }); //ajax
                } //if
                $.ajax('adminModules/adminAddCarGetFeatures.php', {
                    method: "get",
                    success: (features) => {
                        let ftrs = JSON.parse(features);
                        let featuresHTML = ``;
                        /////////////////// color \\\\\\\\\\\\\\\\\\

                        let addCarColor = `  <div class="field">
                            <p class="subtitle is-5" style="color:white">Color </p>
                        <div class="control has-icons-left">

                            <div class="select is-primary">

                            <select name="addCarColor" id="addCarColor"><option selected="true" disabled="disabled" value="null"><span>Color</span></option>`;
                        ftrs[0].forEach(ftrCol => {
                            addCarColor += `<option value="${ftrCol.color}">${ftrCol.color}</option>`;
                        });
                        addCarColor += `</select></div><div class="field"></div>
                            <div class="icon is-small is-left">
                            <i class="fas fa-palette iconGrey"></i>
                            </div>
                            </div>
                            </div>`;
                        featuresHTML = addCarColor;
                        ///////////////////// body type \\\\\\\\\\\\\\\\\\\
                        let addCarBodyType = `<div class="field">
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
                          
                            <div class="field">
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
                        addCarBodyType +=`<div class="field">
                        <p class="subtitle is-5" style="color:white">Year</p>
                        <div class="control has-icons-left">
                         <div class="select is-primary">
                         <select name="addCarYear" id="addCaryear"> <option selected="true" disabled="disabled" value="null"><span>Year</span></option>`;
                        
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
                        let addCarFuel = `<div class="field">
                            <p class="subtitle is-5" style="color:white">Fuel </p>
                        <div class="control has-icons-left">
                               <div class="select is-primary">
                             <select name="addCarFuel" id="addCarFuel"><option selected="true" disabled="disabled" value="null"><span>Fuel</span></option>`;
                        ftrs[2].forEach(ftrFl => {
                            addCarFuel += `<option value="${ftrFl.fuel}">${ftrFl.fuel} </option>`;
                        });
                        addCarFuel += `</select>
                                            </div> <div class="field">
                            <div class="icon is-small is-left">
                            <i class="fas fa-gas-pump iconGrey"></i></div></div> </div>
                            <div class="field">
                            <p class="subtitle is-5" style="color:white; margin-top:10px;">Image pathname </p>
                            <p class="control has-icons-left has-icons-right">
                            <input type="text" class="input" placeholder="Image location" id="addCarImagePathname" name="addCarImageLocation"> 
                            <span class="icon is-small is-left"><i class="fas fa-image iconGrey">
                            </i></span></p></div>
                            
                            <div class="field">
                                <p class="subtitle is-5" style="color:white; margin-top:10px;">Engine power</p>
                                <input type="text" class="input" placeholder="Horsepower" id="addCarHorsepower" name="addCarHorsepower"> 
                            </div>
                            
                            <div class="field">
                                <p class="subtitle is-5" style="color:white; margin-top:10px;">Price</p>
                                <input type="text" class="input" placeholder="$$$" id="addCarPrice" name="addCarPrice"> 
                            </div>
                            
                            <div class="field">
                            <div class="container center-column white">
                            <button class='button' id="addCarEvent">Check</button></div>`;
                        featuresHTML += addCarFuel;
                        if ($('#addCarColor').is(':visible') && $('#addCarBodyType').is(':visible') && $('#addCarFuel').is(':visible')) {
                            $('#addCarColor').hide();
                            $('#addCarBodyType').hide();
                            $('#addCarFuel').hide();
                        }
                        $('#adminAddNewVehicle').append(featuresHTML);
                        ////////////////////////////// client side check \\\\\\\\\\\\\\\\\\\\\\\
                        document.querySelector('#addCarEvent').addEventListener('click', checkButton => {
                            checkButton.preventDefault();
                            let addCarSelectedBrand = document.querySelector('#brandSelect').value;
                            let addCarSelectedModel = document.querySelector('#modelSelect').value;
                            let addCarSelectedColor = document.querySelector('#addCarColor').value;
                            let addCarSelectedBodyType = document.querySelector('#addCarBodyType').value;
                            let addCarSelectedNumOfDoors = document.querySelector('#addCarNumOfDoors').value;
                            let addCarSelectedFuel = document.querySelector('#addCarFuel').value;
                            let addCarSelectedHP = document.querySelector('#addCarHorsepower').value;
                            let addCarInputImagePathname = document.querySelector('#addCarImagePathname').value;
                            let addCarInputPrice = document.querySelector('#addCarPrice').value;

                            if (typeof addCarSelectedBrand != 'null' && typeof addCarSelectedModel != 'null'
                                && typeof addCarSelectedColor != 'null' && typeof addCarSelectedBodyType != 'null'
                                && typeof addCarSelectedFuel != 'null' &&   typeof addCarInputImagePathname != 'null'
                                && typeof addCarInputPrice != 'null') {
                                $.ajax('adminModules/adminAddCar.php', {
                                    method: 'post',
                                    data: {
                                        addCarModelIdPHP: addCarSelectedModel,
                                        addCarColorPHP: addCarSelectedColor,
                                        addCarBodyTypePHP: addCarSelectedBodyType,
                                        addCarSelectedDoorsPHP:addCarSelectedNumOfDoors,
                                        addCarFuelPHP: addCarSelectedFuel,
                                        addCarSelectedHpPHP: addCarSelectedHP,
                                        addCarImgPathnamePHP: addCarInputImagePathname,
                                        addCarInputPricePHP : addCarInputPrice
                                    }, success: addCarServerResponse => {
                                        let response = JSON.parse(addCarServerResponse);
                                        console.log(response);
                                    }
                                });
                            }
                        }); ///event listener
                        ///////////////////////////////// end of client side check \\\\\\\\\\\\\\\\\
                    }
                });
            }); //brandSelect EventListener
        } //, error: function (error, status, xhr) {
        //     console.log(xhr);
        //     console.log(error);
        //     console.log(status);
        // }

    }); //ajax
} catch {
    alert('greska sa bazom ')
}
