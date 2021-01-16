<?php
session_start();

if(isset($_SESSION['userLoggedIN'])){
//include "connINI.php";
	$korisnik = $_SESSION['userLoggedIN'];
echo "Korisnik: {$korisnik ->userID}  se ulogovao";
echo "<br>";

echo '<a href="logout.php"><button name="logout" id="logout">Log Out</button></a>';

} else{//ako nije upisan userLog nego je neko direkto usao na stranic account.php
	header("Location: login.php"); /// or 404
}


