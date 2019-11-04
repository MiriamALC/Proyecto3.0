import { Component, OnInit } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})
export class PDFComponent implements OnInit {
  
  texto:string = '';
  
  constructor() { }

  ngOnInit() {
    
  }

  ProductoBajo(){
    
    /*this.http.get("http://127.0.0.1/proyecto/usuarioConsulta.php")
    .subscribe(
      result => {
        this.Producto = result;
      },
      error => {
        console.log('problemas');
      });*/

  }

  generatePdf(){
    const documentDefinition = { content: 'This is an sample PDF printed with pdfMake' };
    //pdfMake.createPdf(documentDefinition).open();
    //pdfMake.createPdf(documentDefinition).download();
    //pdfMake.createPdf(documentDefinition).print();
    pdfMake.createPdf(documentDefinition).open({}, window);
   }
}
