import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriasComponent } from './categorias/categorias.component';

import { HomeComponent } from './home/home.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { LoginComponent } from './layout/login/login.component';
import { AuthGuard } from './account/auth.guard';
import { RegistrarComponent } from './registrar/registrar.component';
import { SenhaComponent } from './senha/senha.component';
import { NovoComponent } from './novo/novo.component';
import { VeiculosComponent } from './veiculos/veiculos.component';
import { CategoriasNovoComponent } from './categorias-novo/categorias-novo.component';
import { VeiculosNovoComponent } from './veiculos-novo/veiculos-novo.component';
import { CategoriasUpdateComponent } from './categorias-update/categorias-update.component';
import { VeiculosUpdateComponent } from './veiculos-update/veiculos-update.component';
import { TesteComponent } from './teste/teste.component';
import { VeiculoEcategoriaComponent } from './veiculo-ecategoria/veiculo-ecategoria.component';

const routes: Routes = [

  {path: '', component: HomeComponent,  children: [
      { path: "categorias", component: CategoriasComponent },
      { path: "veiculos", component: VeiculosComponent },
      { path: "veiculos/categorias", component: VeiculoEcategoriaComponent },
      { path: "novo", component: NovoComponent },
      { path: "categoriasNovo", component: CategoriasNovoComponent },
      { path: "veiculosNovo", component: VeiculosNovoComponent },
      { path: "veiculosUpdate/:id", component: VeiculosUpdateComponent },
      { path: "categoriasUpdate/:id", component: CategoriasUpdateComponent },
      { path: "teste", component: TesteComponent}
    ],
    canActivate: [AuthGuard],
  },

  {
    path: '', component: AuthenticationComponent,
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: "registrar", component: RegistrarComponent },
      { path: "senha", component: SenhaComponent }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
