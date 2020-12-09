<?php
session_start();
$regErrors = array();
ob_start();
if (isset($_POST['usernameAjax']) && isset($_POST['dobAjax']) && isset($_POST['emAjax']) && isset($_POST['passAjax']) && isset($_POST['csrfTokenLogin'])) {
	$username = filter_var($_POST['usernameAjax'], FILTER_SANITIZE_STRING);
	$userEmail = filter_var($_POST['emAjax'], FILTER_SANITIZE_STRING);
	$userPassword = filter_var($_POST['passAjax'], FILTER_SANITIZE_STRING);
	$userDateOfBirth = $_POST['dobAjax'];
	$dobTemp = DateTime::createFromFormat('Y-m-d', $userDateOfBirth);
	$dob = $dobTemp->format('Y-m-d');
	//// bilo bi dobro staviti u try catch blok date \\\
	$csrfFromClient = filter_var($_POST['csrfTokenLogin'], FILTER_SANITIZE_STRING);
	define('usernameRegEx', '/^[a-z0-9]{4,13}$/');
	define('emailRegEx', '/^[a-z0-9]+@[a-z]{2,8}\.[a-z]{2,3}$/');
	define("passwordRegEx", "/^[a-z0-9]{5,20}$/");


//    $wordBlockList =['select','delete', 'drop', 'true'];
//    if(strpos($username, (string)$wordBlockList) !== false || strpos($userEmail, $wordBlockList) !== false || strpos($userPassword, $wordBlockList) !== false){
//        // consoleLog("Detektovana rec koja je zabranjena");
//        $sqlInjDetected = true;
//        echo "<script>alert('Detektovan pokusaj sql injection-a')</script>";
//        // header("Location: {$url}/contact.html");
//    }

	if (!preg_match(usernameRegEx, $username)) {
		array_push($regErrors, "Username is not valid. valid username must include alpanumeric word 4 - 13 in length.");
	}
	if (!preg_match(emailRegEx, $userEmail)) {
		array_push($regErrors, "Email is not valid, valid email must include 10 letters and numbers only with @gmail.com for example.");
	}
	if (!preg_match(passwordRegEx, $userPassword)) {
		array_push($regErrors, "Password must containt letters & numbers only, minimal password lenght is 5, maximum is 12.");
	}
	$userPasswordSHA = sha1($userPassword);


	if (empty($dob) || time() < strtotime('+18 years', strtotime($dob))) {
		array_push($regErrors, "User must be at least 18.");
		if (time() < strtotime('+150 years', strtotime($dob))) {
			array_push($regErrors, "Take it easy Captain America");
		}
	}
	if ($_SESSION['csrf_token'] !== $csrfFromClient) {
		array_push($regErrors, "Prevented cross site cookie forgery attack");

	}
	if (count($regErrors) !== 0) {
		if (count($regErrors) === 1) {
			echo json_encode($regErrors[0]);
		} else {

			echo json_encode(implode(', ', $regErrors));
		}
	}

	if (count($regErrors) === 0) {
		// $_SESSION['registeredUser'] = '';
		require('connINI.php');

		try {
			/////////////// checking if there is already user with that email \\\\\\\\\\\\\\\\\\\\\
			$checkExistingEmail = $conn->prepare("SELECT email FROM kola.user where email =:email ;");
			$checkExistingEmail->bindParam(":email", $userEmail);
			$checkExistingEmail->execute();
			if ($checkExistingEmail->rowCount() > 0) {

				$serverResponse = "Given email address is already used";
				echo json_encode($serverResponse);
			}
			/////////////////// check if there is user with that username \\\\\\\\\\\\\\\\\\\\\\\\\
			$checkExistingUsername = $conn->prepare("SELECT username FROM kola.user where username =:username ;");
			$checkExistingUsername->bindParam(':username', $username);
			$checkExistingUsername->execute();
			if ($checkExistingUsername->rowCount() > 0) {

				$serverResponse = "Given username is already used";
				echo json_encode($serverResponse);
			}
			////////// adding new user \\\\\\\\
			if ($checkExistingEmail->rowCount() < 1 && $checkExistingUsername->rowCount() < 1) {
				$insertNewUser = $conn->prepare('INSERT INTO kola.user(username,email,password,DOB)
                  VALUES(:username, :email,:password,:dob);');
				$insertNewUser->bindParam(":username", $username);
				$insertNewUser->bindParam(":email", $userEmail);
				$insertNewUser->bindParam(":password", $userPasswordSHA);
				$insertNewUser->bindParam(':dob', $dob);
				$insertNewUser->execute();

				$serverResponse = 'Your registration was successful';
				echo json_encode($serverResponse);
			}
		} catch (PDOException $ex) {
			echo json_encode("Database error: {$ex}");
		}

	}
}


?>