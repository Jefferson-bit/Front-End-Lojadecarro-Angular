import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegistroDTO } from '../models/registrodto';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RegistrarService {

  constructor(private http: HttpClient) { }

  save(obj: RegistroDTO) {
    return this.http.post(`${environment.api}/clientes`,
      obj, {
      observe: 'response',
      responseType: 'text'
    });
  }


}
