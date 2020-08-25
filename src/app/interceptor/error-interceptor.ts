import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { StorageserviceService } from '../service/storageservice.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private storage: StorageserviceService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            catchError(this.handleError))

    }

    private handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // Ocorreu um erro no cliente ou na rede. Manuseie de acordo.
            console.error('Ocorreu um erro:', error.error.message);
        } else {
            // O back-end retornou um código de resposta sem êxito.

            console.error(
                `returned code ${error.status}, ` +
                `error: ${JSON.stringify(error.error)} `);
        }
        // Return an observable with a user-facing error message.
        return throwError(
            ':(');
    }
}
