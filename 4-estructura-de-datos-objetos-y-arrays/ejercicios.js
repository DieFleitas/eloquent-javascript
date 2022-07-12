// 1)LA SUMA DE UN RANGO
function rango(inicio, final, paso = 1) {
    arrayNuevo = [];

    if(inicio < final) {
        for(let i = inicio; i <= final; i += paso) {
            arrayNuevo.push(i);
        }
    };

    if(final < inicio) {
        for(let i = inicio; i >= final; i += paso) {
            arrayNuevo.push(i);
        }
    }
    
    return arrayNuevo; 
}
// console.log(suma(rango(5, 2, -1)));
// console.log(rango(5, 2, -1));

function suma(array) {
    let suma = 0;
    for(let elemento of array) {
        suma = suma + elemento;
    }
    return suma;
}

// 2)REVIRTIENDO UN ARRAY
function revertirArray(array) {
    nuevoArray = [];
    for(let elemento of array) {
        nuevoArray.unshift(elemento);
    }
    return nuevoArray;
}

function revertirArrayEnSuLugar(array) {
    let copyOfArray = [...array];

    for (let i = 0; i < array.length; i++) {
        array[i] = copyOfArray.pop();
    }

    return array;
}

// console.log(revertirArray(["A", "B", "C"]));
// // → ["C", "B", "A"];
// let arrayValue = [1, 2, 3, 4, 5];
// revertirArrayEnSuLugar(arrayValue);
// console.log(arrayValue);
// // → [5, 4, 3, 2, 1]

// 3)UNA LISTA
function arrayALista(array) {
    let lista = null;
    for (let i = array.length - 1; i >= 0; i--) {
        lista = {valor: array[i], resto: lista};
    }
    return lista;
}

function listaAArray(lista) {
    let array = [];
    for (let node = lista; node; node = node.resto) {
        array.push(node.valor);
    }
    return array;
}

function preceder(valor, lista) {
    return {valor, resto: lista}
}

function posicion(lista, numero) {
    if (!lista) return undefined;
    else if (numero == 0) return lista.valor;
    else return posicion(lista.resto, numero - 1);
}

// console.log(arrayALista([10, 20]));
// // → {value: 10, rest: {value: 20, rest: null}}
// console.log(listaAArray(arrayALista([10, 20, 30])));
// // // → [10, 20, 30]
// console.log(preceder(10, preceder(20, null)));
// // // → {value: 10, rest: {value: 20, rest: null}}
// console.log(posicion(arrayALista([10, 20, 30]), 1));
// // // → 20

// 4)COMPARACION PROFUNDA
function igualdadProfunda(a, b) {
    if (a === b) return true;
  
    if (a == null || typeof a != "object" || b == null || typeof b != "object") return false;
  
    let keysA = Object.keys(a);
    let keysB = Object.keys(b);
  
    if (keysA.length != keysB.length) return false;
  
    for (let key of keysA) {
      if (!keysB.includes(key) || !igualdadProfunda(a[key], b[key])) return false;
    }
  
    return true;
}

// let obj = {here: {is: "an"}, object: 2};
// console.log(igualdadProfunda(obj, obj));
// // → true
// console.log(igualdadProfunda(obj, {here: 1, object: 2}));
// // → false
// console.log(igualdadProfunda(obj, {here: {is: "an"}, object: 2}));
// // → true
