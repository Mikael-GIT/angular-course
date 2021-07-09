import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-funcionario-form',
  templateUrl: './funcionario-form.component.html',
  styleUrls: ['./funcionario-form.component.css']
})
export class FuncionarioFormComponent {

  constructor() { }

  ultimoId: number = 0;
  nome = "Mikael";
  adicionado = true;
  @Output() funcionarioAdicionado = new EventEmitter(); //Output é usado para saídas


  adicionar(){
    console.log(`adicionando ${this.nome}`);
    this.adicionado = false;
    const funcionario = {
      id: ++this.ultimoId,
      nome: this.nome
    };
    this.funcionarioAdicionado.emit(funcionario); //Quando queremos avisar ao componente que quer
    //ser informado quando o evento ocorrer, utilizamos o .emit do emissor de eventos, passando
    //como parâmetro um objeto que representa alguma coisa desse evento.
  }
}
