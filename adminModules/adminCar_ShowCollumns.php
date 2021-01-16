<?php
 try{
 	require('../connINI.php');
 	$allCollumnsCarTable = $conn ->query('SHOW COLUMNS FROM car;')->fetchAll();
 	if(count($allCollumnsCarTable)>0){
 		$tempArr=[];
 		foreach ($allCollumnsCarTable as $name ){
 			$tempArr[]=$name->Field;
	    }
 		echo json_encode($tempArr);
    }
 }  catch (Exception $ex){
 	echo $ex;
 }