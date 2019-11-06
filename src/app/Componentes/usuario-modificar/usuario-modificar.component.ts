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

  Modificar(idUsuario)
  {
    console.log(idUsuario);
  }

}
