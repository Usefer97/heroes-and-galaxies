async function lecturaJSON() {
    const respuesta = await fetch('superhero.json');
    const heroes = await respuesta.json();
    mostrarHeroes(heroes);
}

function mostrarHeroes(heroes) {

    for (let i = 0; i < heroes.length; i++) {
        const heroe = heroes[i];
        if (heroe.grupo === 'marvel') {
            document.getElementById('contenidoMarvel').innerHTML += `
                <div class="col-lg-4 tarjeta">
                    <a href="superheroe.html?id=${heroe.id}">
                        <div>
                            <img src="${heroe.imagen1}">
                            <div>${heroe.precio}</div>
                        </div>
                        <h4 class="text-center">${heroe.nombre}</h4>
                    </a>
                </div>
            `;
        }
    }

    for (let i = 0; i < heroes.length; i++) {
        const heroe = heroes[i];
        if (heroe.grupo === 'dc') {
            document.getElementById('contenidoDC').innerHTML += `
                <div class="col-lg-4 tarjeta">
                    <a href="superheroe.html?id=${heroe.id}">
                        <div>
                            <img src="${heroe.imagen1}">
                            <div>${heroe.precio}</div>
                        </div>
                        <h4 class="text-center">${heroe.nombre}</h4>
                    </a>
                </div>
            `;
        }
    }
}

const filtroinput = document.getElementById('barraBusqueda');
const filtroMarvel = document.getElementById('contenidoMarvel');
const filtroDC = document.getElementById('contenidoDC');

filtroinput.addEventListener('keyup', function () {
    const filtroTexto = filtroinput.value.toLowerCase();

    const tarjetasMarvel = filtroMarvel.querySelectorAll('.tarjeta');
    tarjetasMarvel.forEach(tarjeta => {
        const titulo = tarjeta.querySelector('h4').textContent.toLowerCase();
        if (titulo.includes(filtroTexto)) {
            tarjeta.style.display = '';
        } else {
            tarjeta.style.display = 'none';
        }
    });

    const tarjetasDC = filtroDC.querySelectorAll('.tarjeta');
    tarjetasDC.forEach(tarjeta => {
        const titulo = tarjeta.querySelector('h4').textContent.toLowerCase();
        if (titulo.includes(filtroTexto)) {
            tarjeta.style.display = '';
        } else {
            tarjeta.style.display = 'none';
        }
    });
});

lecturaJSON();
