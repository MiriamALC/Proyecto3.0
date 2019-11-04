import { Component, OnInit } from '@angular/core';
import { RuteoService } from 'src/app/Services/ruteo.service';

@Component({
  selector: 'app-ruteo-ubicacion',
  templateUrl: './ruteo-ubicacion.component.html',
  styleUrls: ['./ruteo-ubicacion.component.css']
})
export class RuteoUbicacionComponent implements OnInit {

  Description:string = "";
  lat:string = "";
  lng:string = "";

  constructor(private ruteoService:RuteoService) { }

  ngOnInit() {
  }


  Cancelar()
  {
    this.Description  ='';
    this.lat  = '';
    this.lng  = '';
  }

  Alta() {
    this.ruteoService.alta(this.Description,this.lat,this.lng).subscribe(datos => {
      if (datos['resultado']=='OK') {
        alert(datos['mensaje']);
        this.Cancelar();
      }
      else
      {
        alert(datos['mensaje']);
      }
    });
    this.Cancelar();
  }

}
