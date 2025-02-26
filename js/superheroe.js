async function obtenerHeroe(idHeroe) {
    const respuesta = await fetch('superhero.json');
    const heroes = await respuesta.json();

    for (var i = 0; i < heroes.length; i++) {
        if (heroes[i].id == idHeroe) {
            var heroe = heroes[i];
            break;
        }
    }

    let contenedor = document.getElementById('informacion-heroe');

    if (heroe != null) {
        contenedor.innerHTML = `
            <h2>${heroe.nombre}</h2>
            <img src="${heroe.imagen2}" class="img-fluid">
            <p>${heroe.precio}</p>
            <p>${heroe.resumen}</p>
        `;
    } else {
        contenedor.innerHTML = '';
    }
}

const parametros = new URLSearchParams(window.location.search);
const idHeroe = parametros.get('id');

if (idHeroe) {
    obtenerHeroe(idHeroe);
} else {
    document.getElementById('informacion-heroe').innerHTML = '';
}
