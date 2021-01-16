<?php
//7.4
//$statusCode = 170;
//switch($statusCode){
//	case 100;
//	case 150 : $message =null; break;
//	case 170 : $message = 'ne moze'; break;
//	case 200 : $message = 'isto ne moze'; break;
//	case 220 : $message = 'pa ne moze takodje'; break;
//	default : $message= 'nema broj'; break;
//	echo $message;
//}

//8.0
$message = match ($statusCode) { - }