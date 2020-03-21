<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <title></title>
        <link rel="shortcut icon" type="image/x-icon" href="../img/logo_black.ico">
        <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
        <script type="text/javascript" src="../scripts/suScript.js"></script>
        <link rel="stylesheet" type="text/css" href="../style/style.css">
        <link rel="stylesheet" type="text/css" href="../style/style_suSite.css">
    </head>
    <body>

        <header>
            <a href="./home.php"><img class="exit" src="../img/arrow_white.png"></a>
        </header>

    <?php
    session_cache_limiter(15);
    session_start();

    if (isset($_SESSION['eingeloggt']) && $_SESSION['eingeloggt'] == true) {
        ?>

        <div id="surveyResult">
            <h2>ANZAHL DER BESUCHE PRO SAISON</h2>
            <div id="visitChart"></div>

            <h2>ICH KOMME</h2>
            <div id="accompanimentChart"></div>

            <h2>ICH REISE AN MIT</h2>
            <div id="approachChart"></div>

            <h2>ALS AUTOFAHRER/IN PARKE ICH IN</h2>
            <div id="parkChart"></div>

            <h2>ENTFERNUNG ZU MEINEM WOHNORT</h2>
            <div id="distanceChart"></div>

            <h2>MEIN ALTER (IN JAHREN)</h2>
            <div id="ageChart"></div>

            <h2>MEIN GESCHLECHT</h2>
            <div id="genderChart"></div>
        </div>
        <?php

    } else {
        echo "<h1>Sie müssen eingeloggt sein!</h1>";

        exit();
    }
    ?>

    </body>
</html>