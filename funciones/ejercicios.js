// 1 min
function min(num1, num2){
    if(num1 < num2) return num1;
    if(num1 > num2) return num2;
    if(num1 === num2) return null;
}

// 2 recursion

function esPar(numero){
    if (numero >= 0) {
        if (numero === 0) {
            return true;
        } else if (numero === 1) {
            return false;
        }
        return esPar(numero - 2)
    }
    return false
}

// 3 conteo de frijoles
function contarFs(str) {
    return contarCaracteres(str, 'F');
}


// 3 - 1 contarCaracteres
function contarCaracteres( str, caracter) {
    let caracteresEnMayuscula = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === caracter) {
            caracteresEnMayuscula += 1
        }
    }
    return caracteresEnMayuscula;
}
