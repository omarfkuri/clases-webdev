// El código definido normalmente
// se ejecuta secuencialmente

let x = 0;

x = 5;
console.log(x);

x = 7;
console.log(x);


// API de promesas

const api = 'https://jsonplaceholder.typicode.com/todos/1';

// Se buscan datos en un servidor externo.
// Se recibe una promesa, que promete regresar
// datos eventualmente.
fetch(api)
// Se crea una microtarea y cuando se completa
// se ejecuta el método `then`.
.then(res => {

	// Se obtiene una respuesta del servidor
	// con contenido sin analizar.

	// Se hace una nueva promesa que promete
	// analizar el contenido y convertir a
	// un objeto.
	return res.json();
})
.then(obj => {
	// Se completa la segunda promesa.

	// Este objeto contiene el resultado.
	console.log(obj);
})
.catch(error => {
	// Si ocurre un error en cualquier punto,
	// se ejecuta esta función.

	console.log(error);
})


setTimeout(() => {
	// La ejecución de esta función
	// se pasa a una microtarea

	// Esta función se ejecutará
	// después del tiempo pasado
	// como segundo parámetro.

	console.log("Pasaron 4s");
}, 4000)

// Esto se ejecutará antes de fetch y setTimeout
console.log("Antes de fetch y setTimeout");