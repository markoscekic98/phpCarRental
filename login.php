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


    <main class="hero-foot  center is-desktop" style="padding: 2rem;">
        <main class="hero-foot is-mobile-only" style="max-width:99%;">

            <div class="column abcd ">
                <div class="center-column has-text-centered subtitle">
                    <h2 class="title is-2 white ">Login</h2>
                    <p class='content is-small'>In order to rent one of our excellent cars, please login first</p>
                </div>
                <form method="post" id="loginForm">

                    <div class="field">
                        <label class="label has-text-white">Username</label>
                        <div class="control has-icons-left has-icons-right">
                            <input class="input is-medium" id="uname" name="username" type="text"
                                   placeholder="Text input" value="">
                            <!-- class="input is-danger" -->
                            <span class="icon is-small is-left has-text-grey">
                  <i class="fas fa-user"></i>
                </span>
                        </div>
                        <p class="help is-danger ContactError" id="usernameError"></p>
                    </div>


                    <div class="field">
                        <label class="label has-text-white">Password</label>
                        <div class="control has-icons-left has-icons-right">
                            <input class="input is-medium " id="pass" name="password" type="password"
                                   placeholder="Text input" value="">
                            <!-- class="input is-danger" -->
                            <span class="icon is-small is-left has-text-grey">
                  <i class="fas fa-lock"></i>
                </span>
                            <!-- <span class="icon is-small is-right">
										<i class="fas fa-check"></i>
									  </span> -->
                        </div>
                        <p class="help is-danger ContactError" id="passError"></p>
                    </div>

                    <div class="field center-column">
                        <div class="control left-column">
                            <input type="checkbox" class="checkbox" name='adminLogin' id="adminLogin"
                                   value="<?= $_SESSION['adminLogin'] ?>" style="margin-right: 15px;"><span
                                    class="has-text-white">Admin login</span>

                        </div>
                        <div class="field">
                            <div class="control center-column">
                                <input type="submit" class="button" name='submitInfo' id="submitInfo" value="Submit">
                                <!-- <button class="button is-link">Help</button> -->
                            </div>

                        </div>
                </form>
            </div>
            <hr class="devider"
                style="background: linear-gradient(90deg, rgba(0,212,255,0.6110644086990165) 0%, rgba(9,9,121,1) 50%, rgba(0,212,255,0.61) 100%);">
            <!-- <div class="column abcd" style="margin-top:5%">
			  <div id="a" class="center-column has-text-centered subtitle">
				<h2 class="title is-2 white">MK International Co., Ltd</h2> <br>
			  </div>
			  <ul>
				<li style="padding: 0.75rem;">
				  <p><i class="fas fa-building "></i><span class="has-text-weight-bold"> Head Office</span>: No.381,
					Yangguang St., Taipei City, Taiwan </p>
				</li>
				<li style="padding: 0.75rem;">
				  <p> <i class="fas fa-wrench"></i><span class="has-text-weight-bold"> Maintance Departmen</span>: No.381,
					Yangguang St., Taipei City, Taiwan </p>
				</li>
				<li style="padding: 0.75rem;">
				  <p> <i class="fa fa-envelope"></i><span class="has-text-weight-bold"> Mailbox</span>:
					support@mkchannel.com</p>
				</li>
				<li style="padding: 0.75rem;">
				  <p><i class="fa fa-phone-square is-danger"></i><span class="has-text-weight-bold"> Phone</span>:
					+886-2-2797-7288 </p>
				</li>
			  </ul>
			</div> -->
        </main>
    </main>

    <!-- https://aldi.github.io/bulma-social/ for favicons -->
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
                            <img src="https://bulma.io/images/made-with-bulma.png" alt="Made with Bulma" width="128"
                                 height="24">
                        </a>
                    </li>
                    <li>
                        <a href="documentatio.docx">
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
<script type="text/javascript" src="js/scriptLogin.js"></script>
<script type="text/javascript" src="js/script.js"></script>


</body>

</html>