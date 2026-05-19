import Cl_mEmpresa from "../models/Cl_mEmpresa.js";
import { I_vEmpresa } from "../interfaces/I_vEmpresa.js";
import Cl_cEmpleado from "./Cl_cEmpleado.js";
import Cl_mEmpleado from "../models/Cl_mEmpleado.js";

export default class Cl_cEmpresa {
  private mEmpresa: Cl_mEmpresa = new Cl_mEmpresa();
  private vEmpresa: I_vEmpresa;
  private cEmpleado: Cl_cEmpleado;

  constructor(vistaEmpresa: I_vEmpresa, controladorEmpleado: Cl_cEmpleado) {
    this.vEmpresa = vistaEmpresa;
    this.cEmpleado = controladorEmpleado;

    this.cargarEmpleadosIniciales();
    this.vEmpresa.onNuevoEmpleado(() => this.procesar1Empleado());
  }

  private cargarEmpleadosIniciales() {
    // Datos de referencia provistos en el enunciado
    const personal = [
      { cedula: "555", sueldoActual: 200, tipo: 2 }, // Admin
      { cedula: "888", sueldoActual: 500, tipo: 1 }, // Obrero
      { cedula: "777", sueldoActual: 400, tipo: 2 }, // Admin
      { cedula: "666", sueldoActual: 600, tipo: 1 }, // Obrero
      { cedula: "444", sueldoActual: 800, tipo: 1 }, // Obrero
    ];

    personal.forEach((p) => {
      this.mEmpresa.agregarEmpleado(
        new Cl_mEmpleado({
          cedula: p.cedula,
          sueldoActual: p.sueldoActual,
          tipo: p.tipo,
        }),
      );
    });

    this.actualizarVista();
  }

  private procesar1Empleado() {
    this.cEmpleado.solicitarEmpleado((empleado) => {
      if (empleado !== null) {
        this.mEmpresa.agregarEmpleado(empleado);
        this.actualizarVista();
      }
    });
  }

  private actualizarVista() {
    this.vEmpresa.mostrarEmpleados({
      empleados: this.mEmpresa.empleados,
      cntEmpleadosProcesados: this.mEmpresa.cantidadEmpleadosProcesados(),
      ultimoSueldoBase: this.mEmpresa.ultimoSueldoBase(),
      cedulasSueldoSuperiorUltimo: this.mEmpresa.cedulasSueldoSuperiorUltimo(),
    });
  }
}