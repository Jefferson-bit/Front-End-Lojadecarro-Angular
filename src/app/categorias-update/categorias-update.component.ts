import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CategoriaService } from '../service/categoria.service';
import { CategoriaDTO } from '../models/categoria.dto';
import { SnackbarService } from '../service/snackbar.service';

@Component({
  selector: 'app-categorias-update',
  templateUrl: './categorias-update.component.html',
  styleUrls: ['./categorias-update.component.css']
})
export class CategoriasUpdateComponent implements OnInit {

  item: CategoriaDTO = {
    id: '',
    marca: ''
  }

  constructor(
    public router: Router,
    public route: ActivatedRoute,
    public categoriaService: CategoriaService,
    public snackBar: SnackbarService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.categoriaService.findById(id).subscribe(response => {
      this.item = response;
     
    })
  }

  alterar() : void{
    const id =  this.route.snapshot.paramMap.get('id')
    this.categoriaService.update(id, this.item).subscribe(response =>{
      this.snackBar.showMessage('Categoria Alterada com Sucesso')
    })
  }

  cancelar() : void {
    this.router.navigate(['/novo'])
  }
}
