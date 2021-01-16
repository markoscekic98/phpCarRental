<?php
require('../connINI.php');
try{
	$getAllCars = $conn ->query("select   carbrand.brand,  carmodel.model, car.carID ,car.image, 
       car.initialPriceCar, car.color, car.bodyType, car.year,car.fuel, car.hp, car.numOfDoors
        from (car inner join carmodel ON car.modelID = carmodel.modelID) inner join  carbrand on  carmodel.brandID = carbrand.brandID;")->fetchAll();
	if(count($getAllCars)>0){
		echo json_encode($getAllCars);
	}
}
catch (PDOException $ex){
	//
}