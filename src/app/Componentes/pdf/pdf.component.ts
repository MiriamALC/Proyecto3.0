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

  constructor() { }

  ngOnInit() {
    
  }


  generatePdf(){
    const documentDefinition = { content: 'This is an sample PDF printed with pdfMake' };
    //pdfMake.createPdf(documentDefinition).open();
    //pdfMake.createPdf(documentDefinition).download();
    //pdfMake.createPdf(documentDefinition).print();
    pdfMake.createPdf(documentDefinition).open({}, window);
   }
}
