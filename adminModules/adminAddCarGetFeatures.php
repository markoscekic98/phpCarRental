<?php
require('../connINI.php');
try {/// could be optimized for only one query 
	$getFeatureColor = $conn->query('select distinct(color) from car;')->fetchAll();
	$getFeatureBodyType = $conn->query('select distinct(bodyType) from car;')->fetchAll();
	$getFeatureFuel = $conn->query('select distinct(fuel) from car;')->fetchAll();
	if(count($getFeatureColor)>0 && count($getFeatureBodyType)>0 && count($getFeatureFuel)){
		$arrFeatures = [$getFeatureColor, $getFeatureBodyType, $getFeatureFuel];
		echo json_encode($arrFeatures);
	}
}
catch (PDOException $ex){
	echo $ex;
}