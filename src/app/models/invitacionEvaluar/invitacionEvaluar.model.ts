import { JuradoModel } from "../parametros/jurado.model";
import { SolicitudModel } from "../solicitud/solicitud.model";

export class invitacionEvaluarModel {
    id?: number;
    fechaRespuesta?: string;
    fechaInvitacion?: string;
    descripcion?: string;
    estadoInvitacion?: string;
    hash?: string;
    idJurado?: number;
    jurado?: JuradoModel;
    idSolicitud?: number;
    solicitud?: SolicitudModel;
}