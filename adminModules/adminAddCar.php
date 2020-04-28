<?php
$serverResponse = '';
try {
	if (isset($_POST['addCarModelIdPHP']) && isset($_POST['addCarColorPHP'])
		&& isset($_POST['addCarBodyTypePHP']) && isset($_POST['addCarSelectedDoorsPHP'])
		&& isset($_POST['addCarFuelPHP']) && isset($_POST['addCarSelectedHpPHP'])
		&& isset($_POST['addCarImgPathnamePHP'])&& isset($_POST['addCarInputPricePHP'])
		&& isset($_POST['addCarYearPHP'])
	) {
		$gottenModelID = $_POST['addCarModelIdPHP'];
		$gottenColor = $_POST['addCarColorPHP'];
		$gottenBodyType = $_POST['addCarBodyTypePHP'];
		$gottenNumOfDoors = $_POST['addCarSelectedDoorsPHP'];
		$gottenFuel = $_POST['addCarFuelPHP'];
		$gottenYear = $_POST['addCarYearPHP'];
		$gottenHP = (int)$_POST['addCarHpPHP'];
		$gottenImagePath = "img/cars/{$_POST['addCarImgPathnamePHP']}"; //'img/cars/Audi-Q5.jpg'
		$gottenPrice = $_POST['addCarPricePHP'];



		$nonValid = [];
		if($gottenModelID === 'null'){
		$nonValid[] = 'Model';
		}
		if($gottenColor === 'null'){
			$nonValid[] = 'Color';
		}
		if($gottenBodyType === 'null'){
			$nonValid[] = 'Body type';
		}
		if($gottenNumOfDoors === 'null'){
			$nonValid[] = 'Doors';
		}
		if($gottenNumOfDoors === 'null'){
			$nonValid[] = 'Doors';
		}
		if($gottenFuel === 'null'){
			$nonValid[] = 'Fuel';
		}
		if($gottenYear === 'null'){
			$nonValid[] = 'production year';
		}
		if($gottenHP<1 && $gottenHP >3000){
			$nonValid[] = 'Horsepower';
		}
		if($gottenImagePath<5 && $gottenImagePath >59){
			$nonValid[] = 'Image';
		}
		if($gottenImagePath>5){
			$nonValid[] = 'Price';
		}
		if(count($nonValid)<1) {

			try {
				require('../connINI.php');
				$addCar = $conn->prepare('INSERT INTO kola.car(modelID,fuel,numOfDoors,bodyType,hp,
        		 initialPriceCar,image,color,year)
        		values(:modelID, :fuel, :doors, :body,:hp, :price, :imgPath, :color, :year );');
				$addCar->bindParam(":modelID", $gottenModelID);
				$addCar->bindParam(":fuel", $gottenFuel);
				$addCar->bindParam(":doors", $gottenNumOfDoors);
				$addCar->bindParam(":body", $gottenBodyType);
				$addCar->bindParam(":hp", $gottenHP);
				$addCar->bindParam(":price", $gottenPrice);
				$addCar->bindParam(":imgPath", $gottenImagePath);
				$addCar->bindParam(":color", $gottenColor);
				$addCar->bindParam(":year", $gottenYear);
				$addCar->execute();
				$serverResponse = "Car successfully added to database {$gottenModelID}, {$gottenFuel}, {$gottenNumOfDoors}, {$gottenBodyType}, {$gottenPrice}, {$gottenImagePath}, {$gottenColor}, {$gottenYear}";
			} catch (PDOException $ex) {
				$serverResponse = "Given data are correct but there is problem with database, please try again later";
			}//catch
		}   else{
			$serverResponse = $nonValid;
		}
		echo json_encode($serverResponse);
	}
} catch (Exception $ex) {
	$serverResponse = 'Please enter correct data' . $ex;
	echo json_encode($serverResponse, JSON_THROW_ON_ERROR, 512);
}