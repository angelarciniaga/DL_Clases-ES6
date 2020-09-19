import Impuesto from './impuesto.js';
import Cliente from './cliente.js';

let calcular = document.getElementById('calcular');
let resultado = document.getElementById('resultado');

calcular.addEventListener('click', impuestoAnualPagar);

function impuestoAnualPagar(event) {
    event.preventDefault();

    let cliente = document.getElementById('cliente').value;
    let ventas = document.getElementById('ventas').value;
    let deducciones = document.getElementById('deducciones').value;
    if (cliente && parseInt(ventas) && parseInt(deducciones)) {
        let n_cliente = new Cliente(cliente);
        let impuesto = new Impuesto(parseInt(ventas), parseInt(deducciones));
        resultado.innerHTML = `El cliente ${n_cliente.nombre()} tiene un monto total a pagar por este año de: ${impuesto.calcularImpuesto()}.`
    }else {
        alert('Ingrese un valor numérico');
    };
}