import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Venta } from './venta';

@Injectable({
  providedIn: 'root'
})
export class VentaService {

  constructor(private http: HttpClient) { }

  getVentas(){
    return this.http.get<Venta[]>('http://localhost/PHP/listV.php');
  }

  deleteVenta(id: number){
    return this.http.delete<Venta[]>('http://localhost/PHP/deleteV.php?id='+id);
  }

  createVenta(ventas: Venta){
    return this.http.post('http://localhost/PHP/insertV.php', JSON.stringify(ventas));
  }

  getVentasById(id: number){
    return this.http.get<Venta[]>('http://localhost/PHP/getVentasById.php?id='+id);
  }

  updateVentas(id: number){
    console.log(id);
    return this.http.delete<Venta[]>('http://localhost/PHP/updateV.php?id='+id);
  }
}
