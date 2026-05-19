export interface I_vEmpleado {
  get cedula(): string;
  get sueldoActual(): number;
  get tipo(): number;
  mostrar(): void;
  ocultar(): void;
  onAceptar(callback: () => void): void;
  onCancelar(callback: () => void): void;
}