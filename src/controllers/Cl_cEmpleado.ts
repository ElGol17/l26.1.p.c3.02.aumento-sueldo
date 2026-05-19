import { I_vEmpleado } from "../interfaces/I_vEmpleado.js";
import Cl_mEmpleado from "../models/Cl_mEmpleado.js";

export default class Cl_cEmpleado {
  private vista: I_vEmpleado;
  private callback!: (empleado: Cl_mEmpleado | null) => void;

  constructor(vista: I_vEmpleado) {
    this.vista = vista;
    this.vista.onCancelar(() => this.btCancelarOnClick());
    this.vista.onAceptar(() => this.btAceptarOnClick());
  }

  solicitarEmpleado(callback: (empleado: Cl_mEmpleado | null) => void) {
    this.callback = callback;
    this.vista.mostrar();
  }

  private btCancelarOnClick() {
    this.callback(null);
    this.vista.ocultar();
  }

  private btAceptarOnClick() {
    this.callback(
      new Cl_mEmpleado({
        cedula: this.vista.cedula,
        sueldoActual: this.vista.sueldoActual,
        tipo: this.vista.tipo,
      }),
    );
    this.vista.ocultar();
  }
}