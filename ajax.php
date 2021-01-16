<?php
//phpinfo();
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
// if(isset($_POST['fileFunctionCall'])){
//	 $fileUpld = $_FILES['fileTesting']['name'];
//	 $carsImagePath = 'http://localhost/bulmaPHP/img/cars/';
//	// move_uploaded_file($_FILES['fileTesting']['tmp_name'], $carsImagePath);
//	 echo json_encode("Server got data " . $fileUpld);
//
// } else{
// 	echo json_encode("Server didnt got data");
// }


//allowed file types
$arr_file_types = ['image/png', 'image/gif', 'image/jpg', 'image/jpeg'];
if(isset($_FILES['file'])) {
	$fileGotten = $_FILES['file']['name'];
if (in_array($_FILES['file']['type'], $arr_file_types)) {
	$destination_path = getcwd().DIRECTORY_SEPARATOR;
	$target_path = $destination_path . 'uploads/carPic//'. basename($_FILES['file']['name']);
	move_uploaded_file($_FILES['file']['tmp_name'], $target_path);
	echo json_encode("success, " . $fileGotten);
} else{
	echo json_encode("Not allowed file extension");
}
//
//if (!file_exists('uploads')) {
//	mkdir('uploads', 0777);
//}

//move_uploaded_file($_FILES['file']['tmp_name'], 'uploads' . $_FILES['file']['name']);
//	$destination_path = getcwd().DIRECTORY_SEPARATOR;
//	$target_path = $destination_path . 'uploads/carPic//'. basename($_FILES['file']['name']);
//	move_uploaded_file($_FILES['file']['tmp_name'], $target_path);
//	echo json_encode("success, " . $fileGotten);

}
else{
	echo json("fail, no files");
}
//die();
