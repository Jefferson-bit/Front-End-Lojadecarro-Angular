import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ClienteDTO } from '../models/clientenewdto';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }


  findByEmail(email: string ) : Observable<ClienteDTO>{
    return this.http.get<ClienteDTO>(`${environment.api}/clientes/email?value=${email}`);
  }

}
