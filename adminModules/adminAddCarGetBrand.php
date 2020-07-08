<?php

try {
	$addCar = $conn->query("select * from carbrand;")->fetchAll();
	if (count($addCar) > 0) {
		//echo json_encode($addCar);
		var
		$htmlGetBrands = '';
		foreach ($addCar as $brend) {
			$htmlGetBrands .= "<option name='{$brend->brandID}' value='{$brend->brandID}'  data='{$brend->brandID}'>{$brend->brand} </option>";
			//<option value="${br.brandID}" data="${br.brandID}">${br.brand}</option>
		}
		echo $htmlGetBrands;
	}
} catch (PDOException $ex) {
	//
}
