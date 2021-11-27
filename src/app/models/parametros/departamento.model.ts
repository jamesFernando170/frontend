import { FacultadModel } from '../parametros/facultad.model';

export class DepartamentoModel {
    id?: number;
    nombre?: string;
    idFacultad?: number;
    d_pertenece_f?: FacultadModel;
}