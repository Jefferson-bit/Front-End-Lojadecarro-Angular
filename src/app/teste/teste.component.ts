import { Component, OnInit, Pipe } from '@angular/core';
import { VeiculoService } from '../service/veiculo.service';
import { VeiculoDTO } from '../models/veiculo.dto';
import { UploadFilesService } from '../service/upload-files.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { CategoriaService } from '../service/categoria.service';
import { CategoriaDTO } from '../models/categoria.dto';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {
 
  fileInfos: Observable<any>
  veiculos: VeiculoDTO[]
  
  constructor(
    public veiculoService: VeiculoService,
    public uploadService: UploadFilesService,
    public router: Router,
    public categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.fileInfos = this.uploadService.getFiles();

    this.veiculoService.findAll().subscribe(response => {
      this.veiculos = response;
   
    })
  }

  onVeiculo(categoria_id: string) {
  this.veiculoService.findById(categoria_id).subscribe(response => {

    this.router.navigate(['/veiculos', {id: categoria_id}])
  })
  
  }

}
