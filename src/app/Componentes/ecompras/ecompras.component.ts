import { Component, OnInit } from '@angular/core';
import { CompraService } from '../../compra.service';
import { Compra } from '../../compra';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ecompras',
  templateUrl: './ecompras.component.html',
  styleUrls: ['./ecompras.component.css']
})
export class EComprasComponent implements OnInit {
  _id: any;

  constructor(private _CompraService: CompraService, private router: Router) { }

  compras: Compra[];

  ngOnInit() {
    this._CompraService.getCompras().subscribe((data: Compra[]) => {
      this.compras = data;
      console.log(this.compras);
    });
  }
  delete(compras: Compra): void{
    this._CompraService.deleteCompra(compras.id).subscribe(data => {
      this.compras = this.compras.filter(u => u !== compras);
    });
  }

  edit(compras: Compra){
    this._id = compras.id;
    this.router.navigate(['EDCompras/' + this._id]);
  }

}
