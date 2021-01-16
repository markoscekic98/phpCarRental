<?php

require('../connINI.php');
try {
	$getUsers = $conn->query("select  userID, username, email, dob
        from user WHERE adminToken is null;")->fetchAll();
	if (count($getUsers) > 0) {
		echo json_encode($getUsers);
	}
} catch (PDOException $ex) {
	//
}