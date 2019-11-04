import { Component, OnInit } from '@angular/core';
import { classUser } from '../../Model/usuario/usuario.module';
import { UsuariosService } from 'src/app/Services/usuarios.service';
import { Subscription } from 'rxjs';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  constructor(){}
  /*
    currentUser: classUser;
    currentUserSubscription: Subscription;
    users: classUser[] = [];


    tipoUsuario = '';
    usuario = '';
    
    constructor(
      private authenticationService:UsuariosService
    ) {
          this.currentUserSubscription = this.authenticationService.currentUser.subscribe(user => {
          this.currentUser = user;
                  
          console.log(user);

          this.tipoUsuario = user.Perfil;
          this.usuario = user.nombre + " " + user.AP + " " + user.AM;

      });
  }*/
  
 
  ngOnInit() {
  }

/*  ngOnDestroy() {
      this.currentUserSubscription.unsubscribe();
  }

  private loadAllUsers() {
      this.userService.getAll().pipe(first()).subscribe(users => {
          this.users = users;
      });
  }*/

}
