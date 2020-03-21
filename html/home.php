<?php
    session_start();
?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <meta
     name='viewport'
     content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0'
     />
    <title>Home</title>
    <link rel="shortcut icon" type="image/x-icon" href="../img/logo_black.ico">
    <link href="https://fonts.googleapis.com/css?family=Big+Shoulders+Display|Open+Sans:300,400&display=swap" rel="stylesheet">
    <script src="https://kit.fontawesome.com/d784a9e3c9.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" type="text/css" href="../style/style.css">
    <link rel="stylesheet" type="text/css" href="../style/style_home.css">
    <script type="text/javascript" src="../scripts/dates.js"></script>
    <script type="text/javascript" src="../scripts/homescript.js"></script>

  </head>
  <body>

    <div id="load">
        <p>LADEVORGANG LÄUFT...</p>
    </div>

    <header>
      <a href="../index.html"><img class="exit" src="../img/arrow_white.png"></a>
      <img id="suLoginButton" src="../img/logo_white.png">
      <div id="imageButton">BILDER</div>
    </header>


    <div class="contentBox" id="info">
    </div>

    <div class="contentBox" id="cast">
      <h1>DIE BESETZUNG</h1>

    </div>

    <div class="contentBox" id="events">
      <h1>WEITERE TERMINE</h1>
    </div>

    <div class="contentBox" id="survey">

      <div id="q1" class="questionBox">

        <h2>ANZAHL DER BESUCHE PRO SAISON</h2>

        <div class="answerBox">
          <div class="answers">
            <p>1</p>
          </div>
          <div class="answers">
            <p>2 - 5</p>
          </div>
          <div class="answers">
            <p>6 - 10</p>
          </div>
          <div class="answers">
            <p> 10</p>
          </div>
        </div>

        <div class="surveyNav">
          <a href="#q2" class="nextQuestion">WEITER</a>
        </div>
      </div>

      <div id="q2" class="questionBox">
        <h2>ICH KOMME</h2>
        <div class="answerBox">

          <div class="answers">
            <p>alleine</p>
          </div>
          <div class="answers">
            <p>zu zweit</p>
          </div>
          <div class="answers">
            <p>mit 3 - 4 Personen</p>
          </div>
          <div class="answers">
            <p>mit 5 - 9 Personen</p>
          </div>
          <div class="answers">
            <p>mit 10+ Personen</p>
          </div>
        </div>

        <div class="surveyNav">
          <a href="#q1" class="lastQuestion">ZURÜCK</a>
          <a href="#q3" class="nextQuestion">WEITER</a>
        </div>
      </div>

      <div id="q3" class="questionBox">
        <h2>ICH REISE AN MIT</h2>
        <div class="answerBox">

          <div class="answers">
            <p>PKW</p>
          </div>
          <div class="answers">
            <p>Bus</p>
          </div>
          <div class="answers">
            <p>Linz Linien</p>
          </div>
          <div class="answers">
            <p>Bahn</p>
          </div>
          <div class="answers">
            <p>Zweirad</p>
          </div>
          <div class="answers">
            <p>zu Fuß</p>
          </div>
        </div>
        <div class="surveyNav">
          <a href="#q2" class="lastQuestion">ZURÜCK</a>
          <a href="#q4" class="nextQuestion">WEITER</a>
        </div>
      </div>

      <div id="q4" class="questionBox">
        <h2>ALS AUTOFAHRER/IN PARKE ICH IN</h2>

        <div class="answerBox">
          <div class="answers">
            <p>Parkgarage Musiktheater</p>
          </div>
          <div class="answers">
            <p>Garage am Bahnhof</p>
          </div>
          <div class="answers">
            <p>umliegende Straßen</p>
          </div>
          <div class="answers">
            <p>sonstiges</p>
          </div>
        </div>

        <div class="surveyNav">
          <a href="#q3" class="lastQuestion">ZURÜCK</a>
          <a href="#q5" class="nextQuestion">WEITER</a>
        </div>
      </div>

      <div id="q5" class="questionBox">
        <h2>ENTFERNUNG ZU MEINEM WOHNORT</h2>

        <div class="answerBox">
          <div class="answers">
            <p>< 10 km</p>
          </div>
          <div class="answers">
            <p>11 - 20 km</p>
          </div>
          <div class="answers">
            <p>21 - 50 km</p>
          </div>
          <div class="answers">
            <p>> 50 km</p>
          </div>
        </div>

        <div class="surveyNav">
          <a href="#q4" class="lastQuestion">ZURÜCK</a>
          <a href="#q6" class="nextQuestion">WEITER</a>
        </div>
      </div>

      <div id="q6" class="questionBox">
        <h2>MEIN ALTER (IN JAHREN)</h2>

        <div class="answerBox">
          <div class="answers">
            <p>0 - 16</p>
          </div>
          <div class="answers">
            <p>17 - 24</p>
          </div>
          <div class="answers">
            <p>25 - 40</p>
          </div>
          <div class="answers">
            <p>41 - 55</p>
          </div>
          <div class="answers">
            <p>> 55</p>
          </div>
        </div>

        <div class="surveyNav">
          <a href="#q5" class="lastQuestion">ZURÜCK</a>
          <a href="#q7" class="nextQuestion">WEITER</a>
        </div>
      </div>

      <div id="q7" class="questionBox">
        <h2>MEIN GESCHLECHT</h2>

        <div class="answerBox">
          <div class="answers">
            <p>weiblich</p>
          </div>
          <div class="answers">
            <p>männlich</p>
          </div>
          <div class="answers">
            <p>divers</p>
          </div>
        </div>

        <div class="surveyNav">
          <a href="#q6" class="lastQuestion">ZURÜCK</a>
          <a class="nextQuestion">ABSENDEN</a>
        </div>
      </div>


    </div>

    <div class="contentBox" id="images">
      <img src="../img/galerie/bild01.jpg">
      <img src="../img/galerie/bild02.jpg">
      <img src="../img/galerie/bild03.jpg">
      <img src="../img/galerie/bild04.jpg">
      <img src="../img/galerie/bild05.jpg">
      <img src="../img/galerie/bild06.jpg">
      <img src="../img/galerie/bild07.jpg">
      <img src="../img/galerie/bild08.jpg">
      <img src="../img/galerie/bild09.jpg">
    </div>

    <div id="suLogin">

        <div id="suLoginHeader">
            <img id="suLoginX" src="../img/x_white.png">
        </div>

    <?php

    if (isset($_POST['user_name']) && $_POST['user_name'] != ""
        && isset($_POST['user_password'])) {

        if ($_POST['user_name'] == "user"
            && md5($_POST['user_password']) == "e8636ea013e682faf61f56ce1cb1ab5c") {
            $_SESSION['user_name'] = $_POST['user_name'];
            $_SESSION['eingeloggt'] = true;
        } else {
            echo "<b>ungültige Eingabe</b>";
            $_SESSION['eingeloggt'] = false;
        }

    }

    if (isset($_POST['logout'])){
        session_destroy();
        $_SESSION = array();
    }

    if (isset($_SESSION['eingeloggt']) && $_SESSION['eingeloggt'] == true) {
        echo "<h1>Hallo " . $_SESSION['user_name'] . "</h1>";
        echo "<h1>Wollen Sie sich abmelden?</h1>";
        echo '<form name="" action="" method="POST" enctype="text/html">';
        echo '<p><input type="Submit" name="logout" value="Ausloggen" />';
        echo '</form>';
    } else {
        echo "<h1>Bitte loggen Sie sich ein</h1>";
        echo '<form name="" action="" method="POST" enctype="text/html">';
        echo '<input type="text" placeholder="Benutzername" name="user_name" value="" size="20" maxlength="50" />';
        echo '<input type="password" placeholder="Passwort" name="user_password" value="" size="20" maxlength="50" />';
        echo '<p><input type="Submit" name="login" value="Einloggen" />';
        echo '</form>';
    }

    echo "<a id='secretLink' href=\"suSite.php\">Versuche geheimen Inhalt zu öffnen!</a><br><br>";

    ?>

    </div>

    <nav>
      <div id="infoButton">STÜCKINFO</div>
      <div id="castButton">BESETZUNG</div>
      <div id="eventsButton">TERMINE</div>
      <div id="surveyButton">UMFRAGE</div>
    </nav>

  </body>
</html>
