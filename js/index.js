// Función para leer el archivo JSON y obtener los héroes
async function lecturaJSON() {
    const respuesta = await fetch('superhero.json');
    const heroes = await respuesta.json();

    mostrarHeroes(heroes);
}

// Función para mostrar los héroes de Marvel y DC en el DOM
function mostrarHeroes(heroes) {

    // Filtramos los héroes por Marvel y los mostramos
    const marvelHeroes = heroes.filter(heroe => heroe.grupo === 'marvel');
    if (marvelHeroes.length > 0) {
        tarjetascontenedorMarvel.innerHTML = `
            <div class="col-12 alert fs-4">
                <h2>MARVEL</h2>
                <hr>
            </div>
        `;
        marvelHeroes.forEach(heroe => {
            tarjetascontenedorMarvel.innerHTML += `
                <div class="col-lg-4 tarjeta">
                    <a href="superheroe.html?id=${heroe.id}">
                        <div>
                            <img src="${heroe.imagen1}" alt="${heroe.nombre}">
                            <div>${heroe.precio} €</div>
                        </div>
                        <h4 class="text-center">${heroe.nombre}</h4>
                    </a>
                </div>
            `;
        });
    }

    // Repetimos el mismo proceso para los héroes de DC
    const dcHeroes = heroes.filter(heroe => heroe.grupo === 'dc');
    if (dcHeroes.length > 0) {
        tarjetascontenedorDC.innerHTML = `
            <div class="col-12 alert fs-4">
                <h2>DC</h2>
                <hr>
            </div>
        `;
        dcHeroes.forEach(heroe => {
            tarjetascontenedorDC.innerHTML += `
                <div class="col-lg-4 tarjeta">
                    <a href="superheroe.html?id=${heroe.id}">
                        <div>
                            <img src="${heroe.imagen1}" alt="${heroe.nombre}">
                            <div>${heroe.precio} €</div>
                        </div>
                        <h4 class="text-center">${heroe.nombre}</h4>
                    </a>
                </div>
            `;
        });
    }
}

lecturaJSON();
