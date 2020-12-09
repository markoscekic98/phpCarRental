$.ajax('products.php', {
    method: "GET",
    success: function (products){
        let parseProducts = JSON.parse(products);
        funHtmlDynamic(parseProducts);


      //////////// sort by cheaper first\\\\\\\\\\\\\\\\\\\\\\\
    document.getElementById('cheaper').addEventListener('click', () => {
        parseProducts.sort((a, b) => a.initialPriceCar - b.initialPriceCar);
        funHtmlDynamic(parseProducts);
    }); //EventListener big keyboards
      // //////////////// small keyboards first \\\\\\\\\\\\\\\\\\\\\\\\
    document.getElementById('pricier').addEventListener('click', () => {
        parseProducts.sort((a, b) => b.initialPriceCar - a.initialPriceCar);
        funHtmlDynamic(parseProducts);
    });
        ///////////////////////// refine filter \\\\\\\\\\\\\\\\\\\\\\\\\\\
        $('#divTabela').hide();
        $('#refine').click(function(){
            if($('#divTabela').is(':visible')){
                $('#divTabela').hide();
            } else {
                $('#divTabela').show();
            }
        });

    let refineColor = [];
    let refineYear =[];
    let refineBodyType =[];
    for(cc of parseProducts){
        refineColor.push(cc.color);
        refineYear.push(cc.year);
        refineBodyType.push(cc.bodyType);
    }
        //////////////////////////  C O L O R \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
        let refineColorSet = new Set (refineColor);
        let refineColorArr = [...refineColorSet];
    let refineColorHtml = `<option selected="true" disabled="disabled" >All Colors</option>`;
    for(let ch of refineColorArr){
        refineColorHtml +=`<option value="${ch}" class="selectColor"> ${ch}</option>`;
    }
    $('#selectColor').html(refineColorHtml);
    ///////////////////////////// year \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
        let refineYearSet = new Set (refineYear);
        let refineYearArr = [...refineYearSet];
        refineYearArr.sort((a,b)=> b - a);
    let refineYearHTML =`<option selected="true" disabled="disabled" >Year</option>`;
    for(let yr of refineYearArr){
        refineYearHTML +=`<option value="${yr}" class="selectColor"> ${yr}</option>`;
    }
    $('#selectYear').html(refineYearHTML);
    //////////////////////// body type \\\\\\\\\\\\\\\\\\\\\\\\\\
        let refineBodySet = new Set (refineBodyType);
        let refineBodyArr = [...refineBodySet];
    let refineBodyTypeHTML = `<option selected="true" disabled="disabled" >Body type</option>`;
    for(let bdtp of refineBodyArr){
        refineBodyTypeHTML+=`<option value="${bdtp}" class="selectColor"> ${bdtp}</option>`;
    }
    $('#selectBodyType').html(refineBodyTypeHTML);
    ///////////////////////////////////////////////////////
        const color = document.getElementById('clickSelectColor');
        document.getElementById('clickSelectColor').addEventListener('click', () => {
       // e.options[e.selectedIndex].value;
        let selectColor = color.options[color.selectedIndex].value;
        if (selectColor.length > 1) {
            let carColorSelect = parseProducts.filter((carCol) => carCol.color === selectColor);
            funHtmlDynamic(carColorSelect);
        }
      });

/////////////// fun addEventCart() trenutno nije u funkciji\\\\\\\\\\\\\\\\\\
//     function addEventCart() {
//         let dataLsCart = [];
//         document.querySelectorAll('.korpa').forEach(shoppingCart => {
//           shoppingCart.addEventListener('click', eventCartButton => {
//
//             let addToCartAnimation = setTimeout(loadAnim, 0);
//
//             function loadAnim() {
//               shoppingCart.classList.add('is-loading');
//             }
//             setTimeout(() => {
//               clearInterval(addToCartAnimation);
//               shoppingCart.classList.remove('is-loading');
//               shoppingCart.innerHTML = `<span class="icon is-small white">
//                                  <i class="fa fa-check white"></i>
//                                  </span class="white"><span>Saved</span>`;
//             }, 700);
//
//             dataLsCart.push(shoppingCart.value);
//             $('#cartAncher').html(`<span class="icon is-medium"><i class="fa fa-cart-arrow-down"></i>
//                 </span><p class="korpaBroj">${dataLsCart.length}</p>`);
//             localStorage.setItem("Product", JSON.stringify(dataLsCart));
//          });//addEventListner
//         });//forEach(shoppingCart)
//       } //fun addEventCart
        const weather = localStorage.getItem('weather');
        if (weather != 'null') {
            console.log(weather);
        }

        function funHtmlDynamic(data) {
            let htmlAjax = ``;
            data.forEach(p => {
                htmlAjax +=
                    `<div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img src="${p.image}" alt="${p.brand}_${p.model}_${p.carID}">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-3">${p.brand} ${p.model}</p>
      </div>
    </div>

    <div class="content productContentArea">
    <p class="subtitle is-5">${p.color}</p>

     <p class="subtitle is-5">${p.bodyType}</p>

     <p class="subtitle is-5">${p.hp} hp</p>

     <p class="subtitle is-5">${p.year}</p>

      <p class="subtitle is-4">$${p.initialPriceCar}</p>

<!--      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>-->
<button class="button is-dark korpa" value="${p.carID}" id="idKorpa">Add to cart</button>
    </div>
  </div>
</div>`;
        }); //foreach
        $('#keyboardHtml').html(htmlAjax);
      } //// function funKeyboardsHtmlDynamic(data)
    } //success
  }); //ajax

  //} //function products