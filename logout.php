<?php
session_start();
if(isset($_SESSION['userLoggedIN']) && isset($_SESSION['userLogInTimestamp'])) {
	if(!empty($_SERVER['REMOTE_ADDR'])){
		$ip = $_SERVER['REMOTE_ADDR'];
	}
	$sesijaUserLog = $_SESSION['userLoggedIN']->userID;
	$sesijaUserLogTimestamp = $_SESSION['userLogInTimestamp'];

	include "connINI.php";
	try {
		$logoutQuery = $conn->prepare("INSERT INTO kola.user_login_log(userID, logInTime, logOutTime, user_ip)  
			VALUES('$sesijaUserLog', '$sesijaUserLogTimestamp', current_timestamp(), '$ip');");
		//// to do, bindovati podatke

		$logoutQuery ->execute();
		echo "added login log ";
		echo "<br>{$sesijaUserLog}, {$ip}, {$sesijaUserLogTimestamp}";
		unset($_SESSION['userLoggedIN']);
		unset($_SESSION['userLogInTimestamp']);
		session_destroy();

		//header("Location: products.html");
	}   catch (PDOException $logoutErr){
		echo "Logout Error";
	}

}
else{
	echo "User is already logged out";
}