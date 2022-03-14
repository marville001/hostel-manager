import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import {catchError} from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class ErrorInterceptorService implements HttpInterceptor {

  constructor() {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
      return next.handle(request)
          // .pipe(
          //     catchError((error: HttpErrorResponse) => {
          //         let errorMsg = '';
          //         if (error.error instanceof ErrorEvent) {
          //             console.log('This is client side error');
          //             errorMsg = `Error: ${error.message}`;
          //         } else {
          //             console.log('This is server side error');
          //             errorMsg = `Error Code: ${error.status},  Message: ${error.message}`;
          //         }
          //         console.log(errorMsg);
          //         return throwError(errorMsg);
          //     })
          // )
            }
}
