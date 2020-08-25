import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmailDTO } from '../models/email.dto';
import { EmailService } from '../service/email.service';
import { SnackbarService } from '../service/snackbar.service';

@Component({
  selector: 'app-senha',
  templateUrl: './senha.component.html',
  styleUrls: ['./senha.component.css']
})
export class SenhaComponent implements OnInit {

  constructor(private router: Router, private emailService: EmailService, private snackBar: SnackbarService) { }

  signup: EmailDTO = {
    email: ''
  }

  ngOnInit(): void {
  }

  showPassword(){
    this.emailService.forgot(this.signup).subscribe( response =>{
      this.snackBar.showMessage('Senha alterada com sucesso. Por favor, verifique seu email')
    },
    error => {console.log(error)})
  }

  showVoltar(){
    this.router.navigate(['/login'])
  }
}
