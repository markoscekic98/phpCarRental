<header>
    <nav class="navbar is-warning" id="navBoja" role="navigation" aria-label="Main navigation">
        <div class="container">
            <div class="navbar-brand is-tablet ">
                <a href="index.html"><img src="img/strWheel.png" id='mkSwitch' width="90" height="20"></a>
                <table id="headerBrend"> <tr><td><h1 class="title is-2 navPBrand" style="color:white">Kola</h1><td> </tr>
                    <tr><td><p class="is-small">Car rental platform</p></td></tr>
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
                        <a href="contact.html" class="navbar-link aPreventDefault">
                            <p>Contact</p>
                        </a>
                        <ul class="navbar-dropdown is-boxed">
                            <a href="contact.html" class="navbar-item burgerColor">Form</a>
                            <a href="contact.html#a" class="navbar-item burgerColor">Info</a>

                        </ul>
                    </div>
                    <div class="navbar-item AboutHover">
                        <a href="about.html">
                            <p>About Us</p>
                        </a>

                    </div>

                </div>
                <div class="navbar-end">
                    <?php   //if($SESSION['log']){}
                    ?>
                    <div class="button is-info ReLoButtons">
                        <a href="login.html"  class="navbar-item has-text-white">
                            <p>Login</p></a>
                    </div>
                    <div class="button is-success ReLoButtons">
                        <a href="contact.html"  class="navbar-item has-text-white">
                            <p>Register</p></a>
                    </div>
                </div>
            </div>
        </div>

    </nav>
</header>
