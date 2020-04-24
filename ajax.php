<?php
phpinfo();
//include "connINI.php";
//session_start();
/////////////// ajax jquery
////$showAll = $conn->query("select brand from car_brand;");
////$showAll->execute();
////if($showAll->rowCount()>0){
////   foreach ($showAll as $brend){
////       echo "<h2>{$brend['brand']}</h2>";
////   }
////}
//////////////////////// ajax jquery, ver 2
////$suggestArr = array('marko', 'marko45', 'marko432');
////if(isset($_POST['suggestPHP'])){
////    $name = $_POST['suggestPHP'];
////    foreach($suggestArr as $sugArr){
////        if(strpos($sugArr, $name)!== false){
////            echo "{$sugArr}/";//. "<br>" . strpos($sugArr, $name);
////        }
////    }
////  //  http_response_code(200);
////  //  echo "Podatak iz php: {$name}";
////}
////http_response_code(400);
////echo $_SERVER['PHP_SELF'];
////echo "<br>";
//echo "{$_SERVER['HTTP_HOST']}{$_SERVER['PHP_SELF']}";
//echo "<br>";
//
//
//
//function getUserIpAddr(){
//	if(!empty($_SERVER['HTTP_CLIENT_IP'])){
//		//ip from share internet
//		$ip = $_SERVER['HTTP_CLIENT_IP'];
//	}elseif(!empty($_SERVER['HTTP_X_FORWARDED_FOR'])){
//		//ip pass from proxy
//		$ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
//	}else{
//		$ip = $_SERVER['REMOTE_ADDR'];
//	}
//	return $ip;
//}
//$ip = getUserIpAddr();
//if(isset($_SESSION['userLoggedIN']) && isset($_SESSION['userLogInTimestamp'])){
//	$sessijaUserLog = $_SESSION['userLoggedIN'] ->userID;
//	$sesijaUserLogTimestamp = $_SESSION['userLogInTimestamp'];
//	//unset($_SESSION['userLogInTimestamp']); // --za brisanje vrednosti iz date session
//	global $ip;
//	$loginTime = new DateTime();
//	echo "{$sessijaUserLog}, {$ip}, {$loginTime ->getTimestamp()} <br>";
//}
//
//
