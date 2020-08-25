import { Component, OnInit } from '@angular/core';
import { VeiculoService } from '../service/veiculo.service';
import { VeiculoDTO } from '../models/veiculo.dto';
import { SnackbarService } from '../service/snackbar.service';

@Component({
  selector: 'app-veiculos-read',
  templateUrl: './veiculos-read.component.html',
  styleUrls: ['./veiculos-read.component.css']
})
export class VeiculosReadComponent implements OnInit {

  veiculo: VeiculoDTO[];
  displayedColumns = ['id', 'modelo', 'ano', 'preco', 'tipoVeiculo', 'action']
  constructor(public veiculoService: VeiculoService, public snackBar: SnackbarService) { }

  ngOnInit(): void {
    this.veiculoService.findAll().subscribe(response =>{
      this.veiculo = response;
    })
  }

  refreshList(){
    this.veiculoService.findAll().subscribe(response => {
      this.veiculo = response;
    })
  }

  onDelete(id: string){
    if(confirm("Deseja excluir Veiculo?")) {
      this.veiculoService.delete(id).subscribe(response => {
        this.refreshList();
        this.snackBar.showMessage("Veiculo excluido com sucesso!")
      })
    }
  }

}
