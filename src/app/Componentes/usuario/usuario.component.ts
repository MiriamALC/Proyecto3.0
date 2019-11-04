import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/Services/usuarios.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
  
  Telefono: string  ='';
  user: string  = '';
  password: string  = '';
  AP: string  = '';
  AM: string  = '';
  Nombre: string  = '';
  TipoUser: string  = '';

  usuarios=null;
  
  

  constructor(private usuarioService:UsuariosService) { }

  onChange(selectedValue){
    this.TipoUser = selectedValue;
    console.info("Selected:",this.TipoUser);
  }
  
  ngOnInit() {
  }

  Cancelar()
  {
    this.Telefono  ='';
    this.user  = '';
    this.password  = '';
    this.AP  = '';
    this.AM  = '';
    this.Nombre = '';
  }

  Alta() {
    this.usuarioService.alta(this.Nombre,this.AP,this.AM,this.Telefono,this.password,this.user,this.TipoUser).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.Cancelar();
      }
      else
      {
        alert(datos['mensaje']);
      }
    });
  }



}
