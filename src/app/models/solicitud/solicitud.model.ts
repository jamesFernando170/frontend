import { AreaInvestigacionModel } from "../parametros/area-investigacion.model";
import { estadoSolicitudModel } from "../parametros/estadoSolicitud.model";
import { ModalidadModel } from "../parametros/modalidad.model";
import { TipoSolicitudModel } from "../parametros/tipo-solicitud.model";

export class SolicitudModel{
    
      id?: number;
      fecha?: string;
      nombreTrabajo?: string;
      descripcion?: string;
      archivo?: string //lo manejasmos como una dirección 
      idTipoSolicitud?: number; //buscarla por otro modo
      idEstadoSolicitud?: number; //buscarla por otro modo
      idModalidad?: number; //buscarla por otro modo
      idAreaInvestigacion?: number; //buscarla por otro modo
      s_es_ts?: TipoSolicitudModel;
      s_tiene_es?: estadoSolicitudModel; //falta este modelo
      s_tiene_m?: ModalidadModel;
      s_tiene_ai?: AreaInvestigacionModel;
      tiposComite?: TipoSolicitudModel[];
}