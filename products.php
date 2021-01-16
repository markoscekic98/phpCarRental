<?php

session_start();
include('security/antiCSRF.php');
$checkboxShaVal = base64_encode(openssl_random_pseudo_bytes(16, $crypto_strong));
if (!isset($_SESSION['adminLogin'])) {
	$_SESSION['adminLogin'] = $checkboxShaVal;
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="MK International is world renown for its excellent mechanical keyboards" />
    <meta name="csrf-token" content="<?= CSRFTokenIni() ?>">
    <title>Kola leading car rental</title>
    <link rel="shortcut icon" href="img/strWheel.png" id="ikonica" type="image/x-icon" />
    <!-- <link rel="stylesheet" href="css/debug.css"> -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.1/css/bulma.min.css">
    <link rel="stylesheet" href="css/helpers.css">
    <!--    <link rel="stylesheet" href="css/grid.css">-->
    <link rel="stylesheet" href="css/stylePhp.css">
    <!--    <link rel="stylesheet" href="css/bulma-social.min.css">-->
    <!--    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css">-->
    <link rel="stylesheet" href="https://unpkg.com/bulma-modal-fx/dist/css/modal-fx.min.css" />
</head>
<body>

<!--.hero-->
<section class="hero  is-fullheight">
	<?php include('include/header.php') ?>


    <div class=" mt-6 m-3">
        <div class="buttons ">
            <button class="button is-info"> <span class="mr-1 has-text-dark"> Sort</span><i class="fas fa-sort has-text-dark"></i></button>
            <button class="button is-dark" id="cheaper">Cheaper</button>
            <button class="button is-dark" id="pricier">Pricier</button>


<!--        <ul>-->
<!--            <li class="is-big">-->
<!--                <select class="has-dropdown button  is-dark" id="clickSelectColor">-->
<!---->
<!--                </select>-->
<!--            </li>-->
<!---->
<!--        </ul>-->
<!--        <ul>-->


            <button class="button" id="refine">Refine search</button>
        </div>
<!--        </ul>-->


    </div>
    <div id="divTabela">


        <div class="field refineField ">
            <p class="subtitle is-6" style="color:white"> Chose desired color of vehicle</p>
            <div class="control has-icons-left">
                <div class="select  is-primary">
                    <select id="selectColor" name="refineColor"></select>
                </div>
                <div class="icon is-small is-left">
                    <i class="fas fa-palette"></i>
                </div>
            </div>
        </div>

        <div class="field refineField">
            <p class="subtitle is-6" style="color:white">  Select desired year of production</p>
            <div class="control has-icons-left">

                <div class="select is-primary">

                    <select id="selectYear" name="refineProductionYear"></select>
                </div>
                <div class="icon is-small is-left">
                    <i class="fas fa-calendar"></i>
                </div>
            </div>
        </div>

        <div class="field refineField">
            <p class="subtitle is-6" style="color:white">Select desired vehicle's body type</p>
            <div class="control has-icons-left">
                <div class="select is-primary">
                    <select id="selectBodyType" name="refineBodyType"></select>
                </div>
                <div class="icon is-small is-left">
                    <i class="fas fa-car"></i>
                </div>
            </div>
        </div>
    </div>
    <!-- <div id='wrapper'> -->
    <main class="basic-grid" id='keyboardHtml' style="padding:0.1rem;">

    </main>


    <div class="hero-foot" id="footerBoja">
        <nav class="tabs">
            <div class="container center-column white">
                <ul>
                    <li>
                            <span class="icon is-medium">
                                <i class="fab fa-linkedin"></i>
                                <span>
                    </li>
                    <li>
                            <span class="icon is-medium ">
                                <i class="fab fa-github"></i>
                            </span>
                    </li>
                    <li>
                        <a id="bulma" href="https://bulma.io">
                        </a>
                    </li>
                    <li><a href="Doc.docx">
                            <span class="icon is-medium">
                                <i class="fas fa-file-pdf"></i>
                            </span>
                    </a>
                    </li>

                    <li>
                            <span class="icon is-medium">
                                <i class="fas fa-user-shield"></i>
                            </span>
                    </li>

                </ul>
            </div>
        </nav>
    </div>

</section>


<script
        src="https://code.jquery.com/jquery-3.4.1.js"
        integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU="
        crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/js-cookie@beta/dist/js.cookie.min.js"></script>
<script src="https://use.fontawesome.com/releases/v5.1.0/js/all.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert"></script>
<script type="text/javascript" src="js/script.js"></script>
<script type="text/javascript" src="js/scriptProduct.js"></script>

</body>

</html>