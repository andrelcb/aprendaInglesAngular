import { Component, OnInit } from '@angular/core';
import { Frase } from 'src/shared/Frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES;
  public instrucao: string = "Traduza a frase";
  public resposta: string;

  constructor() { 
    console.log(this.frases);
  }

  ngOnInit() {
  }

  public atualizarResposta(resposta: Event): void {
    this.resposta = ( (<HTMLInputElement>resposta.target).value );
  }

  public verificarResposta(): void {
    console.log('verificar resposta:', this.resposta);
  }

}
