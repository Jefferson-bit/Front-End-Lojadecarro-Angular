import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  fazerLogin(): void{
    this.router.navigate(['categorias'])
    console.log('navegando...')
  }
  registrar(): void {
    this.router.navigate(['/nav']);
    console.log('testando...');
  }
}
