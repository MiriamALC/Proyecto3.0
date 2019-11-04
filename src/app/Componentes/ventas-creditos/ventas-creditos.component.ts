import { Component, OnInit } from '@angular/core';
import { VentaCreditoService } from 'src/app/Services/venta-credito.service';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-ventas-creditos',
  templateUrl: './ventas-creditos.component.html',
  styleUrls: ['./ventas-creditos.component.css']
})
export class VentasCreditosComponent implements OnInit {

  private productoCarrito = [];
  private productoBusqueda = null;

  text:string = '';

  Busquedaid:string = "";
  Busquedacantidad:number;
  Busquedadescripcion:string = "";
  Busquedaprecio:number;
  Busqueda:string ="";

  total:number = 0;
  cliente:string = "";
  CantidadCambiar:number;

  nproducto:number = 0;

  constructor(private ventaService:VentaCreditoService) { }

  ngOnInit() {
  }

  Buscar()
  {
    if(this.Busqueda != "")
    {
      this.ventaService.Buscar(this.Busqueda).subscribe(datos => {
        this.productoBusqueda = datos;
        this.Busquedaid = datos[0]['idProducto'];
        this.Busquedacantidad = 1;
        this.Busquedadescripcion= datos[0]['descripcionProducto'];
        this.Busquedaprecio = datos[0]['precio'];
        this.CantidadCambiar = datos[0]['cantidad'] - this.Busquedacantidad;
        console.log(this.productoBusqueda );
      });
    }
  }

  CancelarBusqueda()
  {
    this.limpiar();
  }

  quitar(n:number)
  {
    console.log(n);
    this.productoCarrito.splice( n-1 );
    console.log(this.productoCarrito.length);
  }

  cambiar()
  {    
    this.ventaService.cambiar(this.CantidadCambiar).subscribe(datos => { }); 
  }

  limpiar()
  {
    this.Busquedaid = "";
    this.Busquedacantidad = 0;
    this.Busquedadescripcion= "";
    this.Busquedaprecio = 0;
  }

  AgregarProducto()
  {
    this.total = this.total+(this.Busquedaprecio * this.Busquedacantidad) ;
    this.nproducto = this.nproducto + 1;
    console.log(this.total);
    this.productoCarrito.push({
      'cant' : this.Busquedacantidad,
      'prod' : this.Busquedaid,
      'desc' : this.Busquedadescripcion,
      'precio' : this.Busquedaprecio,
    }); 

    
    this.limpiar();

  }

  PDF()
  {

    //this.text = '<table style="width:100%"><tr><th>PRODUCTO</th><th>PRECIO</th><th>CANTIDAD</th></tr>';
    this.text = 'CLIENTE ' + this.cliente +'                                                                                                                                                        ';
    this.text = this.text + 'PRODUCTO - PRECIO - CANTIDAD                                                                                                                 ';
    for(var i = 0; i < this.productoCarrito.length ;i++)
    {
      this.text = this.text+this.productoCarrito[i]['desc']+' - '+this.productoCarrito[i]['precio']+' - '+this.productoCarrito[i]['cant']+'                                                                                                                          ';
      //this.text = this.text+'<tr><td>'+this.productoCarrito[i]['desc']+'</td><td>'+this.productoCarrito[i]['precio']+'</td><td>'+this.productoCarrito[i]['cant']+'</td>/tr></table> ';
    }

    
  }

  Alta()
  {
    this.PDF();
    console.log(this.text);
    console.log(this.productoCarrito);
      const documentDefinition = { content: this.text };

      this.text = '';
      pdfMake.createPdf(documentDefinition).open({}, window);
  }

}
