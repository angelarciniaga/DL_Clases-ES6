export default class Impuesto {
    constructor(ventas, deducciones) {
        this._ventas = ventas;
        this._deducciones = deducciones;
    }

    get ventas() {
        return this._ventas;
    }

    get deducciones() {
        return this._deducciones;
    }

    set ventas(n_ventas) {
        this._ventas = () => n_ventas
    }

    set deducciones(n_deducciones) {
        this._deducciones = () => n_deducciones;
    }

    calcularImpuesto() {
        return (this.ventas - this.deducciones) * 0.21;
    }
}