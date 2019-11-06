<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

require 'connect.php';
$prods = [];
$sql = "SELECT * FROM compras";

if($result = mysqli_query($con, $sql)){
    $cr = 0;
    while($row = mysqli_fetch_assoc($result)){
        $prods[$cr]['id'] = $row['id'];
        $prods[$cr]['nombre'] = $row['nombre'];
        $prods[$cr]['precio'] = $row['precio'];
        $prods[$cr]['existencias'] = $row['existencias'];
        $cr++;
    }

    echo json_encode($prods);
}else{
    http_response_code(404);
}
?>