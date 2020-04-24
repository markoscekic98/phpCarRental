<?php
require('../connINI.php');
try{
	$addCar = $conn ->query("select * from carbrand;")->fetchAll();
	if(count($addCar)>0){
		echo json_encode($addCar);
	}
}
catch (PDOException $ex){
	//
}

