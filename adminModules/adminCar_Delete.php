<?php
if(isset($_POST['carID_toDelete'])){
	require('../connINI.php');
	$carID_toDel = json_decode($_POST['carID_toDelete']);
	//echo json_encode(gettype($carID_toDel)); int je
	if(is_int($carID_toDel) && $carID_toDel>0){
	try {
		$deleteCar = $conn->prepare('delete from car where carID=:id;');
		$deleteCar->bindParam('id', $carID_toDel);
		$deleteCar->execute();
		echo json_encode('Deletion was successful');
	} catch (PDOException $ex){
		echo json_encode('Database error: ');
	}
//		try{
//			$getModel = $conn ->prepare(' select model, modelID from carmodel where brandID=:id ;');
//			$getModel ->bindParam(':id', $brandID);
//			$getModel ->execute();
//			$model = $getModel ->fetchAll();
//			if($getModel->rowCount()>0){
//				echo json_encode($model);
//			}
//		} catch(PDOException $ex){
//			//
//		}
	}
}