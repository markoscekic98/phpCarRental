
window.onload = () => {
  datumFun();
  console.log('php radi');
  ////////////template js(for burger menu in navbar)\\\\\\\\\\\\\\\\
  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0); // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) { // Add a click event on each of them
    $navbarBurgers.forEach($el => {
      $el.addEventListener('click', () => {
        $('.navBarAnchor').css({
          'margin-right': '0px',
          'margin-bottom': '1.5rem'
        });
        $('.navbar-start p').css('color', 'silver');
       // Get the target from the "data-target" attribute
        var target = $el.dataset.target;
        var $target = document.getElementById(target);
        $target.style.width = "60%";
        $target.style.marginLeft = '20%'; // Toggle the class on both the "navbar-burger" and the "navbar-menu"
        $el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }
  ////////////////  End of template js \\\\\\\\\\\\\\\\\\  
  document.querySelector('.navbar-burger').addEventListener('click', () => {
    document.getElementById('navbar').style.backgroundColor = 'rgba(223, 223, 223, 0.4)'; //'rgba(5, 5, 5, 0.4)';
    $('.burgerColor').css('color', '#272727');
    $('.AboutHover p').css('color', 'white');
    });
  let count = 0;
  const loginRegisteButtons = document.getElementById('loginRegisterButtons');
  // let dataUserLoggedIn = true;
  // if(dataUserLoggedIn === true){
  // const getLoggedINLS = localStorage.getItem('LoggedIN');
      if(localStorage.getItem('LoggedIN') === 'true'){
        console.log("ulogovan korisnik");
        $('#loginRegisterButtons').html(`<div class="button is-info ReLoButtons">
                <a href="account.php"  class="navbar-item has-text-white">
                  <p>Account</p></a>
              </div>`);
  }
  function datumFun() {
    const datum = new Date();
       satnica = datum.getHours();
    var bulmaLogo = `<img src="https://bulma.io/images/made-with-bulma.png" alt="Made with Bulma" width="128" height="24">`;
    var keycapLogo = `<link rel="shortcut icon" href="img/pbt-white.png" type="image/x-icon" />`;
    if (satnica > 20 || satnica < 6) {
      bulmaLogo = `<img src="https://bulma.io/images/made-with-bulma--dark.png" alt="Made with Bulma" width="128" height="24">`;
    }
    document.querySelector('#bulma').innerHTML = bulmaLogo;
    }


  // if (window.location.pathname == '/products.html' || window.location.pathname == '/Products.html') {
  // } //if products.html

  if (window.location.pathname == '/cart.html') {

    $.ajax('/data/products.json', {
      method: "GET",
      dataType: "json",
      success: allProducts => {
        cart(allProducts);

      } //success
    });

    function cart(data) { //cros refference of all producsts there are in JSON file with those ID that have been selected
   
      let getLSproducts = localStorage.getItem("Product");
      var dataLS = JSON.parse(getLSproducts);
      try{
      document.getElementById('cartAncher').innerHTML = `<span class="icon is-medium">
              <i class="fa fa-cart-arrow-down"></i>
          </span><p class="korpaBroj">${dataLS.length}</p>`;
      }catch {}
      var producstsInCart = [];
      var cartHtml = '<table  class="center">';
      var price = 0;
      if (dataLS) {
        for (var indexData = 0; indexData < dataLS.length; indexData++) {
          producstsInCart = data.filter(x => x.id === dataLS[indexData]);
          producstsInCart.forEach(ls => {
            cartHtml += `
              <tr >
                <td class="verticalLine">Product ID: ${ls.id} </td>
                <td class="verticalLine">Name: ${ls.name} </td>
                <td>Price: $${ls.numKeys} </td>
              </tr>`;
            price += ls.numKeys;
          });
        }

        cartHtml += `</table><div class="control center-column">
      </div>
      <div class="column abcd" id="priceCart">
       Price for all products combined is: $${price},   number of chosen products: ${indexData}
      </div><hr class="devider"><div class="control center-column"><button class="button" id="clearLSData" >Clear All</button></div>`;
        document.getElementById('localStorageCart').innerHTML = cartHtml;
       // document.getElementById('priceCart').innerHTML = `Price for all products combined is: $${price},   number of chosen products: ${indexData}`;
      };

      try {
        const cartBorder = $('tr');
        let len = cartBorder.length - 1;

        cartBorder[len].style.border = "0px solid white";
      } catch {}
      try {
        document.querySelector('#clearLSData').addEventListener('click', () => {
          localStorage.clear();
          document.getElementById('localStorageCart').innerHTML = `<main class="hero-body center" id="emptyCart">
        <div id="grid" style="width: 768px;">
          <div id="a" class="center-column has-text-centered subtitle sumPrice">
                  <h2 class="title is-2 white ">Cart is empty</h2><br>
                  <p class='content is-medium'>Plese click 'Add to cart' button on desired products</p>
          </div> </div>  </main>`;
        });
      } catch{ }
    };///for
  };//if cart.html
  // if (window.location.pathname == '/contact.html' || window.location.pathname == '/Contact.html') {
  //   $.ajax({
  //     url: 'https://api.ipify.org?format=json',
  //     method: "get",
  //     dataType: "json",
  //     timeout: 3100,
  //     complete: data => {
  //       try {
  //         let l = JSON.stringify(data).split(`:\"`);
  //         let lo = l[2].split(`\"`);
  //         document.cookie = `IP=${lo[0]}`;
  //       } catch {}
  //     },
  //     error: function (error, xhr, status) {
  //       swal("Please disable adblocker", "In order to login, please disable adblocker", "error");
  //     }
  //   });
  //    /// na onLoad stranice se brisu podaci ranije upisano iz forme;
  

  // } //if contact


}; //document.ready