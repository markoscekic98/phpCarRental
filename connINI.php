<?php
$pdoDBServer = 'localhost';
$pdoDB = 'kola';
$pdoUserName = 'root';
$pdoPassword='';
try{
$conn = new PDO("mysql:host=$pdoDBServer;dbname=$pdoDB", $pdoUserName, $pdoPassword);
	$conn->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_OBJ);
}   catch(PDOException $connErr){
        echo "Error with database";
}