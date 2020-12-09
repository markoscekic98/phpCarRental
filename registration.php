<?php

session_start();

include('security/antiCSRF.php')
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
    <link rel="stylesheet" href="css/bulma.css">
    <!-- <link rel="stylesheet" href="css/debug.css"> -->
    <!-- <link rel="stylesheet" href = "https://www.jsdelivr.com/package/npm/bulma"> -->
    <link rel="stylesheet" href="css/helpers.css">
    <link rel="stylesheet" href="css/grid.css">
    <link rel="stylesheet" href="css/stylePHP.css">
    <link rel="stylesheet" href="css/bulma-social.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css">
</head>

<body>

<!--.hero-->
<section class="hero  is-fullheight">
    <header>
        <nav class="navbar is-warning" id="navBoja" role="navigation" aria-label="Main navigation">
            <div class="container">
                <div class="navbar-brand is-tablet ">
                    <a href="index.html"><img src="img/strWheel.png" id='mkSwitch' width="90px" height="20px"></a>
                    <table id="headerBrend">
                        <tr>
                            <td><h1 class="title is-2 navPBrand" style="color:white">Kola</h1>
                            <td>
                        </tr>
                        <tr>
                            <td><p class="is-small">Car rental platform</p></td>
                        </tr>
                    </table>
                    <div class="navbar-burger" data-target="navbar">
                        <span style="color:white"></span>
                        <span style="color:white"></span>
                        <span style="color:white"></span>
                    </div>
                </div>
                <div class="navbar-menu navBarAnchor" id="navbar" style="margin-left: 20%;">
                    <div class="navbar-start">
                        <div class="navbar-item AboutHover">
                            <a href="products.html">
                                <p>Vehicles</p>
                            </a>

                        </div>
                        <div class="navbar-item has-dropdown is-hoverable AboutHover ">
                            <a href="registration.php" class="navbar-link aPreventDefault">
                                <p>Contact</p>
                            </a>
                            <ul class="navbar-dropdown is-boxed">
                                <a href="registration.php" class="navbar-item burgerColor">Form</a>
                                <a href="registration.php#a" class="navbar-item burgerColor">Info</a>

                            </ul>
                        </div>
                        <div class="navbar-item AboutHover">
                            <a href="about.html">
                                <p>About Us</p>
                            </a>

                        </div>

                    </div>
                    <div class="navbar-end" id="loginRegisterButtons">
                        <div class="button is-info ReLoButtons">
                            <a href="login.php" class="navbar-item has-text-white">
                                <p>Login</p></a>
                        </div>
                        <div class="button is-success ReLoButtons">
                            <a href="registration.php" class="navbar-item has-text-white">
                                <p>Register</p></a>
                        </div>
                    </div>
                </div>
            </div>

        </nav>
    </header>


    <main class="hero-foot  center is-desktop" style="padding: 2rem;">
        <main class="hero-foot is-mobile-only" style="max-width:99%;">

            <div class="column abcd ">
                <div class="center-column has-text-centered subtitle">
                    <h2 class="title is-2 white ">Contact Form</h2>
                    <p class='content is-small'>If you have any questions, please feel free to contact us. Thank
                        you.</p>
                </div>
                <form method="post" id="contactForm">

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
                        <label class="label has-text-white">Date of birth</label>
                        <div class="control has-icons-left has-icons-right">
                            <input class="input is-medium" id="dob" name="dob" type="date" placeholder="Text input"
                                   value="">
                            <!-- class="input is-danger" -->
                            <span class="icon is-small is-left has-text-grey">
                  <i class="fa fa-map" aria-hidden="true"></i>
                </span>
                            <!-- <span class="icon is-small is-right">
										<i class="fas fa-check"></i>
									  </span> -->
                        </div>
                        <p class="help is-danger ContactError" id="dobError"></p>
                    </div>

                    <div class="field">
                        <label class="label has-text-white">Email</label>
                        <div class="control has-icons-left has-icons-right">
                            <input class="input is-medium" id="email" name="email" type="email"
                                   placeholder="Email input" value="">
                            <!-- class="input is-danger" -->
                            <span class="icon is-small is-left has-text-grey">
                  <i class="fas fa-envelope"></i>
                </span>
                            <span class="icon is-small is-right">
                  <!-- <i class="fas fa-exclamation-triangle emailError"></i> -->
                </span>
                        </div>
                        <p class="help is-danger ContactError" id="emailError"></p>
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
<script type="text/javascript" src="js/scriptRegister.js"></script>
<script type="text/javascript" src="js/script.js"></script>
</body>

</html>