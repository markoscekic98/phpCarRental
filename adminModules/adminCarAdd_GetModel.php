<?php
 if(isset($_POST['brandID'])){
	 require('../connINI.php');

 	$brandID = $_POST['brandID'] ;
 	if($brandID >0 && $brandID <100000){
		try{
			$getModel = $conn ->prepare(' select model, modelID from carmodel where brandID=:id ;');
			$getModel ->bindParam(':id', $brandID);
			$getModel ->execute();
			$model = $getModel ->fetchAll();
			if($getModel->rowCount()>0){
				echo json_encode($model);
			}
		} catch(PDOException $ex){
			//
		}
    }
}
