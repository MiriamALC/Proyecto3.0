<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

require 'connect.php';
$id = $_GET['id'];

echo $sql = "Delete from compras where id = '{$id}' LIMIT 1";

if(mysqli_query($con, $sql)){
    http_response_code(204);
}else{
    return http_response_code(422);
}

?>