import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StorageserviceService } from '../service/storageservice.service';
import { environment } from 'src/environments/environment';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private storage: StorageserviceService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let localUser = this.storage.getLocalUser();
        let N = environment.api.length;
        let requestAPI = req.url.substring(0, N) == environment.api;

        if (localUser && requestAPI) {
            const authReq = req.clone({headers: req.headers.set('Authorization', 'Bearer ' + localUser.token) })
            return next.handle(authReq);
           
        } else {
            return next.handle(req)
        }
    }
}