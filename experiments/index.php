<?php
include_once('csrf.php');
$date = new DateTime();
$timestamp = $date->getTimestamp();
function auth($param)
{ //not called anywhere
	$filterAuth = htmlspecialchars($param, ENT_QUOTES, 'UTF-8');
	echo $filterAuth;
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta name="csrf-token" content="<?=
	fun_csrf();//csrf. php
	?>">
</head>
<body>
<a href="link.php?userID=<?= $timestamp ?>">Link</a>
<a href="index.php?userID2=<?= $timestamp ?>">Index</a>

<button id="csrf_test"> CSRF test</button>
<script src="https://code.jquery.com/jquery-3.4.1.js" integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
        crossorigin="anonymous"></script>
<script type="text/javascript" src="main.js"></script>

</body>

</html>

