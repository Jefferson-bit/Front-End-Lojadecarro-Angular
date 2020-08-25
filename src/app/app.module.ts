import { BrowserModule, ɵHAMMER_PROVIDERS__POST_R3__ } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { HomeComponent } from './home/home.component';
import { CategoriasComponent } from './categorias/categorias.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';

import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { LoginComponent } from './layout/login/login.component';
import { CategoriaService } from './service/categoria.service';
import { VeiculoService } from './service/veiculo.service';
import { VeiculosComponent } from './veiculos/veiculos.component';
import { httpInterceptorProviders } from './interceptor';
import { RegistrarComponent } from './registrar/registrar.component';
import { SenhaComponent } from './senha/senha.component';
import { StorageserviceService } from './service/storageservice.service';
import { RegistrarService } from './service/registrar.service';
import { EmailService } from './service/email.service';
import { NovoComponent } from './novo/novo.component';
import { CategoriasNovoComponent } from './categorias-novo/categorias-novo.component';
import { VeiculosNovoComponent } from './veiculos-novo/veiculos-novo.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { CategoriasReadComponent } from './categorias-read/categorias-read.component';

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { VeiculosReadComponent } from './veiculos-read/veiculos-read.component';
import { CategoriasUpdateComponent } from './categorias-update/categorias-update.component';
import { VeiculosUpdateComponent } from './veiculos-update/veiculos-update.component';
import { TesteComponent } from './teste/teste.component';
import { VeiculoEcategoriaComponent } from './veiculo-ecategoria/veiculo-ecategoria.component';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CategoriasComponent,
    AuthenticationComponent,
    LoginComponent,
    VeiculosComponent,
    RegistrarComponent,
    SenhaComponent,
    NovoComponent,
    CategoriasNovoComponent,
    VeiculosNovoComponent,
    CategoriasReadComponent,
    VeiculosReadComponent,
    CategoriasUpdateComponent,
    VeiculosUpdateComponent,
    TesteComponent,
    VeiculoEcategoriaComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatListModule,
    MatSidenavModule,
    MatSnackBarModule,
    HttpClientModule,
    MatIconModule,
    FormsModule,
    MatDatepickerModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatNativeDateModule,
    MatSelectModule,

  ],

  providers: [
  CategoriaService,
  VeiculoService,
  StorageserviceService,
  RegistrarService,
  EmailService,
    
  httpInterceptorProviders,
  {provide: LOCALE_ID,useValue: 'pt-BR'}],
    
  bootstrap: [AppComponent]
})
export class AppModule { }
