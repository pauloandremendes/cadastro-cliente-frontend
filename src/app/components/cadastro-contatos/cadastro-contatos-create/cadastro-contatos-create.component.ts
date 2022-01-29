import { Cliente } from '../../../model/cliente.model';
import { Endereco } from '../../../model/endereco.model';
import { CadastroContatosService } from '../../../service/cadastro-contatos.service';
import { Component, OnInit } from '@angular/core';
import { MessageService } from '../../../service/message.service';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';
import { HttpParams } from '@angular/common/http';

interface Type {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-cadastro-contatos-create',
  templateUrl: './cadastro-contatos-create.component.html',
  styleUrls: ['./cadastro-contatos-create.component.css'],
})
export class CadastroContatosCreateComponent implements OnInit {
  length = 0;
  pageSize = 10;
  pageNumber = 0;

  types: Type[] = [
    { value: 'TRABALHO', viewValue: 'Trabalho' },
    { value: 'RESIDENCIA', viewValue: 'Residência' }
  ];

  public listaCLiente: Cliente[] = [];
  public endereco: Endereco = {};
  public cliente: Cliente = { endereco: this.endereco };
  clientes: Cliente[] = [];


  constructor(
    private cadastroContatosService: CadastroContatosService,
    private router: Router,
    // private dialog: MatDialog,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    let params = new HttpParams();

    this.cadastroContatosService.listAll(params).subscribe(response => {
      console.log(response);
      this.clientes = response;
    });
  }


  createContato(): void {
    this.cadastroContatosService
      .createEndereco(this.endereco)
      .subscribe((response) => {
        this.cliente.endereco = response
        this.cadastroContatosService.create(this.cliente)
          .subscribe((responseCli) => {
            this.cliente = responseCli;
            this.router.navigate(['/cadastro-contatos'])
          })

      });


  }

  cancel(): void {
    this.router.navigate(['/cadastro-contatos']);
  }
}
