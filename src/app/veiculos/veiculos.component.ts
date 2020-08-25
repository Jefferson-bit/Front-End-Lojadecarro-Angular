import { Component, OnInit } from '@angular/core';
import { VeiculoService } from '../service/veiculo.service';
import { ActivatedRoute } from '@angular/router';
import { VeiculoDTO } from '../models/veiculo.dto';

@Component({
  selector: 'app-veiculos',
  templateUrl: './veiculos.component.html',
  styleUrls: ['./veiculos.component.css']
})

export class VeiculosComponent implements OnInit {

  items: VeiculoDTO 

  constructor(
    private veiculoService: VeiculoService,
    private route: ActivatedRoute,) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.veiculoService.findById(id).subscribe(response => {
      this.items = response;
      for (let i in response) {
        this.items.cambio = response[i]['cambio']
        this.items.cor = response[i]['cor']
        this.items.portas = response[i]['portas']
        this.items.kmRodado = response[i]['kmRodado']
        this.items.informacoes = response[i]['informacoes']
      }

    })
  }



}
