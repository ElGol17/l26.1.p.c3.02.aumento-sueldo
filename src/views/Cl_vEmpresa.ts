import { I_vEmpresa } from "../interfaces/I_vEmpresa";
import Cl_mEmpleado from "../models/Cl_mEmpleado";

const html = String.raw;

export default class Cl_vEmpresa implements I_vEmpresa {
  lblCntEmpleadosProcesados: HTMLLabelElement;
  lblUltimoSueldoBase: HTMLLabelElement;
  lblCedulasSueldoSuperiorUltimo: HTMLLabelElement;
  btNuevoEmpleado: HTMLButtonElement;
  tbEmpleados: HTMLTableElement;
  vista: HTMLElement | null;

  constructor() {
    this.vista = document.getElementById("body");
    this.btNuevoEmpleado = document.getElementById("body_btNuevoEmpleado") as HTMLButtonElement;
    this.lblCntEmpleadosProcesados = document.getElementById("body_lblCntEmpleadosProcesados") as HTMLLabelElement;
    this.lblUltimoSueldoBase = document.getElementById("body_lblUltimoSueldoBase") as HTMLLabelElement;
    this.lblCedulasSueldoSuperiorUltimo = document.getElementById("body_lblCedulasSueldoSuperiorUltimo") as HTMLLabelElement;
    this.tbEmpleados = document.getElementById("body_Empleados") as HTMLTableElement;
  }

  onNuevoEmpleado(callback: () => void): void {
    this.btNuevoEmpleado.onclick = callback;
  }

  mostrarEmpleados({
    empleados,
    cntEmpleadosProcesados,
    ultimoSueldoBase,
    cedulasSueldoSuperiorUltimo,
  }: {
    empleados: Cl_mEmpleado[];
    cntEmpleadosProcesados: number;
    ultimoSueldoBase: number;
    cedulasSueldoSuperiorUltimo: string[];
  }): void {
    this.tbEmpleados.innerHTML = "";
    empleados.forEach((empleado) => {
      const tr = document.createElement("tr");
      tr.innerHTML = html`
        <td>${empleado.cedula}</td>
        <td>$${empleado.sueldoActual}</td>
        <td>${empleado.tipo === 1 ? "Obrero" : "Admin"}</td>
        <td>$${empleado.nuevoSueldo().toFixed(2)}</td>
      `;
      this.tbEmpleados.appendChild(tr);
    });

    this.lblCntEmpleadosProcesados.innerHTML = cntEmpleadosProcesados.toString();
    this.lblUltimoSueldoBase.innerHTML = `$${ultimoSueldoBase}`;
    this.lblCedulasSueldoSuperiorUltimo.innerHTML = 
      cedulasSueldoSuperiorUltimo.length > 0 ? cedulasSueldoSuperiorUltimo.join(", ") : "-";
  }
}