import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from 'src/app/Services/usuarios.service';
import { first } from 'rxjs/operators';
import { classUser } from '../../Model/usuario/usuario.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  constructor(private router: Router, private authenticationService:UsuariosService) {

      if(this.authenticationService.currentUserValue) { 
        this.router.navigate(['/']);
      }
   }

  password =''; 
  user='';
  loading = false;
  submitted = false;
  returnUrl: string;

  ngOnInit() {
  }

  Iniciar()
  {      
        this.loading = true;
        this.authenticationService.login(this.user, this.password)
            .pipe(first())
            .subscribe(
                data => {
                  this.loading = true;
                },
                error => {
                  console.log(error);
                    this.loading = false;
                });


                if(this.loading )
                  this.router.navigate(["/Dashboard"]);           
  }
}