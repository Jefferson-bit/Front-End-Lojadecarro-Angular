import { Component, OnInit, ViewChildren } from '@angular/core';
import { VeiculoDTO } from '../models/veiculo.dto';
import { VeiculoService } from '../service/veiculo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DetalhesDTO } from '../models/detalhesDTO';
import { DatePipe } from '@angular/common';
import { SnackbarService } from '../service/snackbar.service';

@Component({
  selector: 'app-veiculos-update',
  templateUrl: './veiculos-update.component.html',
  styleUrls: ['./veiculos-update.component.css']
})
export class VeiculosUpdateComponent implements OnInit {

  veiculo: VeiculoDTO = {
    id: '',
    modelo: '',
    ano: null,
    preco: null,
    tipoVeiculo: '',
    detalhesId: '',
    cor: '',
    portas: null,
    kmRodado: null,
    cambio: '',
    informacoes: ''

  }

  constructor(public veiculoService: VeiculoService, public route: ActivatedRoute, public snackBar: SnackbarService, public router: Router) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.veiculoService.findById(id).subscribe(response => {
      this.veiculo = response
      for(let i in response){
        this.veiculo.cambio = response[i]['cambio']
        this.veiculo.cor = response[i]['cor']
        this.veiculo.portas = response[i]['portas']
        this.veiculo.kmRodado = response[i]['kmRodado']
        this.veiculo.informacoes = response[i]['informacoes']
        this.veiculo.detalhesId = response[i]['id']
      }
      this.veiculo.ano = this.checkData()

    })
  }
  atualizar() {
    const id = this.route.snapshot.paramMap.get('id');
    this.veiculoService.update(id, this.veiculo).subscribe(response => {
      this.snackBar.showMessage("Veiculo Alterado Com sucesso");
    })
  }

  checkData(): string {
    const dateSending = new DatePipe('pt-BR').transform(this.veiculo.ano, 'yyyy-MM-dd')
    return dateSending;
  }
  cancelar() {
    this.router.navigate(['/novo'])
  }
}
