export abstract class ILectorDeTarjeta {
  constructor(protected readonly seguridad: ISeguridadEstacionamiento) {}
  abstract recibirTarjeta(): void;
  abstract devolverTarjeta(): void;
  abstract mostrarMensajeError(): void;
  abstract mostrarMensajeExito(): void;
}

export abstract class ISeguridadEstacionamiento {
  constructor(
    protected readonly registro: IRegistroDeAcceso,
    protected readonly barrera: IBarrera
  ) {}
  abstract verificarCodigoTarjeta(
    codigoTarjeta: string,
    lectorConTarjeta: ILectorDeTarjeta
  ): void;
}

export interface IRegistroDeAcceso {
  grabarUltimoAcceso(codigoTarjeta: string): void;
}

export interface IBarrera {
  elevar(): void;
}
