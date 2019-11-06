<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

require 'connect.php';

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)){
    $request= json_decode($postdata);

    $nombre = mysqli_real_escape_string($con, $request->nombre);
    $precio = mysqli_real_escape_string($con, $request->precio);
    $existencias = mysqli_real_escape_string($con, $request->existencias);

    $sql = "INSERT INTO compras (
        nombre,
        precio,
        existencias)
        VALUES
        ('{$nombre}',
        '{$precio}',
        '{$existencias}')";

if(mysqli_query($con, $sql)){
    http_response_code(201);
}else{
    return http_response_code(422);
}
}
?>