// models/registro.model.ts
export enum EnumTipoAparelho {
    DESKTOP = "DESKTOP",
    MOBILE = "MOBILE"
}

export enum EnumOrigemAcesso {
    DESKTOP_MESSAGE = "DESKTOP_MESSAGE", 
    DESKTOP_EMAIL = "DESKTOP_EMAIL", 
    MOBILE_MESSAGE = "MOBILE_MESSAGE",
	MOBILE_QRCODE = "MOBILE_QRCODE"
}

export interface Registro {
    id: string; // UUID como string
    navegador: string;
    horarioAcesso: Date; // Usamos Date para representar LocalDate
    idade: number;
    tipoAparelho: EnumTipoAparelho;
    origemAcesso: EnumOrigemAcesso;
}
