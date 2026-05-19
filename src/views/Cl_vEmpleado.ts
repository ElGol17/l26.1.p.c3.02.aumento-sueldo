import { I_vEmpleado } from "../interfaces/I_vEmpleado";

export default class Cl_vEmpleado implements I_vEmpleado {
  inCedula: HTMLInputElement;
  inSueldoActual: HTMLInputElement;
  inTipo: HTMLInputElement;
  btCancelar: HTMLButtonElement;
  btAceptar: HTMLButtonElement;
  vista: HTMLElement;

  constructor() {
    this.vista = document.getElementById("Empleado") as HTMLElement;
    this.inCedula = document.getElementById("Empleado_inCedula") as HTMLInputElement;
    this.inSueldoActual = document.getElementById("Empleado_inSueldoActual") as HTMLInputElement;
    this.inTipo = document.getElementById("Empleado_inTipo") as HTMLInputElement;
    this.btCancelar = document.getElementById("Empleado_btCancelar") as HTMLButtonElement;
    this.btAceptar = document.getElementById("Empleado_btAceptar") as HTMLButtonElement;
  }

  get cedula(): string {
    return this.inCedula.value.trim();
  }
  get sueldoActual(): number {
    return parseFloat(this.inSueldoActual.value.trim()) || 0;
  }
  get tipo(): number {
    return parseInt(this.inTipo.value.trim()) || 1;
  }

  onAceptar(callback: () => void): void {
    this.btAceptar.onclick = callback;
  }
  onCancelar(callback: () => void): void {
    this.btCancelar.onclick = callback;
  }

  mostrar(): void {
    if (this.vista === null) return;
    this.vista.hidden = false;
  }
  ocultar(): void {
    if (this.vista === null) return;
    this.vista.hidden = true;
  }
}