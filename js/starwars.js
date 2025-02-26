// Función que carga los personajes de Star Wars desde la API
async function lecturaPeople() {
    const url = 'https://swapi.dev/api/people/';
    document.getElementById('contenidos').innerHTML = '';

    // Recorremos los primeros 10 personajes desde la API
    for (let n = 1; n <= 10; n++) {
        const respuesta = await fetch(`${url}${n}`);
        const datos = await respuesta.json();
        document.getElementById('contenidos').innerHTML += `
            <div class="col-lg-6 mb-4 tarjeta"> <!-- Aquí agregamos la clase "tarjeta" -->
                <div class="card">
                    <div class="card-body">
                        <h4>${datos.name}</h4>
                        <p>Altura: ${datos.height}</p>
                        <p>Peso: ${datos.mass}</p>
                        <p>Color de pelo: ${datos.hair_color}</p>
                        <p>Color de ojos: ${datos.eye_color}</p>
                    </div>
                </div>
            </div>
        `;
    }
}

// Función que carga los planetas de Star Wars desde la API
async function lecturaPlanets() {
    const url = 'https://swapi.dev/api/planets/';
    document.getElementById('contenidos').innerHTML = '';

    // Recorremos los primeros 10 planetas desde la API
    for (let n = 1; n <= 10; n++) {
        const respuesta = await fetch(`${url}${n}`);
        const datos = await respuesta.json();
        document.getElementById('contenidos').innerHTML += `
            <div class="col-lg-6 mb-4 tarjeta"> <!-- Aquí agregamos la clase "tarjeta" -->
                <div class="card">
                    <div class="card-body">
                        <h4>${datos.name}</h4>
                        <p>Clima: ${datos.climate}</p>
                        <p>Terreno: ${datos.terrain}</p>
                        <p>Población: ${datos.population}</p>
                        <p>Diámetro: ${datos.diameter}</p>
                    </div>
                </div>
            </div>
        `;
    }
}

// Función que carga los vehiculos de Star Wars desde la API
async function lecturaVehicles() {
    const url = 'https://swapi.dev/api/vehicles/';
    document.getElementById('contenidos').innerHTML = '';

    // Recorremos los primeros 10 vehiculos desde la API
    for (let n = 1; n <= 10; n++) {
        const respuesta = await fetch(`${url}${n}`);
        const datos = await respuesta.json();
        document.getElementById('contenidos').innerHTML += `
            <div class="col-lg-6 mb-4 tarjeta"> <!-- Aquí agregamos la clase "tarjeta" -->
                <div class="card">
                    <div class="card-body">
                        <h4>${datos.name}</h4>
                        <p>Modelo: ${datos.model}</p>
                        <p>Fabricante: ${datos.manufacturer}</p>
                        <p>Costo: ${datos.cost_in_credits}</p>
                        <p>Velocidad: ${datos.max_atmosphering_speed}</p>
                    </div>
                </div>
            </div>
        `;
    }
}

// Función que carga las especies de Star Wars desde la API
async function lecturaSpecies() {
    const url = 'https://swapi.dev/api/species/';
    document.getElementById('contenidos').innerHTML = '';

    // Recorremos las primeras 10 especies desde la API
    for (let n = 1; n <= 10; n++) {
        const respuesta = await fetch(`${url}${n}`);
        const datos = await respuesta.json();
        document.getElementById('contenidos').innerHTML += `
            <div class="col-lg-6 mb-4 tarjeta"> <!-- Aquí agregamos la clase "tarjeta" -->
                <div class="card">
                    <div class="card-body">
                        <h4>${datos.name}</h4>
                        <p>Clasificación: ${datos.classification}</p>
                        <p>Color de piel: ${datos.skin_colors}</p>
                        <p>Esperanza de vida: ${datos.lifespan}</p>
                    </div>
                </div>
            </div>
        `;
    }
}

const filtroinput = document.getElementById('searchInput');
const tarjetascontenedor = document.getElementById('contenidos');

// Filtro de búsqueda en tiempo real cuando el usuario escribe
filtroinput.addEventListener('keyup', function () {
    const filtrotexto = filtroinput.value.toLowerCase();
    const tarjetas = tarjetascontenedor.querySelectorAll('.tarjeta');

    tarjetas.forEach(tarjeta => {
        const titulo = tarjeta.querySelector('h4').textContent.toLowerCase();
        // Si el nombre de la tarjeta contiene el texto de búsqueda, la muestra, si no la oculta
        if (titulo.includes(filtrotexto)) {
            tarjeta.style.display = ''; // Mostrar tarjeta
        } else {
            tarjeta.style.display = 'none'; // Ocultar tarjeta
        }
    });
});

// Cargar información inicial
lecturaPeople();
