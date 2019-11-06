import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VentaService } from '../../venta.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {Venta } from '../../venta';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {
  zone: any;

  constructor(private formBuilder: FormBuilder, private _VentaService: VentaService, private router: Router) { }

  _id: any;
  addForm: FormGroup;
  ventas: Venta[];

  ngOnInit() {

    this.addForm = this.formBuilder.group({
      id_compras: [''],
      cantidad: ['', Validators.required]
    });

    this._VentaService.getVentas().subscribe((data: Venta[]) => {
      this.ventas = data;
      console.log(this.ventas);
    });
  }

  edit(venta: Venta): void{
    console.log(this.addForm.value);
    this._VentaService.createVenta(this.addForm.value).subscribe(data =>{
      //this.router.navigate(['ECompras']);
      console.log('listo');
    });
    this._VentaService.updateVentas(venta.id).subscribe(data => {
      this.ventas = this.ventas.filter(u => u !== venta);
    });

      location.reload();
  }

}