<?php
include "connINI.php";
        $showData = $conn->query("select   carbrand.brand,  carmodel.model, car.carID ,car.image, car.initialPriceCar, car.color, car.bodyType, car.year,car.fuel
        from (car inner join carmodel ON car.modelID = carmodel.modelID) inner join  carbrand on  carmodel.brandID = carbrand.brandID;")
	        ->fetchAll(PDO::FETCH_ASSOC);
      //  $showData->execute();
        if(count($showData)>0){
            $dataArr ='';
         echo json_encode($showData);
          //  echo "<table id='tableDataDataBase'>";
            //foreach ($showData as $data) {
   // echo "
   // <tr>
     //   <td><img src='{$data['image']}' width='50px' height='50px'></td>
     //   <td>{$data['brand']}    {$data['model']}</td>
      //  <td>$ {$data['initialPriceCar']}  </td>
   // </tr>"; // echo "<script>console.log('{$data['brand']}');</script>";
   // }//foreach
  //  echo "</table>";
}//if