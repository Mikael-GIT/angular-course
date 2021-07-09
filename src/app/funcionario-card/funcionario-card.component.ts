import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  styleUrls: ['./funcionario-card.component.css']
})
export class FuncionarioCardComponent {
  @Input() funcionario: any; //Utilizando o decorator @Input para definir que está variável será acessível
  //de fora do escopo deste componente, ou seja, neste caso está sendo acessado pelo FuncionaroCardComponent.

  constructor() { }


}
