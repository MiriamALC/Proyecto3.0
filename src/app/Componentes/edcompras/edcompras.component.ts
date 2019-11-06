import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CompraService } from '../../compra.service';
import { Compra } from '../../compra';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edcompras',
  templateUrl: './edcompras.component.html',
  styleUrls: ['./edcompras.component.css']
})
export class EDComprasComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private _CompraService: CompraService, private router: Router, private routes: ActivatedRoute) { }

  addForm: FormGroup;
  compras: Compra[];

  ngOnInit() {
    const routeParams =  this.routes.snapshot.params;

    //console.log(routeParams.id);
    this.addForm = this.formBuilder.group({
      id: [''],
      nombre: ['', Validators.required],
      precio: ['', Validators.required],
      existencias: ['', Validators.required]
    });

    this._CompraService.getComprasById(routeParams.id).subscribe((data: any) => {

      console.log(data);
      this.addForm.patchValue(data);
    })

  }

  update(){
    this._CompraService.updateCompras(this.addForm.value).subscribe(() => {
      this.router.navigate(['ECompras']);
    },
    error => {
      alert(error);
    });
  }
}
