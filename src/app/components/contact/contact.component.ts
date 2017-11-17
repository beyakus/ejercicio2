import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $:any;
declare var swal:any;

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styles: []
})
export class ContactComponent implements OnInit {

  mostrarFormulario:boolean = true;

  constructor( private router:Router ) { }

  ngOnInit() {
  }

  contact(){
    swal({
      position: 'top-center',
      type: 'success',
      title: 'Gracias por cont&aacute;ctarnos',
      showConfirmButton: false,
      timer: 1500
    })

    setTimeout( ()=>{
      this.router.navigate(['']);
    },2000)
  }

}
