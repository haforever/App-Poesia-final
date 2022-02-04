import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cuadro-info',
  templateUrl: './cuadro-info.component.html',
  styleUrls: ['./cuadro-info.component.css']
})
export class CuadroInfoComponent implements OnInit {

  negrita = 'bold';
  inclinada = 'oblique';

  constructor() { }

  ngOnInit(): void {
  }

}
