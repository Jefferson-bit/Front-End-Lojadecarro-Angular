import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/account/account.service';
import { CredenciaisDTO } from 'src/app/models/credenciais.dto';
import { StorageserviceService } from 'src/app/service/storageservice.service';
import { ClienteService } from 'src/app/service/cliente.service';
import { ClienteDTO } from 'src/app/models/clientenewdto';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;

  creds: CredenciaisDTO = {
    email: "",
    senha: ""
  }

  cliente: ClienteDTO;

  constructor(
    private accountService: AccountService,
    private router: Router,
    private storage: StorageserviceService,
    private clienteService: ClienteService) { }

  ngOnInit(): void {

  }

  login() {

    this.accountService.authentication(this.creds)
      .subscribe(response => {
        this.accountService.sucessFullLogin(response.headers.get('Authorization'));
        console.log("passou")
        this.router.navigate(['/teste']);
      },
        error => {
          console.log(error)
        })
  }

  registrar() {
    this.router.navigate(['/registrar'])
  }

  showSenha() {
    this.router.navigate(['/senha'])
  }

}
