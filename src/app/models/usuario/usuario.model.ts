import { RolModel } from "./rol.model";

export class UsuarioModel {
    _id?: string;
    celular?: string;
    correo?: string;
    estado?: boolean;
    nombre?: string;
    documento?: string;
    apellidos?: string;
    fecha_nacimiento?: string;
    idRoles?: string[];
    roles?: RolModel[];
}