import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-novo',
  templateUrl: './novo.component.html',
  styleUrls: ['./novo.component.css']
})
export class NovoComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  veiculos(){
    this.router.navigate(['/veiculosNovo'])
  }

  categorias(){
    this.router.navigate(['/categoriasNovo'])
  }

}
