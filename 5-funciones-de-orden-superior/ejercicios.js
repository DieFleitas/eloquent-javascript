// 1)APLANAMIENTO
function aplanamiento(array) {
    return array.reduce( (aplanar, actual) => aplanar.concat(actual), []);
}

// let arrays = [[1, 2, 3], [4, 5], [6]];
// console.log(aplanamiento(arrays));

// 2)TU PROPIO CICLO
function ciclo(valor, cbPrueba, cbActualizacion, cbCuerpo) {
    for(let i = valor; cbPrueba(i); i = cbActualizacion(i)) {
        cbCuerpo(i)
    }
    
}


// console.log(ciclo(3, n => n > 0, n => n - 1, console.log));
// // → 3
// // → 2
// // → 1

// 3)CADA
function myEvery(array, cb) {
    for (let i = 0; i < array.length; i++) {
        if(!cb(array[i])) {
            return false;
        }
    }
    return true;
}

function myEverySome(array, cb) {
    return !array.some(element => !cb(element));
}

// console.log(myEvery([1, 3, 5], n => n < 10));
// // → true
// console.log(myEvery([2, 4, 16], n => n < 10));
// // → false
// console.log(myEvery([], n => n < 10));
// // → true

// 4)DIRECCION DE ESCRITURA DOMINANTE