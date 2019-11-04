
<?php

  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

  $user = "SISCON";
  $pass = "D73CRPNxYs.ut";
  $server="localhost";
  $db="proyecto";
  $con = mysqli_connect($server,$user,$pass,$db);



  
  $Nombre = $_GET['Nombre'];
  $AP = $_GET['AP'];
  $AM = $_GET['AM'];
  $user = $_GET['user'];
  $password = $_GET['password'];
  $Telefono = $_GET['Telefono'];
  $TipoUser = $_GET['TipoUser'];

   
  $consulta = "insert into usuarios(NombreUsuario, ApellidoPaterno,ApellidoMaterno, usuario, contrasena, telefono,IdPerfil) values('$Nombre','$AP','$AM','$user','$password','$Telefono',$TipoUser)";

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