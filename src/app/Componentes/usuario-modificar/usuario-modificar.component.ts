import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { createUrlResolverWithoutPackagePrefix } from '@angular/compiler';
import { UsuariosService } from 'src/app/Services/usuarios.service';

@Component({
  selector: 'app-usuario-modificar',
  templateUrl: './usuario-modificar.component.html',
  styleUrls: ['./usuario-modificar.component.css']
})
export class UsuarioModificarComponent implements OnInit {
  
  private usuarios = null;
  
  Telefono: string  ='';
  user: string  = '';
  password: string  = '';
  AP: string  = '';
  AM: string  = '';
  Nombre: string  = '';
  TipoUser: string  = '';
  idUser: number = 0;

  
  constructor(private http: HttpClient,private usuarioService:UsuariosService) { }

  ngOnInit() {

    this.Cargar();
    
  }

  Cargar()
  {
    this.http.get("http://127.0.0.1/proyecto/usuarioConsulta.php")
    .subscribe(
      result => {
        this.usuarios = result;
      },
      error => {
        console.log('problemas');
      });
  }

  Eliminar(idUsuario)
  {
    console.log(idUsuario);

    this.usuarioService.baja(idUsuario).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.Cargar();
      }
      else
      {
        alert(datos['mensaje']);
      }
    });
  }

  AltaModificar()
  {
    this.usuarioService.Modificar(this.idUser,this.Nombre,this.AP,this.AM,this.Telefono,this.password,this.user,this.TipoUser).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.CancelarModificar();
      }
      else
      {
        alert(datos['mensaje']);
        this.idUser = 0;
      }
    });
  }

  Modificar(idUsuario)
  {
    
    this.idUser = idUsuario;
    console.log(idUsuario);
    this.http.get(`http://127.0.0.1/proyecto/usuarioCon.php?usuario=${idUsuario}`)
    .subscribe(
      datos => {
        this.usuarios = datos;
        console.log(this.usuarios);
        this.Telefono = datos[0]['telefono'];
        this.user  = datos[0]['usuario'];
        this.password = datos[0]['contrasena'];
        this.AP  = datos[0]['ApellidoPaterno'];
        this.AM  = datos[0]['ApellidoMaterno'];
        this.Nombre = datos[0]['NombreUsuario'];
        //this.idUser =0;
      },
      error => {
        console.log('problemas');
        this.idUser = 0;
      });
    this.Cargar();
  }

  onChange(selectedValue){
    this.TipoUser = selectedValue;
    console.info("Selected:",this.TipoUser);
  }

  
  CancelarModificar()
  {
    this.Telefono  ='';
    this.user  = '';
    this.password  = '';
    this.AP  = '';
    this.AM  = '';
    this.Nombre = '';
    this.idUser = 0;
  }


}
