
// Función con nombre
function suma(a, b)
{
	return a + b;
}

// Función anónima
const resta = function(a, b)
{
	return a - b;
};

// Función anónima de una sola expresión
const mult = (a, b) => a * b;

// Función anónima
const div = (a, b) =>
{
	if (b == 0)
		return 0;

	return a / b;
};

// Función anónima de un solo parámetro
const cuadrado = n => n * n;

// Las funciones anónimas se usan
// para pasar funciones como parámetros
// cuando no nos interesa reutilizar
// la función en otros casos.

const califs = [9, 9, 9, 6, 7, 5];

// Buscar un elemento en un arreglo
const x = califs.find((n) => n == 5);
console.log(x)

// Afectar cada elemento del arreglo
// y regresar un arreglo con estos
// cambios hechos
const califCadena = califs.map((n) => {
	
	return n.toString();
});
console.log(califCadena)