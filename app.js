// Ejercicio de las pelis
const {peliculas}= require ("./peliculas")

for (let i = 0; i < peliculas.length; i++) {
    const pelicula= peliculas[i]
    console.log('-----------------------------------');
    console.log("Película ID:" , pelicula.id);
    console.log("Calificación:", pelicula.rating);
    console.log("Premios:", pelicula.awards);
    console.log("Duración:", pelicula.length, "minutos");
    console.log("Precio:", pelicula.price);
    console.log("Género:", pelicula.genre);
    console.log('-----------------------------------');
}

// Ejercicio del texto
const fs= require('fs');

const rutaArchivo= './mensaje.txt';

const datos= fs.readFileSync(rutaArchivo,'utf8');

console.log(datos);