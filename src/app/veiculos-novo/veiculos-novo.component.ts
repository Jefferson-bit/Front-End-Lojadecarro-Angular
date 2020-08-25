import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaService } from '../service/categoria.service';
import { CategoriaDTO } from '../models/categoria.dto';
import { VeiculoDTO } from '../models/veiculo.dto';
import { VeiculoService } from '../service/veiculo.service';
import { SnackbarService } from '../service/snackbar.service';
import { Observable } from 'rxjs';
import { UploadFilesService } from '../service/upload-files.service';
import { HttpEventType, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-veiculos-novo',
  templateUrl: './veiculos-novo.component.html',
  styleUrls: ['./veiculos-novo.component.css']
})
export class VeiculosNovoComponent implements OnInit {

  files: Set<File>;
  
  selectedFiles: FileList;
  progressInfos = [];
  message = '';
  currentFile: File;


  items: CategoriaDTO[];
  veiculo: VeiculoDTO = {
    id: '',
    modelo: '',
    ano: null,
    preco: null,
    tipoVeiculo: '',
    categoriaId: '',
    cor: '',
    cambio: '',
    portas: null,
    kmRodado: null,
    informacoes: ''
  }

  constructor(
    public router: Router,
    public categoriaService: CategoriaService,
    public veiculoService: VeiculoService,
    public snackBar: SnackbarService,
    public uploadService: UploadFilesService) { }

  ngOnInit(): void {
    this.categoriaService.findAll().subscribe(response => {
      this.items = response;
    })

  }

  save() {
    this.veiculoService.insert(this.veiculo).subscribe(response => {
      this.snackBar.showMessage("Veiculo Salvo com Sucesso!")
    })
  }

  cancelar() {
    this.router.navigate(['/novo'])
  }

  onChange(event) {
    this.files = new Set();
    this.selectedFiles = event.srcElement.files;
    for(let i=0; i< this.selectedFiles.length; i++) {
      this.files.add(this.selectedFiles[i]);
    }
    
  }

  onupload() {
    if(this.files && this.files.size > 0 ) {
      this.uploadService.uploadFile(this.files, 'http://localhost:8080/file/upload')
        .subscribe(response => {
          console.log("upload Concluido")
        });
    }
  }

}
