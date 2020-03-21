<?php

require("dbConfig.php");

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$lines = file("../db/dates.csv") or die("Unable to open file!");

$sql = "SELECT * FROM `musiktheater_dates`";

$stmt = $conn->prepare($sql);

$stmt->execute();

echo json_encode($stmt->get_result()->fetch_all());

$stmt->close();
$conn->close();

?>