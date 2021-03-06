window.addEventListener('load', function () {
    document.getElementById('showAllCarsTable').addEventListener('click', () => {
        const carTableShown = document.getElementById('carTable');
        if (carTableShown != null) {
            $('#adminCarTable').html(``);
        } else {
            $.ajax('adminModules/adminCar_ShowCollumns.php', {
                method: 'get',
                success: (collumns) => {
                    let removeParsed = JSON.parse(collumns);
                    // console.log(removeParsed, typeof removeParsed);
                    let removeCarHTML = `<table class="table is-striped" id="carTable"> <tr>
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
        <tr class="is-info is-light"> <td class="is-info is-light"></td>  <td class="is-light"></td> <td class="is-light"></td> <td class="is-light"></td> 
        <td class="is-light"></td> <td class="is-light"></td> <td class="is-light"></td> <td class="is-light"></td>
        <td class="is-light"></td> <td class="is-light"></td> 
        <td class="is-light"></td> <td class="is-light"></td></tr> `;
                    $.ajax('adminModules/adminCar_Show.php', {
                        method: 'get',
                        success: function (data) {
                            dataP = JSON.parse(data);
                            // console.log(dataP);
                            dataP.forEach(dp => {
                                removeCarHTML += `<tr id="tableRow-${dp.carID}">
                 <td class="is-info" >${dp.carID} </td>
                 <td >${dp.brand} </td>
                 <td >${dp.model} </td>
                 <td >${dp.bodyType}</td>
                 <td >${dp.fuel} </td>
                 <td >${dp.hp} hp</td>
                 <td >${dp.numOfDoors} </td>
                 <td >${dp.year} </td>
                 <td >${dp.color} </td>
                 <td id="tdPrice-${dp.carID}">$${dp.initialPriceCar} </td>
                 <td>   <button class="is-warning is-light  button  tebleButtons updateCarModalButt modal-button" data-target = "#modal"  name="updateCar" value="${dp.carID}">   Update  </button>   </td>
                 <td>  <button class="is-danger is-light   button  tebleButtons deleteCar  " onclick="funDeleteCar(${dp.carID})" name="removeCar" value="${dp.carID}">  Delete  </button>   </td>
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
                            // if ($('#adminCarTable').is(':visible')) {
                            //     $('#adminCarTable').hide();
                            // } else {
                            $('#adminCarTable').html(removeCarHTML);
                            //     $('#adminCarTable').show();
                            // }

                            /// $('#adminCarTable').hide();

    // TODO move Modal & Click to new script
                            $(".modal-button").click(function () {
                                var target = $(this).data("target");
                                let targetValue = $(this).val();

                                localStorage.removeItem('carIDUpdate');
                                localStorage.setItem('carIDUpdate', JSON.stringify(targetValue));
                                document.querySelector('#adminCarUpdatePriceEvent').addEventListener('click', () => {
                                    let lsID = JSON.parse(localStorage.getItem('carIDUpdate'));
                                    let getTypedPrice = document.getElementById('adminCarUpdatePrice').value;
                                    // console.log(lsID, getTypedPrice);
                                    if (getTypedPrice > 10 && getTypedPrice < 100000) {
                                        $.ajax('adminModules/adminCar_UpdatePrice.php', {
                                            method: 'post',
                                            data: {
                                                updateCarIDPHP: lsID,
                                                newPricePHP: getTypedPrice
                                            },
                                            success: (updatePriceResponse) => {
                                                let parsedResp = JSON.parse(updatePriceResponse);
                                                // console.log(updatePriceResponse);
                                                if (parsedResp === `Price is updated`) {
                                                    document.getElementById(`tdPrice-${lsID}`).innerText = `$${getTypedPrice}`;
                                                    document.getElementById('resultOfUpdateCar').innerHTML = `<p class="button is-success">${parsedResp}</p>`;
                                                    // console.log('doslo');
                                                }
                                            }
                                        });
                                    }
                                    if (getTypedPrice < 10 || getTypedPrice > 100000) {
                                        swal('Error');
                                    }
                                });
                                // console.log(targetValue);
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
        }
    });
});