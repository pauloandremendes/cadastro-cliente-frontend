import { CadastroContatosCreateComponent } from './components/cadastro-contatos/cadastro-contatos-create/cadastro-contatos-create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { CadastroContatosCrudComponent } from './views/cadastro-contatos-crud/cadastro-contatos-crud.component';
import { CadastroContatosEditComponent } from './components/cadastro-contatos/cadastro-contatos-edit/cadastro-contatos-edit.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "cadastro-contatos",
    component: CadastroContatosCrudComponent
  },
  {
    path: "cadastro-contatos/create",
    component: CadastroContatosCreateComponent
  },
  {
    path: "cadastro-contatos-editar/:id",
    component: CadastroContatosEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
