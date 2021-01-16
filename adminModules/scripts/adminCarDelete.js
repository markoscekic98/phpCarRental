// window.addEventListener('load',()=>{
//     console.log('loaded');
//    document.querySelectorAll('.deleteCar').forEach(delCar=>{
//        delCar.addEventListener('click',carDelClicked=>{
//            console.log('clicked');
//            let delCarVal = delCar.value;
//            console.log(delCarVal);
//        });
//
//    });
//
// });

function funDeleteCar(carID) {
 let carIdParam = carID;
 console.log(carIdParam);
 $.ajax('adminModules/adminCar_Delete.php',{
  method:'post',
  contentType: false,
  processData: false,
  data:{
   csrf:csrfToken,
   carID_toDelete:carIdParam
  },
  success(response){
   console.log(`Server response: ${response}`);
  }
 });
}