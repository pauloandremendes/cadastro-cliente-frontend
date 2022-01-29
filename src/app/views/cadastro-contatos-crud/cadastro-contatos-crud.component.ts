import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-cadastro-contatos-crud',
  templateUrl: './cadastro-contatos-crud.component.html',
  styleUrls: ['./cadastro-contatos-crud.component.css']
})
export class CadastroContatosCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateCadastroContatosCreate(): void {
    this.router.navigate(['/cadastro-contatos/create'])
  }

}
