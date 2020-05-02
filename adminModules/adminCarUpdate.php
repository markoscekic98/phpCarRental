<?php
if (isset($_POST['newPricePHP']) && isset($_POST['updateCarIDPHP'])) {
	$newPrice = $_POST['newPricePHP'];
	$carIdUpdatePrice = $_POST['updateCarIDPHP'];

	try {
		include('../connINI.php');
		//first to check ih gotten ID are present in database
		$checkID = $conn->query("select carID from car;")->fetchAll();
		$validID = false;
		if (count($checkID) > 0) {
			foreach ($checkID as $name) {
				if ($carIdUpdatePrice === $name->carID) {
					$validID = true;
					break;
				}
			}
		}
		if ($newPrice > 10 && $newPrice < 100000 && $validID === true) {
			$updateStm = $conn ->prepare("update car set initialPriceCar = :newPrice where carID = :id ;");
			$updateStm ->bindParam(':newPrice', $newPrice);
			$updateStm ->bindParam(':id',$carIdUpdatePrice );
			$updateStm->execute();
			echo json_encode('Price is updated');
		} else{
			echo json_encode("Please enter correct information and try again");
		}
	} catch (PDOException $pdoEx) {
		echo json_encode("Please enter correct information and try again");
	}//catch

} else {
	//header('404.php');
}//else