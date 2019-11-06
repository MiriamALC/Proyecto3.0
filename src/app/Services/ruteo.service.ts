import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RuteoService {

  url = 'http://localhost/PHP/';

  constructor(private router: Router,private http: HttpClient) { }
  
  
  alta(DescripcionMapa,lat,lng) {
    return this.http.get(`${this.url}MapaAlta.php?DescripcionMapa=${DescripcionMapa}&&lat=${lat}&&lng=${lng}`);    
  }

  baja(codigo:number) {
    return this.http.get(`${this.url}MapaBaja.php?IdMapa=${codigo}`);
  }
}
