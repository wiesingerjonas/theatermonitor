<?php

require("dbConfig.php");

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$file_array = file("../db/dates.csv");

$sql = "INSERT INTO `musiktheater_dates`(`play`, `date`) VALUES (?,?)";

$stmt = $conn->prepare($sql);
$stmt->bind_param("ss", $play, $date);

foreach ($file_array AS $currentLine) {
    $line_array = explode(";", $currentLine);

    $play = $line_array[0];
    $date = $line_array[1];

    $stmt->execute();
}

$stmt->close();
$conn->close();
?>