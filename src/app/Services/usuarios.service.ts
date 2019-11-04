import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { classUser } from '../Model/usuario/usuario.module'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class UsuariosService {

  public User = null

  url = 'http://localhost/proyecto/';
  uri = '';

  alta(Nombre,AP,AM,Telefono,password,user,TipoUser) {
    return this.http.get(`${this.url}usuarioAlta.php?Nombre=${Nombre}&&AP=${AP}&&AM=${AM}&&Telefono=${Telefono}&&password=${password}&&user=${user}&&TipoUser=${TipoUser}`);    
  }

  Modificar(IdUsuario,Nombre,AP,AM,Telefono,password,user,TipoUser) {
    return this.http.get(`${this.url}usuarioModificar.php?IdUsuario=${IdUsuario}&&Nombre=${Nombre}&&AP=${AP}&&AM=${AM}&&Telefono=${Telefono}&&password=${password}&&user=${user}&&TipoUser=${TipoUser}`);    
  }

  baja(codigo:number) {
    return this.http.get(`${this.url}usuarioBaja.php?IdUsuario=${codigo}`);
  }










  private currentUserSubject: BehaviorSubject<classUser>;
  public currentUser: Observable<classUser>;

  constructor(private router: Router,private http: HttpClient) {
      this.currentUserSubject = new BehaviorSubject<classUser>(JSON.parse(localStorage.getItem('currentUser')));
      this.currentUser = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): classUser {
      return this.currentUserSubject.value;
  }

  login(username: string, pass: string) {

    this.uri= this.url+'usuario.php?usuario='+ username +'&contrasena='+ pass;
    //console.log(this.uri);

      return this.http.get<any>(this.uri)
          .pipe(map(user => {
              if (user && user['user'][0]['Perfil'] != "") {
                  localStorage.setItem('currentUser', JSON.stringify(user));
                  this.currentUserSubject.next(user);
              }

              if(user['user'][0]['Perfil'] == "undefined")
              {
                console.log(user['user'][0]['Perfil']);
                
              }


              return user;
          }));
  }

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
      //this.router.navigate(["/Login"]);
  }








}
