import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VentaCreditoService {

  url = 'http://localhost/PHP/';

  constructor(private router: Router,private http: HttpClient) { }

  Buscar(codigo:string) {
    return this.http.get(`${this.url}Busqueda.php?idBusqueda=${codigo}`);
  }

  cambiar(cantidad:number) {
    return this.http.get(`${this.url}Busqueda.php?idBusqueda=${cantidad}`);
  }
}
