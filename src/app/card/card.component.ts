import { Component, Input,Output,EventEmitter} from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent  {

  @Input()
  titulo: String = 'Título'
  @Input()
  subtitulo: String = 'Subtítulo'
  @Input()
  conteudo: String = 'Conteúdo'
  @Input()
  conteudo2: String = 'Conteúdo'
  @Input()
  conteudo3: String = 'Conteúdo'
  @Input()
  Bg: String = 'White'
  @Input()
  letra: String = 'black'
  @Input()
  h:String = '400px'
  @Input()
  cBtn:String = "red"
  @Input()
  sizeL: String = "15px"
  @Input()
  C:String = "black"
  

  
  @Output()
  clickEvent: EventEmitter<String> = new EventEmitter<String>()
  evento(): void {
    this.clickEvent.emit()
  }
  constructor(private msg: MatSnackBar) {}

  mensagem():void {
    this.msg.open('Pacote comprado.','Fechar');

}}
