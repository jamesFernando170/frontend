import { TipoVinculacionModel } from '../parametros/tipo-vinculacion.model';

export class ProponenteModel {
    id?: number;
    primerNombre?: string;
    segundoNombre?: string;
    primerApellido?: string;
    segundoApellido?: string;
    correo?: string;
    celular?: string;
    fotografia?: string;
    idTipoVinculacion?: number;
    p_tienen_tv?: TipoVinculacionModel;
}