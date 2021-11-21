import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { generalData } from '../config/general-data';
import { userCredentialsModel } from '../models/credenciales-usuario.model';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  url: string = generalData.ADMIN_USER_URL;

  constructor(
    private http: HttpClient
  ) { }

  Login(modelo: userCredentialsModel): Observable<any> {
    return this.http.post(`${this.url}/identificar-usuario`, {
      usuario: modelo.username,
      clave: modelo.password
    });
  }
}
