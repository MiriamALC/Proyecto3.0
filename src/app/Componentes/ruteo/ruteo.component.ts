import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ruteo',
  templateUrl: './ruteo.component.html',
  styleUrls: ['./ruteo.component.css']
})
export class RuteoComponent implements OnInit {

  constructor(private http: HttpClient) { }

  private ubicacion = null;

  lat:number = 21.839788;
  lng:number = -102.3519674;
  
  Ilat:number;
  Ilng:number;

 
  ngOnInit() {

    this.setCurrentLocation();
    this.Cargar();
  }

  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.Ilat = position.coords.latitude;
        this.Ilng = position.coords.longitude;
        console.log( position.coords.latitude + position.coords.longitude +", "+this.Ilat +this.Ilng);
      });
    }
  }

  Cargar()
  {
    this.http.get("http://127.0.0.1/proyecto/MapaConsulta.php")
    .subscribe(
      result => {
        this.ubicacion = result;
        
        console.log(this.ubicacion );
      },
      error => {
        console.log('problemas');
      });
  }

}
