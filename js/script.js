// Al definir el script como type="module"
// se habilita la palabra `await`. Esta permite
// esperar a que una promesa se complete,
// lo cual permite escribir código que puede tomar tiempo
// de una manera secuencial.

const api = 'https://jsonplaceholder.typicode.com/todos/1';

try 
{
	// Respuesta no contiene una promesa, si
	// no el resultado de la misma
	const respuesta = await fetch(api);

	// El objeto aquí ya está analizado
	const obj = await respuesta.json();

	console.log(obj);
}
// Se ejecuta si ocurre un error
catch(err)
{
	console.log(err);
}