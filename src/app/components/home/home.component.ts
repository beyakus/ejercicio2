import { Component, OnInit } from '@angular/core';

declare var $:any;


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('.carousel').carousel({
      interval: 2000
    })
  }

  cards:Object[] = [
    { titulo:"Pasteles", descripcion:"Disfruta de nuesta línea ricos pasteles", imagen:"./assets/img/pastel.jpg"},
    { titulo:"Pan", descripcion:"Disfruta de amplia varidad de panes", imagen:"./assets/img/panventa.jpg"},
    { titulo:"Gelatinas", descripcion:"Disfruta de nuestros distintos sabores de gelatina", imagen:"./assets/img/gelatina.jpg"},
    { titulo:"pago con tarjeta", descripcion:"Aceptamos pagos con tarjeta Visa y MasterCard", imagen:"./assets/img/tarjeta.png"}
  ]

}
