import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { generalData } from 'src/app/config/general-data';
import { UsuarioModel } from 'src/app/models/usuario/usuario.model';
import { LocalStorageService } from '../compartido/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  url: string = generalData.ADMIN_USER_URL;
  token: string = "";
  filter: string = `?filter={"include":[{"relation":"tiene_el_rol"}]}`;

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ){ 
    this.token = localStorageService.GetToken();
  }

  GetRecordList(): Observable<UsuarioModel[]>{
    console.log(this.http.get<UsuarioModel[]>(`${this.url}/usuarios${this.filter}`));
    
    return this.http.get<UsuarioModel[]>(`${this.url}/usuarios${this.filter}`);
  }


  //Falta lo de enlazarlo con los roles..
  SaveRecord(data: UsuarioModel):  Observable<UsuarioModel>{
    return this.http.post<UsuarioModel>(`${this.url}/usuarios`,{
      correo: data.correo,
      nombre: data.nombre,
      celular: data.celular,
      documento: data.documento,
      apellidos: data.apellidos,
      fecha_nacimiento: data.fecha_nacimiento
    },
    {
      headers: new HttpHeaders({
        Authorization: `Bearer ${this.token}`
      })
    })
  }

  SearchRecord(id: string): Observable<UsuarioModel>{
    return this.http.get<UsuarioModel>(`${this.url}/usuarios/${id}`);
  }

  //Falta lo de enlazarlo con los roles..
  EditRecord(data: UsuarioModel): Observable<UsuarioModel> {
    return this.http.put<UsuarioModel>(
      `${this.url}/usuarios/${data._id}`,
      {
        _id: data._id,
        correo: data.correo,
        nombre: data.nombre,
        celular: data.celular,
        documento: data.documento,
        apellidos: data.apellidos,
        fecha_nacimiento: data.fecha_nacimiento
      },
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`
        })
      });
  }

  RemoveRecord(id: string): Observable<any>{
    return this.http.delete(
      `${this.url}/usuarios/${id}`,
      {
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.token}`
        })
      });
  }
}
