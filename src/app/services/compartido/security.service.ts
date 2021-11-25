import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { SessionData } from 'src/app/models/datos-sesion.model';
import { generalData } from '../../config/general-data';
import { userCredentialsModel } from '../../models/credenciales-usuario.model';

@Injectable({
  providedIn: 'root'
})
export class SecurityService {

  sessionDataSubject: BehaviorSubject<SessionData> = new BehaviorSubject<SessionData>(new SessionData());
  url: string = generalData.ADMIN_USER_URL;

  constructor(
    private http: HttpClient
  ) { 
    this.IsThereActiveSession();
  }

  IsThereActiveSession() {
    let data = localStorage.getItem("session-data");
    if (data) {
      let objectData: SessionData = JSON.parse(data);
      objectData.isLoggedIn = true;
      this.RefreshSessionData(objectData);
    }
  }

  RefreshSessionData(data: SessionData){
    this.sessionDataSubject.next(data);
  }

  GetSessionStatus(){
    return this.sessionDataSubject.asObservable();
  }

  Login(modelo: userCredentialsModel): Observable<SessionData> {
    return this.http.post<SessionData>(`${this.url}/identificar-usuario`, {
      usuario: modelo.username,
      clave: modelo.password
    });
  }
}
