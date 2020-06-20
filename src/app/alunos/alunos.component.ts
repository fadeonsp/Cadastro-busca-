import { Component, OnInit, TemplateRef } from '@angular/core';
import { Aluno } from '../models/Aluno';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {

 public modalRef: BsModalRef;
 public alunoForm: FormGroup;
 public titulo = 'Alunos';
 public alunoSelecionado: Aluno;
 public textSimple: string;

  public alunos = [
    { id: 1, nome: 'Eduardo', sobrenome: 'cesar', telefone: 33225544 },
    { id: 2, nome: 'João', sobrenome: 'pedro', telefone: 22334455 },
    { id: 3, nome: 'Marcos', sobrenome: 'silva', telefone: 11998822 },
    { id: 4, nome: 'Sueli', sobrenome: 'vasconcelos', telefone: 99887722 },
    { id: 5, nome: 'Nora', sobrenome: 'silva', telefone: 22883377 },
    { id: 6, nome: 'Pedro', sobrenome: 'paiva', telefone: 33665544 },

  ];

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  constructor(private fb: FormBuilder, private modalService: BsModalService) {
    this.criarForm();
   }

  ngOnInit() {
  }
  criarForm() {
    this.alunoForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      telefone: ['', Validators.required]
    });
  }
  alunoSubmit() {
    console.log(this.alunoForm.value);
  }

  alunoSelect(aluno: Aluno) {
    this.alunoSelecionado = aluno;
    this.alunoForm.patchValue(aluno);
  }
  voltar() {
    this.alunoSelecionado = null;
  }

}
