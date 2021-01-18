<?php
session_start();
ob_start();
require('connINI.php');
include('security/antiCSRF.php');
//$url = 'http://localhost/bulmaPHP';
//if($_SERVER['REQUEST_METHOD'] != 'POST'){
//	// header("Location: {$url}/login.html");
//}
?>

<!DOCTYPE html>
<html lang="en">


<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="MK International is world renown for its excellent mechanical keyboards"/>
    <meta name="csrf-token" content="<?= CSRFTokenIni() ?>">
    <title>Kola leading car rental</title>
    <link rel="shortcut icon" href="img/strWheel.png" id="ikonica" type="image/x-icon"/>
    <!-- <link rel="stylesheet" href="css/debug.css"> -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css">
    <link rel="stylesheet" href="css/helpers.css">
    <!--    <link rel="stylesheet" href="css/grid.css">-->
    <link rel="stylesheet" href="css/stylePhp.css">
    <!--    <link rel="stylesheet" href="css/bulma-social.min.css">-->
    <!--    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css">-->
    <link rel="stylesheet" href="https://unpkg.com/bulma-modal-fx/dist/css/modal-fx.min.css"/>
</head>


<body>
<main class="hero  is-fullheight">
    <?php include('include/header.php');
    // hocu da napravim accourdian style za nekoliko radnji:
    //        - dodavanje vozila
    //        - brisanje vozila
    //        - apdejtovanje vozila
    // svaki od ovih ce biti jedno ispod drugog i bice skupljeno, kada se pritisne na neki od ponudjenih, to ce se prosiriti

    ?>

    <section class="section  ">
<!--        <div class="container ">-->
<!--            <div class="tile is-ancestor is-centered">-->
<!--                <div class="tile is-6 is-vertical is-parent m-3  notification darker adminTiles">-->
<!--                    <div class="tile is-child ">-->
<!--                        <p class="title has-text-light">Users</p>-->
<!--                        <div class="buttons ">-->
<!--                           <button class="button is-medium is-info is-outlined is-light " id="peropero">Show all-->
<!--                                users-->
<!--                           </button>-->
<!--                           <button class="button is-medium is-info is-outlined is-light " id="">Add new user</button>-->
<!--                           <button class="button is-medium is-warning is-outlined is-light " id="">Update user info-->
<!--                            </button>-->
<!--                           <button class="button is-medium is-danger is-outlined is-light " id="">Delete user</button>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                </div>-->
                <!--                    <div class="tile is-6 is-vertical is-parent m-3  notification darker adminTiles">-->
                <!--                        <div class="tile is-child ">-->
                <!--                            <p class="title has-text-light">Cars</p>-->
                <!--                            <div class="buttons ">-->
                <!--                                <button class="button is-medium is-info is-outlined is-light " id="addNewCarShow">Add new car</button>-->
                <!---->
                <!--                            -->
                <!--                                <button class="button is-medium is-info is-outlined is-light " id="showAllCarsTable">Show all cars</button>-->
                <!--                            </div>-->
                <!---->
                <!--                        </div>-->
                <!--                    </div>-->
