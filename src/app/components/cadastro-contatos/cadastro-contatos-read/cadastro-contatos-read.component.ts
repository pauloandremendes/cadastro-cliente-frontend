import { CadastroContatosService } from '../../../service/cadastro-contatos.service';
import { Cliente } from '../../../model/cliente.model';
import { Component, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { MessageService } from 'src/app/service/message.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-cadastro-contatos-read',
  templateUrl: './cadastro-contatos-read.component.html',
  styleUrls: ['./cadastro-contatos-read.component.css']
})
export class CadastroContatosReadComponent implements OnInit {

  clientes: Cliente[] = [];
  displayedColumns: string[] = ['id', 'nome', 'sobrenome', 'cpf','email', 'edit', 'delete'];

  constructor(
    private cadastroContatosService: CadastroContatosService,
    private messageService: MessageService,
    private router: Router) { }

  ngOnInit(): void {
    this.listarTodosClientes();

  }

  listarTodosClientes(){
    let params = new HttpParams();

    this.cadastroContatosService.listAll(params).subscribe(response => {
      console.log(response);
      this.clientes = response;
    });
  }

  deleteClienteById(id: number){
    this.cadastroContatosService.delete(id).subscribe(response => {
      this.messageService.showMessage("Deletado com sucesso!");
      this.listarTodosClientes();
    })
  }

  callEditPage(clienteId: number){
    this.router.navigate([`/cadastro-contatos-editar/${clienteId}`],);
  }

}
