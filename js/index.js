const filtroinput = document.getElementById('barraBusqueda');
        const tarjetascontenedorMarvel = document.getElementById('contenidoMarvel');
        const tarjetascontenedorDC = document.getElementById('contenidoDC');

        async function lecturaJSON() {
            const respuesta = await fetch('superhero.json');
            const heroes = await respuesta.json();

            mostrarHeroes(heroes);

            filtroinput.addEventListener('input', function () {
                const filtrotexto = filtroinput.value.toLowerCase();
                const tarjetasMarvel = tarjetascontenedorMarvel.querySelectorAll('.tarjeta');
                const tarjetasDC = tarjetascontenedorDC.querySelectorAll('.tarjeta');

                tarjetasMarvel.forEach(tarjeta => {
                    const titulo = tarjeta.querySelector('h4').textContent.toLowerCase();
                    if (titulo.includes(filtrotexto)) {
                        tarjeta.style.display = "block";
                    } else {
                        tarjeta.style.display = 'none';
                    }
                });

                tarjetasDC.forEach(tarjeta => {
                    const titulo = tarjeta.querySelector('h4').textContent.toLowerCase();
                    if (titulo.includes(filtrotexto)) {
                        tarjeta.style.display = "block";
                    } else {
                        tarjeta.style.display = 'none';
                    }
                });
            });
        }

        function mostrarHeroes(heroes) {

            tarjetascontenedorMarvel.innerHTML = '';
            tarjetascontenedorDC.innerHTML = '';

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