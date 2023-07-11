import { Component } from '@angular/core';

@Component({
  selector: 'atv-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent {
  aluno = {nome: 'Renan', situacao: 'Desaprovado', isAprovado: true};
}
