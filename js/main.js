const fila = document.querySelector(".contenedor-carousel");
const peliculas = document.querySelectorAll(".pelicula");

const flechaIzq = document.getElementById("flecha-izquierda");
const flechaDer = document.getElementById("flecha-derecha");


flechaDer.addEventListener("click", () => {
    fila.scrollLeft += fila.offsetWidth;
})

flechaIzq.addEventListener("click", () => {
    fila.scrollLeft -= fila.offsetWidth;
})

peliculas.forEach((pelicula) => {
	pelicula.addEventListener('mouseenter', (e) => {
		const elemento = e.currentTarget;
		setTimeout(() => {
			peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
			elemento.classList.add('hover');
		}, 300);
	});
});

fila.addEventListener("mouseleave", () => {
    peliculas.forEach(pelicula => pelicula.classList.remove("hover"));
})