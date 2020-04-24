<?php
session_start();
$loginErrors = array();


if(isset($_POST['usernameLogin'])  && isset($_POST['passwordLogin'])){


    $usernameLogin = filter_var($_POST['usernameLogin'], FILTER_SANITIZE_STRING);
	$passwordLogin = filter_var($_POST['passwordLogin'], FILTER_SANITIZE_STRING);

    define('usernameRegEx', '/^[a-z0-9]{4,13}$/');
	define("passwordRegEx", "/^[a-z0-9]{5,20}$/");

	if(!preg_match(usernameRegEx, $usernameLogin)){
        array_push($userErrors,"Username is not valid. For username to be valid must be alphanumerical word, 4 - 13 in length");
    }
    if(!preg_match(passwordRegEx, $passwordLogin)){
        array_push($userErrors,"Password must contain letters & numbers only. Minimal password length is 5, maximum is 12");
    }
    if(count($loginErrors)<1){
        require('connINI.php');
        try{
            $loginAttempt = $conn ->prepare("select username from user where username =:userLogin;");
            $loginAttempt ->bindParam(':userLogin',$usernameLogin);
            $loginAttempt ->execute();


            if($loginAttempt->rowCount()>0){

                $passwordSHA = sha1($passwordLogin);
                $login = $conn ->prepare("select userID from user where username = :userLogin AND password = :passwordSHA ;");
                $login->bindParam(':userLogin',$usernameLogin);
                $login ->bindParam(':passwordSHA', $passwordSHA);
                $login->execute();
               $res = $login->fetch();

				if($login->rowCount()>0){
					echo json_encode("Successful login");
					$loginTime = date("Y-m-d H:i:s");
					$_SESSION['userLoggedIN'] =  $res;
                	$_SESSION['userLogInTimestamp'] = $loginTime;
					// header("Location: ../account.php");
				} else {
                    echo json_encode("Check password and try again");
				}//else
            } else{
                echo json_encode("No username found, check username or register if you didnt");
            }///else
       }   catch (PDOException $ex){
            echo json_encode("Database error");
       }//catch
    }//if(countErrors)

}///if(!empty($_POST("username"))