<!--            </div>-->
<!--        </div>-->
        <div class="hero-body">
            <div class="container has-text-centered">
                <h1 class="title has-text-white">
                    Admin panel
                </h1>
            </div>
        </div>

        <div class="hero-foot">
            <nav class="tabs is-boxed is-fullwidth is-large buttons ">
                <div class="container ">
                    <ul>
                        <li class="tab is-active p-2 " onclick="openTab(event,'Users')">
                            <a class=" button is-medium is-info is-outlined">Users</a>
                        </li>
                        <li class="tab p-2  " onclick="openTab(event,'Cars')">
                            <a class="button is-medium is-info is-outlined">Cars</a>
                        </li>
                        <li class="tab p-2 " onclick="openTab(event,'Rent')">
                            <a class="button is-medium is-info is-outlined">Rent</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
        <div class="container section">
            <div id="Users" class="content-tab">
                <div class="buttons ">
                    <button class="button is-medium is-success is-outlined is-light " id="peropero">Show all
                        users
                    </button>
                    <button class="button is-medium is-info is-outlined is-light " id="">Add new user</button>
                    <button class="button is-medium is-warning is-outlined is-light " id="">Update user info
                    </button>
                    <button class="button is-medium is-danger is-outlined is-light " id="">Delete user</button>
                </div>
            </div>
            <div id="Cars" class="content-tab" style="display:none">

                <div class="buttons ">

                    <button class="button is-medium is-success is-outlined is-light " id="showAllCarsTable">Show all cars
                    </button>
                    <button class="button is-medium is-info is-outlined is-light " id="addNewCarShow">Add new car
                    </button>
                </div>
                <div class="buttons ">
                    <button class="button is-medium is-success is-outlined is-light " id="showAllCarBrands">Show all brands
                    </button>
                    <button class="button is-medium is-primary is-outlined is-light " id="addNewCarBrand">Add new car brand
                    </button>
                    <button class="button is-medium is-warning is-outlined is-light " id="updateCarBrand">Update existing car brand
                    </button>
                    <button class="button is-medium is-danger is-outlined is-light " id="deleteCarBrand">Delete existing car brand
                    </button>
                </div>
                <div class="buttons">
                    <div class="select is-primary">
                    <select ><option>Audi</option>
                        <option>BMW</option>
                        <option>Citroen</option>
                        <option>Daihatsu</option>
                        <option>Ford</option>
                    </select>
                    </div>
                    <button class="button is-medium is-success is-outlined is-light " id="showAllCarModel">Show model of selected brend
                    </button>
                </div>



            </div>
            <div id="Rent" class="content-tab" style="display:none">
                <p>
                    test3 <br>
                    Specification Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
                    has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                    galley of type and scrambled it to make a type specimen book. It has survived not only five
                    centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
                    popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and
                    more recently with desktop publishing software like Aldus PageMaker including versions of Lorem
                    Ipsum.</p>
            </div>
        </div>
    </section>
    <div id="userTable" style="align-items:flex-start;margin:0 auto;max-width:975px;text-align:left">

        <div id="adminAddNewVehicle" style="align-items:flex-start;margin:0 auto;max-width:975px;text-align:left">
            <!-- action="" enctype="multipart/form-data" -->
            <div class="field">
                <p class="subtitle is-5" style="color:white">Brand </p>
                <div class="control has-icons-left">

                    <div class="select is-primary" id=selectCarBrands>

                        <select name="brandSelect" id="brandSelect" class="forReset">
                            <option selected="true" value='null' disabled="disabled">Brand</option>
                            <?php include('adminModules/adminCarAdd_GetBrand.php'); ?>
                        </select>

                    </div>
                    <div class="icon is-small is-left">
                        <i class="fas fa-industry iconGrey"></i>
                    </div>
                </div>
            </div>


        </div>
        <div id="adminCarTable" style="align-items:flex-start;margin:0 auto;max-width:975px;text-align:left">
        </div>

    </div>


    <?php
    //	function script($par)
    //	{
    //		echo "<script>console.log('{$par}');</script>";
    //	}
    //	if (isset($_POST['submitAddCar'])){
    //		echo "dobijena slika {$_FILES['image']['name']}";
    //	} else{
    //		echo "nije dobijena slika";
    //	}
    include('include/footer.php');
    ?>
</main>
<script src="https://code.jquery.com/jquery-3.4.1.js" integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
        crossorigin="anonymous"></script>
<script src="https://use.fontawesome.com/releases/v5.1.0/js/all.js"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert"></script>
<script type="text/javascript" src="js/script.js"></script>
<script type="text/javascript" src="adminModules/scripts/admin.js"></script>
<script type="text/javascript" src="adminModules/scripts/adminCarAdd.js"></script>
<script type="text/javascript" src="adminModules/scripts/adminCarTable.js"></script>
<script type="text/javascript" src="adminModules/scripts/adminUserTable.js"></script>
<script type="text/javascript" src="adminModules/scripts/adminCarDelete.js"></script>
</body>

</html>