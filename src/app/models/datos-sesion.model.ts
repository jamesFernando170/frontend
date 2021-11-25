import { UserData } from "./datos-usuario.model";

export class SessionData{
    token?: string;
    usuario?: UserData;
    isLoggedIn: boolean = false;
}