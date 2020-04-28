<?php
 try{
 	require('../connINI.php');
 	$allCollumnsCarTable = $conn ->query('SHOW COLUMNS FROM car;')->fetchAll();
 	if(count($allCollumnsCarTable)>0){
 		$tempArr=[];
 		for($i=1, $iMax = count($allCollumnsCarTable); $i< $iMax; $i++){
 			$tempArr[]=$allCollumnsCarTable[$i]->Field;
	    }
 		echo json_encode($tempArr);
    }
 }  catch (Exception $ex){
 	echo $ex;
 }