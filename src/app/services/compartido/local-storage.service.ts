import { Injectable } from '@angular/core';
import { SessionData } from 'src/app/models/datos-sesion.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }


  SaveSessionData(data: SessionData): boolean{
    let saved = localStorage.getItem("session-data");
    if(saved){
      return false;
    }else{
      let stringData = JSON.stringify(data);
      localStorage.setItem("session-data", stringData);
      return true;
    }
  }

  RemoveSessionData(){
    localStorage.removeItem("session-data");
  }

  GetToken(): string{
    let saved = localStorage.getItem("session-data");
    
    if(saved){      
      let data = JSON.parse(saved);      
      return data.tokens;
    }
    console.log("nooo entroo");
    
    return "";
  }
}
