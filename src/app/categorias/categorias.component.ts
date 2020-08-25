import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../service/categoria.service';
import { CategoriaDTO } from '../models/categoria.dto';
import { Router } from '@angular/router';
import { ClienteService } from '../service/cliente.service';
import { ClienteDTO } from '../models/clientenewdto';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  items: CategoriaDTO[];
  

  constructor(
    private categoriaService: CategoriaService,
    private router: Router,
    ) {}

  ngOnInit(): void {
    this.categoriaService.findAll().subscribe(response =>{
      this.items = response;
    },
    error => {});
  }

  showVeiculos(id : string) {
    this.router.navigate(['/veiculos/categorias', {id: id}]);
  }

}
