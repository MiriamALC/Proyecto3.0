import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/Services/usuarios.service';
import { Subscription } from 'rxjs';
import { classUser } from 'src/app/Model/usuario/usuario.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  currentUser: classUser;
  currentUserSubscription: Subscription;
  users: classUser[] = [];


  tipoUsuario = '';
  usuario = '';
  
  constructor(
    private authenticationService:UsuariosService,
    private router: Router
  ) {
        this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
        this.currentUser = user;        
        
        this.tipoUsuario = user['user'][0]['Perfil'];
        this.usuario = user['user'][0]['NombreUsuario'] + " " + user['user'][0]['ApellidoPaterno'] + " " + user['user'][0]['ApellidoMaterno'];
        
        if(user['user'][0]['Perfil'] == "Administrador" || user['user'][0]['Perfil'] == "Empreado" )
          console.log(user['user'][0]['Perfil']);
        else
          this.router.navigate(["/Login"]);
        

        });
    }


  cerrar()
  {
    //this.authenticationService.logout();
    this.router.navigate(["/Login"]);
  }  

  ngOnInit() {
    
  }

}
