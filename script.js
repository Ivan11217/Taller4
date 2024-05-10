const indicadores = document.querySelectorAll('.indicador');
const slides = document.querySelectorAll('.slide');

let indiceActual = 0;

function mostrarSlide(indice) {
    slides.forEach(slide => slide.style.display = 'none');
    slides[indice].style.display = 'block';
}

mostrarSlide(indiceActual);

indicadores.forEach((indicador, i) => {
    indicador.addEventListener('click', () => {
        indiceActual = i;
        mostrarSlide(indiceActual);
        actualizarIndicadores();
    });
});

function actualizarIndicadores() {
    indicadores.forEach(indicador => indicador.classList.remove('activo'));
    indicadores[indiceActual].classList.add('activo');
}

function autoplay() {
    if (indiceActual >= slides.length - 1) {
        indiceActual = 0;
    } else {
        indiceActual++;
    }
    mostrarSlide(indiceActual);
    actualizarIndicadores();
}

let intervalo = setInterval(autoplay, 3000);

// Eventos
window.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') {
        intervalo = clearInterval(intervalo);
        if (indiceActual <= 0) {
            indiceActual = slides.length - 1;
        } else {
            indiceActual--;
        }
        mostrarSlide(indiceActual);
        actualizarIndicadores();
        intervalo = setInterval(autoplay, 3000);
    }

    if (event.key === 'ArrowRight') {
        intervalo = clearInterval(intervalo);
        if (indiceActual >= slides.length - 1) {
            indiceActual = 0;
        } else {
            indiceActual++;
        }
        mostrarSlide(indiceActual);
        actualizarIndicadores();
        intervalo = setInterval(autoplay, 3000);
    }

    document.querySelectorAll('.menu-item a').forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.color = 'yellow';
        });
        item.addEventListener('mouseout', () => {
            item.style.color = 'white';
        });
    });
});