
<?php

header('Access-Control-Allow-Origin: *'); 
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$user = "SISCON";
$pass = "D73CRPNxYs.ut";
$server="localhost";
$db="proyecto";
$con = mysqli_connect($server,$user,$pass,$db);



$IdUsuario = $_GET['IdUsuario'];

 
$consulta = "delete from usuarios where IdUsuario=$IdUsuario";

$resultado = $con->query($consulta);



class Result {}

  if($resultado)
  {
      $response = new Result();
      $response->resultado = 'OK';
      $response->mensaje = 'datos eliminados';
  }else{
      $response = new Result();
      $response->resultado = 'no ok';
      $response->mensaje = 'no se elimino';
  }


header('Content-Type: application/json');
echo json_encode($response);  
?>