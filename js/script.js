
// Esto es terrible
console.log(c)
var c = 5;

// se introduceeee
// const y let

// alcance
{
	var c = 9;

	// debe mostrar 9
	console.log(a);
}

// Esperarías 5, pero será 9
console.log(a);


// const no permite asignaciones a la var
const num = 8;

// no se permite
// num += 2;

const arr = [];

// sí permite alterar objeto
arr.push(4)
console.log(arr)


// let define variable mutable
let a = 5;
a = 6;
console.log(a);

// alcance
{
	let a = 9;

	// debe mostrar 9
	console.log(a);
}

// debe mostrar 6
console.log(a);