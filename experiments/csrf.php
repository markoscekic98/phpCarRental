<?php
session_start();

$csrfToken = 'GHKUgdsu6754HHifksodjfHUHukGyFGuhG789G98Gj8ghy';
function fun_csrf()
{

	//['index', 'contact'];
	global $csrfToken;
	$filterCSRF_Token = htmlspecialchars($csrfToken, ENT_QUOTES, 'UTF-8');
	$_SESSION['csrf_tokenUnofficial'] = $filterCSRF_Token;
	return $_SESSION['csrf_tokenUnofficial'];//[0];
}//setting the csrf token then called by appropriate function
if (isset($_POST['csrfAjx'])) {
	$csrfAjx = $_POST['csrfAjx'];
	if ($csrfAjx == $csrfToken) {
		echo json_encode('Secure');
	} else {
		echo json_encode('Not secure');
		session_destroy();
	}
}