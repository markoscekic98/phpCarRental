<?php
if(isset($_FILES['file'])) {
	$fileGotten = $_FILES['file']['name'];

	echo json_encode("success, " . $fileGotten);
}
else{
	echo json_encode("fail, no files");
}