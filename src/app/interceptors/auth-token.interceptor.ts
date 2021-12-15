import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LocalStorageService } from '../services/compartido/local-storage.service';

@Injectable()
export class AuthTokenInterceptor implements HttpInterceptor {

  token: string = "";
  constructor(
    private localStorageService: LocalStorageService
  ) {
    this.token = this.localStorageService.GetToken();
   }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    const reqTemp = req.clone({
      headers: new HttpHeaders({
        'Content-Type': 'aplication/json',
        'Authorization': `Bearer ${this.token}`
      })
    });
    return next.handle(reqTemp);
  }
}
