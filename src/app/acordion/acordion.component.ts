import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acordion',
  templateUrl: './acordion.component.html',
  styleUrls: ['./acordion.component.css']
})
export class AcordionComponent implements OnInit {

  negrita = 'bold';

  poema1 = {
    Palabra1a: '',
    Palabra1b: '',
    Palabra1c: '',
    Palabra1d: '',
    Palabra1e: ''
  }

  poema2 = {
    Palabra2a: '',
    Palabra2b: '',
    Palabra2c: '',
    Palabra2d: '',
    Palabra2e: '',
    Palabra2f: '',
    Palabra2g: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
