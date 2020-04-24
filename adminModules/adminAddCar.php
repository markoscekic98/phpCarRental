<?php
$serverResponse = '';
try {
	if (isset($_POST['addCarModelIdPHP']) && isset($_POST['addCarColorPHP'])
		&& isset($_POST['addCarBodyTypePHP']) && isset($_POST['addCarSelectedDoorsPHP'])
		&& isset($_POST['addCarFuelPHP']) && isset($_POST['addCarSelectedHpPHP'])
		&& isset($_POST['addCarImgPathnamePHP'])&& isset($_POST['addCarInputPricePHP'])) {

		$gottenModelID = $_POST['addCarModelIdPHP'];
		$gottenColor = $_POST['addCarColorPHP'];
		$gottenBodyType = $_POST['addCarBodyTypePHP'];
		$gottenNumOfDoors = $_POST['addCarSelectedDoorsPHP'];
		$gottenFuel = $_POST['addCarFuelPHP'];
		$gottenHP = $_POST['addCarSelectedHpPHP'];
		$gottenImagePath = strstr($_POST['addCarImgPathnamePHP'], "img/cars/"); //'img/cars/Audi-Q5.jpg'
		$gottenPrice = $_POST['addCarInputPricePHP'];
		if (is_numeric($gottenModelID) && gettype($gottenColor) != 'null' && gettype($gottenBodyType) != 'null'
			&& gettype($gottenNumOfDoors) != 'null'	&&  gettype($gottenFuel) != 'null'
			&& $gottenHP > 0 && $gottenHP < 2500    &&  gettype($gottenImagePath) == 'string'){
			try {
          require('../connINI.php');
		$addCar = $conn ->prepare('start transaction;INSERT INTO `kola`.`car`(`modelID`,`fuel`,numOfDoors`,`bodyType`,`hp`,initialPriceCar`,`image`,color`,`year`)
        values(:modelID, :fuel, :doors, :body, :price, :imgPath, :color, :year );ROLLBACK;');
		$addCar->bindParam(":modelID",$gottenModelID );
		$addCar->bindParam(":fuel",$gottenFuel );
		$addCar->bindParam(":doors",$gottenNumOfDoors );
		$addCar->bindParam(":body",$gottenBodyType );
		$addCar->bindParam(":price",$gottenPrice );
		$addCar->bindParam(":imgPath", $gottenImagePath);
				$addCar->bindParam(":color",$gottenColor);
				$addCar->bindParam(":year",);
//				start transaction;
//INSERT INTO `kola`.`car`(`modelID`,`fuel`,numOfDoors`,`bodyType`,`hp`,initialPriceCar`,`image`,color`,`year`)
//VALUES(20, 'gas', 4, 'coupe',350, 70, 'slika/slika.jpg', 'blue',2019);
//ROLLBACK;

			}   catch(PDOException $ex){
				$serverResponse ="Given data are correct but there is problem with database, please try again later";
			}//catch

		}   else{
			$serverResponse ="Wrong data sent to database";
		}//else




		echo json_encode($serverResponse);
	} else {
		$serverResponse = 'server nije dobio podatke';
		echo json_encode($serverResponse);
	}
} catch (Exception $ex) {
	$serverResponse = 'greska, podaci nisu prosledjeni serveru' . $ex;
	echo json_encode($serverResponse, JSON_THROW_ON_ERROR, 512);
}