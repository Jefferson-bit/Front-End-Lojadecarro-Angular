import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaService } from '../service/categoria.service';
import { CategoriaDTO } from '../models/categoria.dto';
import { SnackbarService } from '../service/snackbar.service';

@Component({
  selector: 'app-categorias-novo',
  templateUrl: './categorias-novo.component.html',
  styleUrls: ['./categorias-novo.component.css']
})
export class CategoriasNovoComponent implements OnInit {

  items : CategoriaDTO ={
    id: '',
    marca: ''
  }

  constructor(public router: Router, public categoriaService: CategoriaService, public snackBar: SnackbarService) { }

  ngOnInit(): void {
  }

  cancelar(){
    this.router.navigate(['/novo'])
  }

  salvar() {
    this.categoriaService.insert(this.items).subscribe(response => {
      this.snackBar.showMessage('Categoria salva com sucesso')
    },
    error =>{})
  }

}
