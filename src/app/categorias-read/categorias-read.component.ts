import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { CategoriaDTO } from '../models/categoria.dto';
import { CategoriaService } from '../service/categoria.service';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackbarService } from '../service/snackbar.service';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-categorias-read',
  templateUrl: './categorias-read.component.html',
  styleUrls: ['./categorias-read.component.css']
})
export class CategoriasReadComponent implements OnInit {

  items : CategoriaDTO[];
  displayedColumns = ['id', 'marca', 'action']
  
  @ViewChild('deleteDialog')deleteDialog;

  constructor(
     public categoriaService: CategoriaService,
     public route: ActivatedRoute,
     public snackBar: SnackbarService,
     public dialog: MatDialog,
     public router: Router)  { }

  ngOnInit(): void {
    this.categoriaService.findAll().subscribe(response => {
      this.items = response
    });
  }

  openDialog() {
    this.dialog.open(this.deleteDialog);
  }

  refreshList(){
    this.categoriaService.findAll().subscribe(response =>{
      this.items = response;
    })
  }

  onDelete(id: string){
    if(confirm('Deseje deletar essa Categoria?')){
      this.categoriaService.delete(id).subscribe(response =>{
        this.refreshList();
        this.snackBar.showMessage("Categoria deletada com sucesso!")
      })
    }
  }

}