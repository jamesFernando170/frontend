import { AreaInvestigacionModel } from "../parametros/area-investigacion.model";
import { ModalidadModel } from "../parametros/modalidad.model";
import { TipoSolicitudModel } from "../parametros/tipo-solicitud.model";

export class SolicitudModel{
    
      id?: number;
      fecha?: string;
      nombreTrabajo?: string;
      descripcion?: string;
      archivo?: string //lo manejasmos como una dirección 
      //idTipoSolicitud?: number; //buscarla por otro modo
      //idEstadoSolicitud?: number; //buscarla por otro modo
      //idModalidad?: number; //buscarla por otro modo
      //idAreaInvestigacion?: number; //buscarla por otro modo
      //tiposComites?: TiposComite[]; // pueden manejarse de otra manera
      tipoSolicitud?: TipoSolicitudModel;
      //estadoSolicitud?: EstadoSolicitudModel; //falta este modelo
      modalidad?: ModalidadModel;
      areaInvestigacion?: AreaInvestigacionModel;
      tiposComite?: TipoSolicitudModel[];

      
}