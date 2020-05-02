<?php
session_start();
ob_start();
//$url = 'http://localhost/bulmaPHP';
//if($_SERVER['REQUEST_METHOD'] != 'POST'){
//	// header("Location: {$url}/login.html");
//}
?>

<!DOCTYPE html>
<html lang="en">


<?php
include('include/head.php');
?>

<link rel="stylesheet" href="https://unpkg.com/bulma-modal-fx/dist/css/modal-fx.min.css" />
<body>
<main class="hero  is-fullheight">
	<?php include('include/header.php');
	// hocu da napravim accourdian style za nekoliko radnji:
	//        - dodavanje vozila
	//        - brisanje vozila
	//        - apdejtovanje vozila
	// svaki od ovih ce biti jedno ispod drugog i bice skupljeno, kada se pritisne na neki od ponudjenih, to ce se prosiriti

	?>
  
  <div class="button clearBg">
    <button class="button is-medium adminCarManipulationButtons" id="addNewCarShow" >Add new car</button>
	</div>
	
	<div  id="adminAddNewVehicle" style="align-items:flex-start;margin:0 auto;max-width:975px;text-align:left">
	</div>
	
	<!-- <div class="button clearBg">
    <button class="button is-medium adminCarManipulationButtons" id="removeCarShow">Remove existing car</button>
	</div> -->
	<div  id="adminRemoveCarDiv" style="align-items:flex-start;margin:0 auto;max-width:975px;text-align:left">
	</div>

	<?php
	include('include/footer.php');
	?>
</main>
<script src="https://code.jquery.com/jquery-3.4.1.js" integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
        crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/js-cookie@beta/dist/js.cookie.min.js"></script>
<script src="https://use.fontawesome.com/releases/v5.1.0/js/all.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert"></script>
<script type="text/javascript" src="js/script.js"></script>
<script type="text/javascript" src="adminModules/scripts/adminAddCar.js"></script>
</body>

</html>
