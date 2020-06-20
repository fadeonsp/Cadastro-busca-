import { Component, OnInit, TemplateRef } from '@angular/core';
import { Professor } from '../models/Professor';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {

  public modalRef: BsModalRef;
  public titulo = 'professores';
  public professorSelecionado: Professor;

  public professores = [
    { id: 1, nome: 'Flavio', disciplina: 'Angular'},
    { id: 2, nome: 'Fabio', disciplina: 'Computação'},
    { id: 3, nome: 'Felipe', disciplina: 'Algoritmos'},
    { id: 4, nome: 'Hugo', disciplina: 'PHP'},
    { id: 4, nome: 'Anibal', disciplina: 'Lógica'}
  ];

  professorSelect(professor: Professor) {
    this.professorSelecionado = professor;
  }
  voltar() {
    this.professorSelecionado = null;
  }

  constructor(private modalService: BsModalService) {}

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
   ngOnInit(): void {
  }

}
