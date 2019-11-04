
<?php
//error_reporting(0);
header('Access-Control-Allow-Origin: *');
//header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");


    $user = "SISCON";
    $pass = "D73CRPNxYs.ut";
    $server="localhost";
    $db="proyecto";
    $con = mysqli_connect($server,$user,$pass,$db);
 
     $json = array();

    if($con)
    {
        $consulta = "select * from Mapa";

        $resultado = $con->query($consulta);

        while($row = mysqli_fetch_array($resultado)) $array[] = $row;

        echo $json = json_encode($array);
    
    }else
        echo "Error de conexion";