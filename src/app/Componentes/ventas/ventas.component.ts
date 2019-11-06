import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VentaService } from '../../venta.service';
import {Venta } from '../../venta';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
  zone: any;

  constructor(private _VentaService: VentaService, private router: Router) { }

  _id: any;

  ventas: Venta[];

  ngOnInit() {
    this._VentaService.getVentas().subscribe((data: Venta[]) => {
      this.ventas = data;
      console.log(this.ventas);
    });
  }

  edit(venta: Venta): void{
    this._VentaService.updateVentas(venta.id).subscribe(data => {
      this.ventas = this.ventas.filter(u => u !== venta);
    });
      location.reload();
  }

}
