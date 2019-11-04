
<?php

  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

  $user = "SISCON";
  $pass = "D73CRPNxYs.ut";
  $server="localhost";
  $db="proyecto";
  $con = mysqli_connect($server,$user,$pass,$db);



  
  $DescripcionMapa = $_GET['DescripcionMapa'];
  $lat = $_GET['lat'];
  $lng = $_GET['lng'];

   
  $consulta = "insert into Mapa(DescripcionMapa, lat,lng)values('$DescripcionMapa','$lat','$lng')";
echo $consulta;
  $resultado = $con->query($consulta);

  

  class Result {}

    if($resultado)
    {
        $response = new Result();
        $response->resultado = 'OK';
        $response->mensaje = 'datos grabados';
    }else{
        $response = new Result();
        $response->resultado = 'no ok';
        $response->mensaje = 'no se guardo';
    }


  header('Content-Type: application/json');
  echo json_encode($response);  
?>