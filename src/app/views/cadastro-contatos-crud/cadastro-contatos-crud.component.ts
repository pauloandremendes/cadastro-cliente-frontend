import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CadastroContatosCreateComponent } from '../../components/cadastro-contatos/cadastro-contatos-create/cadastro-contatos-create.component';

@Component({
  selector: 'app-cadastro-contatos-crud',
  templateUrl: './cadastro-contatos-crud.component.html',
  styleUrls: ['./cadastro-contatos-crud.component.css']
})
export class CadastroContatosCrudComponent implements OnInit {

  constructor(
    private router: Router,
    public dialog: MatDialog
    ) { }

  ngOnInit(): void {
  }

  navigateCadastroContatosCreate(): void {
    this.router.navigate(['/cadastro-contatos/create'])
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(CadastroContatosCreateComponent);
  }

}
