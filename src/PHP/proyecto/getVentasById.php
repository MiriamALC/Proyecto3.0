<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

require 'connect.php';

$id = $_GET['id'];

$sql = "SELECT * FROM ventas where id = '{$id}' LIMIT 1";

$result = mysqli_query($con, $sql);
$row = mysqli_fetch_assoc($result);

echo $json = json_encode($row);

exit;

?>