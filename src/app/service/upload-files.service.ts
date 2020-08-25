import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseFile } from '../models/imagem.dto';


@Injectable({
  providedIn: 'root'
})
export class UploadFilesService {

  constructor(private http: HttpClient) { }

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('files', file);
    const req = new HttpRequest('POST', `${environment.api}/file/upload`, formData, {
      responseType: 'json',
      reportProgress: true
    });
    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get(`${environment.api}/file/files`)
  }

  getFilesName(nome: String): Observable<any> {
    return this.http.get(`${environment.api}/file/car?nome=${nome}`)
  }

  uploadFile(files: Set<File>, url: string) {
    const formData = new FormData();
    files.forEach(file => formData.append('files', file, file.name))
    const request = new HttpRequest('POST', url, formData);
    return this.http.request(request);
  }


}
