import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../account/account.service';
import { ClienteService } from '../service/cliente.service';
import { StorageserviceService } from '../service/storageservice.service';
import { ClienteDTO } from '../models/clientenewdto';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cliente: ClienteDTO;

  constructor(
    public router: Router,
    public account: AccountService,
    public clienteService: ClienteService,
    public storage: StorageserviceService) { }

  ngOnInit(): void {
  }

  novo() {
    let localUser = this.storage.getLocalUser();
    if (localUser && localUser.email) {
      this.clienteService.findByEmail(localUser.email).subscribe(response => {
        this.cliente = response;
        if (this.cliente.perfil[0] == 'ADMIN') {
          this.router.navigate(['/novo'])
        } else {
          alert("não é admin")
        }

      })
    }

  }

  Sair() {
    this.account.logout();
    this.router.navigate(['/login']);
  }

}
