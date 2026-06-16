// Primitivos

// null (decir que una var no tiene valor)
var varNULL = null;
console.log("NULL", varNULL);

// undefined (ocurre cuando un valor no ha sido asignado)
var unDef = undefined;
console.log("unDef", unDef);

// number (int o float)
var number = 0.000059999463;
console.log("number", number.toExponential(5));

// boolean
var boolean = false;
console.log("boolean", false.toString());


// TDA

// string (char o char*)
var string = "jajajaja";
console.log("string", string.startsWith("k"));

// array (any[])
var array = [1, "haha", 9, [], {}];
console.log("array", array.length);

// object
var object = {
	propiedad: "Valor",
	prop: [1, 3, ]
};
console.log("object", object);

// Obtener el tipo de un valor
console.log(typeof "hello")
console.log(typeof 99)
console.log(typeof false)
console.log(typeof (() => {}))
console.log(typeof {})
console.log(Array.isArray([]))