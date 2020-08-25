import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { VeiculoDTO } from '../models/veiculo.dto';
import { DetalhesDTO } from '../models/detalhesDTO';

@Injectable({
  providedIn: 'root'
})
export class VeiculoService {

  constructor(private http: HttpClient) { }

  findAll() : Observable<VeiculoDTO[]> {
    return this.http.get<VeiculoDTO[]>(`${environment.api}/veiculos`);
  }

  findById(id: string): Observable<VeiculoDTO> {
    return this.http.get<VeiculoDTO>(`${environment.api}/veiculos/${id}`);
  }

  findByCategoria(categoria_id: string){
    return this.http.get(`${environment.api}/veiculos/page?categorias=${categoria_id}`)
  }

  findAllDetalhes(): Observable<DetalhesDTO[]> {
    return this.http.get<DetalhesDTO[]>(`${environment.api}/detalhes`);
  }

  insert(obj: VeiculoDTO) {
    return this.http.post(`${environment.api}/veiculos`, 
    obj,{
      observe: "response",
      responseType: "text"
    })
  }

  delete(id: string){
    return this.http.delete(`${environment.api}/veiculos/${id}`)
  }
  
  update(id: string, obj: VeiculoDTO) {
    return this.http.put(`${environment.api}/veiculos/${id}`, obj);
  }



}
