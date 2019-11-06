<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

require 'connect.php';

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)){
    $request= json_decode($postdata);

    $id_compras = mysqli_real_escape_string($con, $request->id_compras);
    $cantidad = mysqli_real_escape_string($con, $request->cantidad);

    $sql = "INSERT INTO ventas (
        id_compras,
        cantidad)
        VALUES
        ('{$id_compras}',
        '{$cantidad}')";

if(mysqli_query($con, $sql)){
    http_response_code(201);
}else{
    return http_response_code(422);
}
}
?>