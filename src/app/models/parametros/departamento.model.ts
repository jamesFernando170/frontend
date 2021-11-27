import { FacultadModel } from '../parametros/facultad.model';

export class DepartamentoModel {
    id?: number;
    nombre?: string;
    idFacultad?: number;
    facultad?: FacultadModel;
}