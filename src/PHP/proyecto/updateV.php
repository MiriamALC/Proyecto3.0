<?php

header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

require 'connect.php';
$id = $_GET['id'];

/*$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);

    $id = mysqli_real_escape_string($con, (int)$_GET['id']);
    $nombre = mysqli_real_escape_string($con, trim($request->nombre));
    $precio = mysqli_real_escape_string($con, $request->precio);
    $existencias = mysqli_real_escape_string($con, $request->existencias);*/

$sql = "UPDATE compras set existencias = existencias - 1 where id = '{$id}' LIMIT 1";

if(mysqli_query($con, $sql)){
    return http_response_code(204);
}else{
    return http_response_code(422);
}
//}

?>