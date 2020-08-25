import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VeiculoService } from '../service/veiculo.service';
import { VeiculoDTO } from '../models/veiculo.dto';

@Component({
  selector: 'app-veiculo-ecategoria',
  templateUrl: './veiculo-ecategoria.component.html',
  styleUrls: ['./veiculo-ecategoria.component.css']
})
export class VeiculoEcategoriaComponent implements OnInit {

  veiculos: VeiculoDTO[];

  constructor(public route: ActivatedRoute, public veiculoService: VeiculoService) { }

  ngOnInit(): void {  
    let id = this.route.snapshot.paramMap.get('id')
    this.veiculoService.findByCategoria(id).subscribe(response => {
      this.veiculos = response['content'];
    })
  }

}
