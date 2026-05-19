export default class Cl_mEmpleado {
  private _cedula: string = "";
  private _sueldoActual: number = 0;
  private _tipo: number = 1; // 1-Obrero, 2-Administrativo

  constructor({ cedula, sueldoActual, tipo }: { cedula: string; sueldoActual: number; tipo: number }) {
    this.cedula = cedula;
    this.sueldoActual = sueldoActual;
    this.tipo = tipo;
  }

  set cedula(value: string) {
    this._cedula = value;
  }
  get cedula(): string {
    return this._cedula;
  }

  set sueldoActual(value: number) {
    this._sueldoActual = +value;
  }
  get sueldoActual(): number {
    return this._sueldoActual;
  }

  set tipo(value: number) {
    this._tipo = +value;
  }
  get tipo(): number {
    return this._tipo;
  }

  // Lógica de negocio individual
  nuevoSueldo(): number {
    if (this.tipo === 1) {
      return this.sueldoActual * 1.20; // 20% aumento obrero
    } else {
      return this.sueldoActual * 1.10; // 10% aumento administrativo
    }
  }
}