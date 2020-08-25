import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmailDTO } from '../models/email.dto';
import { environment } from 'src/environments/environment';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient, private snackBar: MatSnackBar) { }

  forgot(obj: EmailDTO){
    return this.http.post(`${environment.api}/auth/forgot`, 
    obj, {
      observe: 'response',
      responseType: 'text'
    })
  }

} 
