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

        echo "<div id=\"surveyResult\">";

        echo "<h2>ANZAHL DER BESUCHE PRO SAISON</h2>";
        echo "<div id=\"visitChart\"></div>";

        echo "<h2>ICH KOMME</h2>";
        echo "<div id=\"accompanimentChart\"></div>";

        echo "<h2>ICH REISE AN MIT</h2>";
        echo "<div id=\"approachChart\"></div>";

        echo "<h2>ALS AUTOFAHRER/IN PARKE ICH IN</h2>";
        echo "<div id=\"parkChart\"></div>";

        echo "<h2>ENTFERNUNG ZU MEINEM WOHNORT</h2>";
        echo "<div id=\"distanceChart\"></div>";

        echo "<h2>MEIN ALTER (IN JAHREN)</h2>";
        echo "<div id=\"ageChart\"></div>";

        echo "<h2>MEIN GESCHLECHT</h2>";
        echo "<div id=\"genderChart\"></div>";

        echo "</div>";


    } else {
        header("HTTP/1.1 403 Forbidden");

        echo "<h1>Sie müssen eingeloggt sein!</h1>";

        exit();
    }
    ?>

    </body>
</html>