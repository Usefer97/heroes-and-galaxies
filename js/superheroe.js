const buscarHeroe = new URLSearchParams(window.location.search);
const id = buscarHeroe.get('id');

async function informacionHeroe() {
    const respuesta = await fetch('superhero.json');
    const heroes = await respuesta.json();

    const heroe = heroes.find(heroe => heroe.id == id);

    document.getElementById('informacion-heroe').innerHTML = heroe ? `
        <h1>${heroe.nombre}</h1>
        <img src="${heroe.imagen2}" alt="${heroe.nombre}">
        <p>${heroe.precio}€</p>
        <p>${heroe.resumen}</p>
    ` : `<p>Héroe no encontrado.</p>`;
}

informacionHeroe();