import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompraService } from '../../compra.service';
import { Compra } from '../../compra';
import { Router } from '@angular/router';

@Component({
  selector: 'app-compras',
  templateUrl: './compras.component.html',
  styleUrls: ['./compras.component.css']
})
export class ComprasComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private _CompraService: CompraService, private router: Router) { }

  addForm: FormGroup;
  compras: Compra[];

  ngOnInit() {
    
    this.addForm = this.formBuilder.group({
      nombre: ['', Validators.required],
      precio: ['', Validators.required],
      existencias: ['', Validators.required]
    });

    /*this._CompraService.getCompras().subscribe((data: Compra[]) => {
      this.compras = data;
      console.log(this.compras);
    });*/

  }

  onSubmit(){
    console.log(this.addForm.value);
    this._CompraService.createCompra(this.addForm.value).subscribe(data =>{
      this.router.navigate(['ECompras']);
    });
  }

}
