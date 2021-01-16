<?php
//echo "dobijena slika {$_FILES['image']['name']}";
$serverResponse = '';
try {

	if (isset($_POST['addCarModelIdPHP']) && isset($_POST['addCarColorPHP'])
		&& isset($_POST['addCarBodyTypePHP']) && isset($_POST['addCarSelectedDoorsPHP'])
		&& isset($_POST['addCarFuelPHP']) && isset($_POST['addCarHpPHP'])
		    && isset($_POST['addCarPricePHP'])
		&& isset($_POST['addCarYearPHP'])
	) {
		$gottenModelID = $_POST['addCarModelIdPHP'];
		$gottenColor = $_POST['addCarColorPHP'];
		$gottenBodyType = $_POST['addCarBodyTypePHP'];
		$gottenNumOfDoors = $_POST['addCarSelectedDoorsPHP'];
		$gottenFuel = $_POST['addCarFuelPHP'];
		$gottenYear = $_POST['addCarYearPHP'];
		$gottenHP = (int)$_POST['addCarHpPHP'];
		//$carsImagePath = $_FILES['image']['name'];
		//echo "dobijena slika";
		//$gottenImagePath = $carsImagePath."".$_POST['addCarImgPathnamePHP']; //'img/cars/Audi-Q5.jpg'
		$gottenPrice = $_POST['addCarPricePHP'];


		$nonValid = [];
		$validFileTypes = ['image/jpg', 'image/jpeg', 'image/png'];
		if ($gottenModelID === 'null') {
			$nonValid[] = 'Model';
		}
		if ($gottenColor === 'null') {
			$nonValid[] = 'Color';
		}
		if ($gottenBodyType === 'null') {
			$nonValid[] = 'Body type';
		}
		if ($gottenNumOfDoors === 'null') {
			$nonValid[] = 'Doors';
		}
		if ($gottenNumOfDoors === 'null') {
			$nonValid[] = 'Doors';
		}
		if ($gottenFuel === 'null') {
			$nonValid[] = 'Fuel';
		}
		if ($gottenYear === 'null') {
			$nonValid[] = 'production year';
		}
		if ($gottenHP < 1 && $gottenHP > 3000) {
			$nonValid[] = 'Horsepower';
		}
//		if($gottenImagePath<5 && $gottenImagePath >59){
//			$nonValid[] = 'Image';
//		}
		if ($gottenPrice < 5 || $gottenPrice>99999) {
			$nonValid[] = 'Price';
		}

		if (count($nonValid) < 1) {
			try {
				require('../connINI.php');
				$tmpImage = '/image';
				$addCar = $conn->prepare("INSERT INTO car(modelID,fuel,numOfDoors,bodyType,hp,
        		 initialPriceCar, image, color,year)
        		values(:modelID, :fuel, :doors, :body,:hp, :price,:image,  :color, :year );"); //"image
				$addCar->bindParam(":modelID", $gottenModelID);
				$addCar->bindParam(":fuel", $gottenFuel);
				$addCar->bindParam(":doors", $gottenNumOfDoors);
				$addCar->bindParam(":body", $gottenBodyType);
				$addCar->bindParam(":hp", $gottenHP);
				$addCar->bindParam(":price", $gottenPrice);
				$addCar->bindParam(":image", $tmpImage);
				$addCar->bindParam(":color", $gottenColor);
				$addCar->bindParam(":year", $gottenYear);
				$addCar->execute();

				$serverResponse = "Car successfully added to database";

			} catch (PDOException $ex) {
				$serverResponse = "Problem with database: {$ex}, please try again later,";
			}//catch
		} else {
			$serverResponse = $nonValid;
		}
		echo json_encode($serverResponse);
	}
} catch (Exception $ex) {
	$serverResponse = 'Please enter correct data' . $ex;
	echo $serverResponse;
}