import Cl_mEmpleado from "../models/Cl_mEmpleado";

export interface I_vEmpresa {
  onNuevoEmpleado(callback: () => void): void;
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
  }): void;
}