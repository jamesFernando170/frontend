import { TipoVinculacionModel } from '../parametros/tipo-vinculacion.model';

export class ProponenteModel {
    id?: number;
    primerNombre?: string;
    segundoNombre?: string;
    primerApellido?: string;
    segundoApellido?: string;
    correo?: string;
    telefono?: string;
    fotografia?: string;
    idTipoVinculacion?: number;
    tipoVinculacion?: TipoVinculacionModel;
}