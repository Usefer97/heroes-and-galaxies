// Función para obtener la información de un héroe específico
async function obtenerHeroe(idHeroe) {
    const respuesta = await fetch('superhero.json');
    const heroes = await respuesta.json();

    let heroe = null;
    // Buscamos el héroe con el id correspondiente
    for (let i = 0; i < heroes.length; i++) {
        if (heroes[i].id == idHeroe) {
            heroe = heroes[i];
            break;
        }
    }

    let contenedor = document.getElementById('informacion-heroe');
    // Mostramos la información del héroe o un mensaje si no se encuentra
    contenedor.innerHTML = heroe ? `
        <h2>${heroe.nombre}</h2>
        <img src="${heroe.imagen2}" alt="${heroe.nombre}" class="img-fluid">
        <p><strong>Precio:</strong> ${heroe.precio}€</p>
        <p><strong>Resumen:</strong> ${heroe.resumen}</p>
    ` : '<p>No se encontró el héroe.</p>';
}

// Llamamos a la función pasando el id del héroe (ya sea desde la URL o asignado manualmente)
obtenerHeroe(idHeroe);
