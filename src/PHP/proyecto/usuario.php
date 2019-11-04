
<?php

header('Access-Control-Allow-Origin: *');
//header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");


    $user = "SISCON";
    $pass = "D73CRPNxYs.ut";
    $server="localhost";
    $db="proyecto";
    $con = mysqli_connect($server,$user,$pass,$db);
 
    $Usuario = $_GET['usuario'];
    
    $contrasena = $_GET['contrasena'];
    $json = array();


    if($con)
    {
        if($Usuario != "")
        {
            $consulta = "SELECT * FROM usuarios inner join perfil on usuarios.IdPerfil = perfil.IdPerfil WHERE usuario = '$Usuario' and contrasena = '$contrasena';";

            $resultado = $con->query($consulta);
    
            if($registros = mysqli_fetch_array($resultado))
            {
                	
                $resultar['IdUsuario'] = $registros['IdUsuario'];
                $resultar['NombreUsuario'] = $registros['NombreUsuario'];
                $resultar['ApellidoPaterno'] = $registros['ApellidoPaterno'];
                $resultar['ApellidoMaterno'] = $registros['ApellidoMaterno'];
                $resultar['usuario'] = $registros['usuario'];
                $resultar['telefono'] = $registros['telefono'];
                $resultar['Perfil'] = $registros['DescripcionPerfil'];
                $json['user'][] = $resultar;
                
            }else
            {
                $resultar['IdUsuario'] ="";
                $resultar['NombreUsuario'] ="";
                $resultar['ApellidoPaterno'] ="";
                $resultar['ApellidoMaterno']  ="";
                $resultar['usuario']  ="";
                $resultar['telefono'] ="";
                $resultar['Perfil'] ="";
                $json['user'][] = $resultar;
            }
            mysqli_close($con);
            echo json_encode($json);
        }else
        {
            $resultar['success'] = 0;
            $resultar['message'] = "no retorna";
            $json['user'][] = $resultar;
            echo json_encode($json);
        }
    }else
        echo "Error de conexion";