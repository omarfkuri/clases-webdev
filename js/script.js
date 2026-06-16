// Manipulación del DOM

// Selección de elementos (se pueden usar selectores
// como en CSS)
const elemPag = document.querySelector("header h1");
console.log(elemPag)

// Crear elementos
const miElem = document.createElement("input");
console.log(miElem)

// Definir atributos
miElem.type = "password";
miElem.name = "mi-contraseña"

const miPadre = document.createElement("div");
miPadre.id = "padre";

// Agregar hijos a un elemento
for (let i = 0; i < 10; i++)
{
	const miHijo = document.createElement("h2");

	miHijo.className = "hijo-" + i;
	miHijo.innerText = String(i);
	miPadre.appendChild(miHijo);
}

// Este elemento aún no es parte del dom
console.log(miPadre);

// Al buscarlo en el dom, no lo encontraremos
console.log(document.querySelector("#padre"));

// Se busca un hijo dentro del padre
const hijo6 = miPadre.querySelector(".hijo-6");
console.log(hijo6);

// Se remueve ese hijo del padre
miPadre.removeChild(hijo6);
// También:
// hijo6.remove();
console.log(miPadre);

// Agregar al DOM (al afectar el DOM se 
// observan los cambios de inmediato)
const he = document.querySelector("header");
he.appendChild(miPadre)

// actualizar elementos
const hijo7 = miPadre.querySelector(".hijo-7");
hijo7.innerText = "Jajaja";

// Alterar CSS
hijo7.style = "background-color: red;";
hijo7.style.color = "white";

const b = document.querySelector("body");

b.style.display = "flex";
b.style.flexDirection = "column";
b.style.border = "1px solid red"

// Agregar nueva hoja de estilos
const s = document.createElement("style")
s.innerText = "body { background-color: blue }";
document.body.appendChild(s);

// Agregar nueva script
const s2 = document.createElement("script")
s2.innerText = "console.log('hola')";
document.body.appendChild(s2);