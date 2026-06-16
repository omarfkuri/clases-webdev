class Persona
{
	constructor(nombre, apellido)
	{
		this.nombre = nombre;
		this.apellido = apellido;
	}

	// Método de instancia
	decirHola()
	{
		console.log(this.nombre, "dice hola")
	}

	// Método de clase
	static decirAdios()
	{
		console.log("Adiós");
	}
}

// Para crear instancias de clase, utilizar new
const dan = new Persona("Daniel", "De La Cruz");
console.log(dan);
dan.decirHola();

Persona.decirAdios();

class Empleado extends Persona
{
	// Variable de instancia
	id = "jkahslkfhas"

	// Solo accesible dentro de la clase
	#priv = 333;

	// Si no se define constructor,
	// se hereda el del padre
	constructor(id, nombre, apellido)
	{
		super(nombre, apellido)

		// Si no se asigna el valor,
		// se queda el asignado anteriormente
		this.id = id;
	}

	decirCodigoPrivado()
	{
		console.log(this.#priv);
	}
}

const luis = new Empleado(893257, "luis", "rodriguez");
console.log(luis);
luis.decirCodigoPrivado();

// Siendo objetos, se pueden agregar propiedades
luis.colonia = "Malamuerte (Santocho)";
console.log(luis);


// Las clases son azúcar sintáctica para:

function PersonFun(nombre, apellido)
{
	return {
		nombre: nombre,
		apellido: apellido,

		decirHola()
		{
			console.log(this.nombre, "dice hola");
		}
	}
}

const per = PersonFun("Marco", "Martínez");
console.log(per);
