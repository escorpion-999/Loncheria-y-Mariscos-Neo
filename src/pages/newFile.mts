import { form, estaAbierto, numeroTel } from "./index.astro.0.mts";

form.addEventListener('submit', (e) => {
e.preventDefault();

if (!estaAbierto) {
alert("El restaurante se encuentra cerrado en este momento.");
return;
}

const nombre = (document.getElementById('nombre') as HTMLInputElement).value;
const platillo = (document.getElementById('platillo') as HTMLInputElement).value;
const direccion = (document.getElementById('direccion') as HTMLInputElement).value;
const notas = (document.getElementById('notas') as HTMLTextAreaElement).value;

let msg = `*¡Hola ${nombreNegocio}! Quisiera hacer un pedido:*\n\n`;
msg += `👤 *Cliente:* ${nombre}\n`;
msg += `🍽️ *Pedido:* ${platillo}\n`;
msg += `📍 *Entrega/Ubicación:* ${direccion}\n`;
if (notas) msg += `📝 *Notas:* ${notas}\n`;

window.open(`https://wa.me/${numeroTel}?text=${encodeURIComponent(msg)}`, '_blank');
});
