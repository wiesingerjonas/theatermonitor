<?php

$file = fopen("./db/dates.csv", "r") or die("Unable to open file!");
$content = [];
$terms = [];

while (!feof($file)) {
    $content[] = fgets($file);
}

for ($i = 0; $i < sizeof($content); $i++) {
    $parts = explode(";", $content[$i]);
    $line = [];
    $line[] = $parts[0];
    $line[] = $parts[1];
    $terms[] = $line;
}

echo json_encode($terms);