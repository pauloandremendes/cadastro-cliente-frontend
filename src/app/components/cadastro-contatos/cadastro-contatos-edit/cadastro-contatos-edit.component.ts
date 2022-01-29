import { Cliente } from '../../../model/cliente.model';
import { Endereco } from '../../../model/endereco.model';
import { CadastroContatosService } from '../../../service/cadastro-contatos.service';
import { Component, Input, OnInit } from '@angular/core';
import { MessageService } from '../../../service/message.service';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { HttpParams } from '@angular/common/http';

interface Type {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-cadastro-contatos-edit',
  templateUrl: './cadastro-contatos-edit.component.html',
  styleUrls: ['./cadastro-contatos-edit.component.css'],
})
export class CadastroContatosEditComponent implements OnInit {
  length = 0;
  pageSize = 10;
  pageNumber = 0;

  clienteId!: number;

  endereco: Endereco =  {}
  cliente: Cliente = {endereco: this.endereco};
  types: Type[] = [
    { value: 'TRABALHO', viewValue: 'Trabalho' },
    { value: 'RESIDENCIA', viewValue: 'Residência' }
  ];

  constructor(
    private cadastroContatosService: CadastroContatosService,
    private router: ActivatedRoute,
    private router_navigation: Router,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.router.params.subscribe(value => this.clienteId = value.id);
    this.getClienteById(this.clienteId);
  }
  listarTodosClientes(){
    let params = new HttpParams();

    this.cadastroContatosService.listAll(params).subscribe(response => response);
  }
  getClienteById(id: number){
    this.cadastroContatosService.getContatoById(id).subscribe(response => {
      console.log(response);
      this.cliente = response;
    })
  }

  editContato(cliente: Cliente){
    console.log("Call edit contact method");
    this.cadastroContatosService.updateCliente(cliente).subscribe(response => {
      this.messageService.showMessage("Contato atualizado com sucesso.");
      this.router_navigation.navigate(['/cadastro-contatos']);
      this.listarTodosClientes();
    });
  }

  cancel(): void {
    this.router_navigation.navigate(['/cadastro-contatos']);
  }
}
