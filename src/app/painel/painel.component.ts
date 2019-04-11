import { Component, OnInit } from '@angular/core';
import { Frase } from 'src/app/shared/Frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases     : Frase[] = FRASES;
  public instrucao  : string = "Traduza a frase";
  public resposta   : string;
  public rodada     : number = 0;
  public rodadaFrase: Frase;
  public progresso  : number = 0;
  public tentativas  : number = 3;

  constructor() { 
    this.atualizarRodada();
  }

  ngOnInit() {
  }

  public atualizarResposta(resposta: Event): void {
    this.resposta = ( (<HTMLInputElement>resposta.target).value );
  }

  public verificarResposta(): void {
    if(this.rodadaFrase.frasePtBr == this.resposta) {
      alert('A tradução está Correta');
      //trocar pergunta da rodada
      this.rodada++;
      //progresso
      this.progresso = this.progresso + (100 / this.frases.length);
      //atualiza o objeto rodadaFrase
      this.atualizarRodada();
    } else {
      //diminuir a variavel tentativas
      this.tentativas--;
      if(this.tentativas === -1 ) {
        alert('Você perdeu todas as tentivas.')
      } else {
        alert('A tradução está errada');
      }
    }
  }

  public atualizarRodada(): void {
    //define a frase da rodade com base em alguma lógica
    this.rodadaFrase = this.frases[this.rodada];
    //limpar a resposta
    this.resposta = '';
  }

}
