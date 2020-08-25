import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { CategoriaDTO } from '../models/categoria.dto';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  constructor(private http: HttpClient) { 
  }

  findById(id: string) : Observable<CategoriaDTO> {
    return this.http.get<CategoriaDTO>(`${environment.api}/categorias/${id}`)
  }

  findAll() : Observable<CategoriaDTO[]> {
    return this.http.get<CategoriaDTO[]>(`${environment.api}/categorias`)
  }

  update(id: string, obj: CategoriaDTO) {
    return this.http.put(`${environment.api}/categorias/${id}`, obj)
  }

  insert(obj: CategoriaDTO) {
    return this.http.post(`${environment.api}/categorias`,
     obj, {
      observe : 'response',
      responseType : 'text'
    });
  }

  delete(id: string ) {
    return this.http.delete(`${environment.api}/categorias/${id}`)
  }

}
