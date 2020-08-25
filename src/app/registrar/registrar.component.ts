import { Component, OnInit } from '@angular/core';
import { RegistroDTO } from '../models/registrodto';
import { RegistrarService } from '../service/registrar.service';
import { Router } from '@angular/router';
import { SnackbarService } from '../service/snackbar.service';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  hide = true;
  
  items: RegistroDTO = {
    email: '',
    nome: '',
    senha: ''
  };

  constructor(private clienteService: RegistrarService, private router: Router, private snackBar: SnackbarService) { }

  ngOnInit(): void {
  }

  insert() {
    this.clienteService.save(this.items).subscribe(response => {
      this.snackBar.showMessage('Usuario registrado com sucesso');
    },
      error => {})
  }

  voltar() {
    this.router.navigate(['/login'])
  }

}
