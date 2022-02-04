import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {

  tituloPagina = 'Poesía digital';
  nombre1 = 'Amairani Aguilar';
  nombre2 = 'Juan Francisco Carrillo';
  nombre3 = 'Andrés Fonseca';
  negrita = 'bold';

  constructor() { }

  ngOnInit(): void {
  }

}
