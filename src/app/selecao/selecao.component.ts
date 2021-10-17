import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-selecao',
  templateUrl: './selecao.component.html',
  styleUrls: ['./selecao.component.css']
})
export class SelecaoComponent  {

  @Input() titulo     : string    = "";
  @Input() opcoes     : string[]  = [];
  @Input() escolhaAte : number    = 0;
  escolhidos          : number    = 0;
  selecionados        : boolean[] = [];

  selecionado(indice : number) {
    if (this.escolhaAte>1) {
      this.selecionados[indice] = !this.selecionados[indice];
      this.escolhidos += (this.selecionados[indice]) ? 1 : -1;
    }
  }

  clicado(event :any) {
    console.table(event.target.checked);
  }

}
