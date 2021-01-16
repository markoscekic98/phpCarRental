<?php
function CSRFTokenIni()
{
	$csrfToken = base64_encode(openssl_random_pseudo_bytes(64, $crypto_strong));
//	$filterCSRF_Token = htmlspecialchars($csrfToken, ENT_QUOTES, 'UTF-8');
	if (!isset($_SESSION['csrf_token'])) {
		$_SESSION['csrf_token'] = $csrfToken;
		return $csrfToken;
	} else {
		return $_SESSION['csrf_token'];
	}
}