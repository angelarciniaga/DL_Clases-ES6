export default class Cliente {
    constructor(nombre) {
        this._nombre = () => nombre;
    }

    get nombre() {
        return this._nombre;
    }

    set nombre(nuevoNombre) {
        this._nombre = () => nuevoNombre;
    }
}



