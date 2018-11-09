import { Component,Inject, ViewChild, ElementRef } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { DialogData } from '../charactersheet/charactersheet.component';
import * as jspdf from 'jspdf';  
import html2canvas from 'html2canvas'; 
import * as rasterizeHTML from 'rasterizehtml';


import { Gang } from '../gang';
import printJS from 'print-js';


export interface GangDialogData {
  gang: Gang,
  

  }

@Component({
 selector: 'app-gangprintout',
 templateUrl: './gangprintout.component.html',
 styleUrls: ['./gangprintout.component.css']
})

export class GangprintoutComponent {  

 

constructor(
  public dialogRef: MatDialogRef<GangprintoutComponent>,
@Inject(MAT_DIALOG_DATA) public data: GangDialogData){
    
 }

 onNoClick(): void {
  this.dialogRef.close();
} 

@ViewChild('content') content: ElementRef;

/*This is the method invoked when the Gang is printed to PDF
at it's basic premise, it takes a snapshot of the viewport, which is moved down 
to then take another snapshot, this is then printed onto a PDF. This means there is a
break where the PDF pages break and currently it is impossible to fix. For higher quality scale
can be increased, however size of document doubles with each increment of 1. At scale of 2 this creates a document of about 50MB
any higher and it becomes very large and not suitable to download*/

public printPDF(){  

  if (window.innerWidth <= 800){
    console.log ("Mobile Version Downloading")
    var content = document.getElementById("container");

html2canvas(content,{
useCORS: true,
pagesplit: true,
scale:2
}).then(canvas =>{  
  var imgWidth = 50;   
      var pageHeight = 295;    
      var imgHeight = canvas.height * imgWidth / canvas.width;  
      var heightLeft = imgHeight;  

  const contentDataURL = canvas.toDataURL('image/png')
  let pdf = new jspdf('p', 'mm', 'a4');
  var option = {
    useCORS: true,
    pagesplit: true,
  }
  var position = 0;
  pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight, option);
  heightLeft -= pageHeight;

  while (heightLeft >= 0) {
    position = heightLeft - imgHeight;
    pdf.addPage();
    pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight, option);
    heightLeft -= pageHeight;
  }  

  pdf.save('ganglist.pdf');
});
  }

  else{
    console.log("Desktop Version Downloading")
  var content = document.getElementById("container");

html2canvas(content,{
useCORS: true,
pagesplit: true,
scale:2
}).then(canvas =>{  
  var imgWidth = 180;   
      var pageHeight = 295;    
      var imgHeight = canvas.height * imgWidth / canvas.width;  
      var heightLeft = imgHeight;  

  const contentDataURL = canvas.toDataURL('image/png')
  let pdf = new jspdf('p', 'mm', 'a4');
  var option = {
    useCORS: true,
    pagesplit: true,
  }
  var position = 0;
  pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight, option);
  heightLeft -= pageHeight;

  while (heightLeft >= 0) {
    position = heightLeft - imgHeight;
    pdf.addPage();
    pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight, option);
    heightLeft -= pageHeight;
  }  

  pdf.save('ganglist.pdf');
});
}



}

public printHTML(){ 

  var content = document.getElementById("print").innerHTML;
  var mywindow = window.open('', 'Print', 'height = 400,width = 600');

  mywindow.document.write('<html><title>Carnevale Gang Builder</title>');
  mywindow.document.write('<body >');
  mywindow.document.write(content);
  mywindow.document.write('</body></html>');
  mywindow.document.close(); // necessary for IE >= 10

  mywindow.onload=function(){
    mywindow.focus()
    mywindow.print();
    mywindow.close();
  };
} 
}




  



  


