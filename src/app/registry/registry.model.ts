// registry.model.ts
export class Registry {
  id: string;
  navegador: string;
  horarioAcesso: Date;
  tipoAparelho: EnumTipoAparelho;
  origemAcesso: EnumOrigemAcesso;

  constructor(id: string, navegador: string, horarioAcesso: Date, tipoAparelho: EnumTipoAparelho, origemAcesso: EnumOrigemAcesso) {
    this.id = id;
    this.navegador = navegador;
    this.horarioAcesso = horarioAcesso;
    this.tipoAparelho = tipoAparelho;
    this.origemAcesso = origemAcesso;
  }
}

export enum EnumTipoAparelho {
  DESKTOP, MOBILE
}

export enum EnumOrigemAcesso {
  DESKTOP_MESSAGE, DESKTOP_EMAIL, MOBILE_MESSAGE, MOBILE_QRCODE
}