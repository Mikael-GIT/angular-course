import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  ultimoId: number = 0;
  nome = "Mikael";
  adicionado = true;
  funcionarios: any [] = [];

  adicionar(){
    console.log(`adicionando ${this.nome}`);
    this.adicionado = false;

    this.funcionarios.push({
      id: ++this.ultimoId,
      nome: this.nome
    });
  }
}
