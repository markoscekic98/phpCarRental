<?php
  session_start();
  ob_start();
  $url = 'http://localhost/bulmaPHP';
  if($_SERVER['REQUEST_METHOD'] != 'POST'){
  // header("Location: {$url}/login.html");
  }
?>

<!DOCTYPE html>
<html lang="en">


<?php
//include('include/head.php');
?>



<!--<body>-->


<!--  <section class="hero  is-fullheight">-->
<?php //  include('include/header.php');  ?>

<!---->
<!--    <main class="hero-foot  center is-desktop aboutDesktopWidth" style="padding: 2rem;">-->
<!--      <main class="hero-foot is-mobile-only" style="max-width:99%;">-->
<!--        <div class="center-column has-text-centered subtitle centerBlack" >-->
<!---->
<!--           <h2 class="title is-2 white "> All data from database</h2>-->
<!--           <h2 class="title is-3 white">Insert car brends </h2>-->
<!--           <form method="post" name="carBrendInserting" action="--><?php ///*echo $_SERVER['PHP_SELF']; */?><!--">-->
<!--           <input type="text" name='brand' placeholder="Car brends"></br>-->
<!--           <input type="submit" name="brendSubmit" valued="add brend">-->
<!--           <img src="img/cars/Audi-Q5.jpg" width="90" height="20">-->
<!--           </form>-->
<!--<script> console.log("hi"); </script>-->
        <?php
            /// privremeni ajax za dohvatanje podataka iz forme preko ajaxa \\\\\
//
//
//if(isset($_POST['username']) && isset($_POST['dob']) && isset ($_POST['email']) && isset($_POST['password'])){
//
//
//    $username = $_POST['username'];
//    $dobStr = $_POST['dob'];
//    $dateFormat = 'Y-m-d';
//    $dob = DateTime::createFromFormat($dateFormat, $dobStr);
//    $dobForEcho = $dob->format('Y-m-d');
//    $dataTypeDobForEcho = gettype($dobForEcho);
//    $email = $_POST['email'];
//    $password = $_POST['password'];
        // echo "<script>console.log('{$dobForEcho}, {$dataTypeDobForEcho}')</script>";
   // echo "{$username}  {$dobForEcho} {$email} {$password}";
//
//    }   else {   // header("Location: {$url}/login.html");
//        }
        require('connINI.php');
    try {
        $datesql = $conn->prepare("insert into temp_date(temp_date) values(:date);");
        $datesql->bindParam(":date" , $dobForEcho);
        $datesql->execute();
    }  catch (PDOException $exception){
          echo "Greska se desila zbog: {$exception}";
    }

      /* ------------------------------------ vec bilo zakomentarisano(odavde) ------------------------------------*/
//       $showData = $conn->query("select   car_brand.brand,  car_model.model, car.image, car.initialPriceCar
//                    from (car inner join car_model ON car.carModelID = car_model.carModelID) inner join  car_brand on  car_model.carBrandID = car_brand.carBrandID;");
//        $showData->execute();
//        if($showData->rowCount()>0){
//            echo "<table id='tableDataDataBase'>";
//            foreach ($showData as $data) {
//                echo "
//                    <tr>
//                        <td><img src='{$data['image']}' width='50px' height='50px'></td>
//                        <td>{$data['brand']}    {$data['model']}</td>
//                        <td>$ {$data['initialPriceCar']}  </td>
//                    </tr>"; // echo "<script>console.log('{$data['brand']}');</script>";
//            }//foreach
//            echo "</table>";
//        }//if
        /* ------------------------------------ vec bilo zakomentarisano(dovde) ------------------------------------*/
        ?>
<!--        </div>-->
<!--        <hr class="devider"-->
<!--          style="background: linear-gradient(90deg, rgba(0,212,255,0.6110644086990165) 0%, rgba(9,9,121,1) 50%, rgba(0,212,255,0.61) 100%);">-->
<!--        <div class="center-column abcd" id="autor" style="margin-top:5%">-->
<!--          <h3 class="title center is-3 whiteText">Author</h3><br>-->
<!--          <div class="tiles center ">-->
<!--            <div class="tile is-15 ">-->
<!--           -->
<!--              <div class="tile is-parent is-8 ">-->
<!--                <article class="tile is-child ">-->
<!---->
<!--                  <ul>-->
<!--                    <li>-->
<!--                      <p class="subtitle is-4 whiteText">Marko Scekic</p>-->
<!--                    </li>-->
<!--                  </ul>-->
<!--                  <ul>-->
<!--                    <li>-->
<!--                      <p class="subtitle is-4 whiteText">Broj Indeksa: <span class=""> 331/17<span></p>-->
<!--                    </li>-->
<!--                  </ul>-->
<!--                  <ul>-->
<!--                    <li>-->
<!--                      <p class="subtitle is-4 whiteText">This website is built for school course 'Web Programiranje 2'-->
<!--                      </p>-->
<!--                    </li>-->
<!--                  </ul>-->
<!---->
<!--                </article>-->
<!--              </div>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </main>-->
<!--    </main>-->
<!---->
<!--   https://aldi.github.io/bulma-social/ for favicons -->
<!--    --><?php //  include('include/footer.php');    ?>
<!--  </section>-->
<!--  <script src="https://code.jquery.com/jquery-3.4.1.js"   integrity="sha256-WpOohJOqMqqyKL9FccASB9O0KwACQJpFTUBLTYOVvVU=" crossorigin="anonymous"></script>-->
<!--  <script src="https://cdn.jsdelivr.net/npm/js-cookie@beta/dist/js.cookie.min.js"></script>-->
<!--  <script src="https://use.fontawesome.com/releases/v5.1.0/js/all.js"></script>-->
<!--  <script src="https://cdnjs.cloudflare.com/ajax/libs/crypto-js/3.1.2/rollups/aes.js"></script>-->
<!--  <script type="text/javascript" src="js/script.js"></script>-->
<!--</body>-->
<!---->
<!--</html>-->