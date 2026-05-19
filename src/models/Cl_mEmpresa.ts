import Cl_mEmpleado from "./Cl_mEmpleado.js";

export default class Cl_mEmpresa {
  public empleados: Cl_mEmpleado[] = [];

  agregarEmpleado(empleado: Cl_mEmpleado) {
    this.empleados.push(empleado);
  }

  cantidadEmpleadosProcesados(): number {
    return this.empleados.length;
  }

  ultimoSueldoBase(): number {
    if (this.empleados.length === 0) return 0;
    return this.empleados[this.empleados.length - 1].sueldoActual;
  }

  cedulasSueldoSuperiorUltimo(): string[] {
    let cedulas: string[] = [];
    const ultimoSueldo = this.ultimoSueldoBase();
    this.empleados.forEach((empleado) => {
      if (empleado.sueldoActual > ultimoSueldo) {
        cedulas.push(empleado.cedula);
      }
    });
    return cedulas;
  }
}