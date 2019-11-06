import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Compra } from './compra';

@Injectable({
  providedIn: 'root'
})
export class CompraService {

  constructor(private http: HttpClient) { }

  getCompras(){
    return this.http.get<Compra[]>('http://localhost/PHP/list.php');
  }

  deleteCompra(id: number){
    return this.http.delete<Compra[]>('http://localhost/PHP/delete.php?id='+id);
  }

  createCompra(compra: Compra){
    return this.http.post('http://localhost/PHP/insert.php', JSON.stringify(compra));
  }

  getComprasById(id: number){
    return this.http.get<Compra[]>('http://localhost/PHP/getComprasById.php?id='+id);
  }

  updateCompras(compra: Compra){
    return this.http.put('http://localhost/PHP/update.php' + '?id=' + compra.id, compra);
  }
}
