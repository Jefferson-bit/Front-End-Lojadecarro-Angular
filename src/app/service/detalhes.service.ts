import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { DetalhesDTO } from '../models/detalhesDTO';

@Injectable({
  providedIn: 'root'
})
export class DetalhesService {

  constructor(public http: HttpClient) { }


  findByVeiculos(veiculos_id: string) {
    return this.http.get(`${environment.api}/detalhes/page?veiculos=${veiculos_id}`)
  }

  findById(id: string) : Observable<DetalhesDTO[]> {
    return this.http.get<DetalhesDTO[]>(`${environment.api}/detalhes/${id}`)
  }

}
