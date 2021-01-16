

function funDeleteCar(carID) {
 let carIdParam = carID;
 // console.log(carIdParam);

 $.ajax('adminModules/adminCar_Delete.php',{
  method:'post',
  data:{
   carID_toDelete:JSON.stringify(carIdParam)
  },
  success(response){
   // console.log(`Server response: ${JSON.parse(response)}`);
   let parsedDelete = JSON.parse((response));
   if(parsedDelete === `Deletion was successful`){
    document.getElementById(`tableRow-${carIdParam}`).innerHTML = ``;
   }
  }
 });
}