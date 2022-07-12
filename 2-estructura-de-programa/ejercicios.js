//1 CADENA DE TRIANGULO
// Escriba un codigo que haga siete llamados a console.log() para generar el sigiuente triangulo
/*
#
##
###
####
#####
######
*/ 
function cadenaDeTriangulo() {
    
    for (let triangulo = '#'; triangulo.length < 8; triangulo += '#') {
        console.log(triangulo);
    }
}

// 2 FIZZBUZZ
function fizzBuzz() {
    for (num = 1; num < 101 ; num++) {
        if(num % 3 === 0) {
            if(num % 5 === 0) {
                console.lo('FizzBuzz')
            }
        }
        if (num % 3 === 0) {
            console.log('Fizz');
        }
        if (num % 5 === 0) {
            console.log('Buzz');
        }
    }
}

// 3 TABLERO DE AJEDREZ
function tableroDeAjedrez() {
    let tamanio = 8;

    let tablero = "";

    for (let i = 0; i < tamanio; i++) {
        for (let j = 0; j < tamanio; j++) {
            if ((j + i) % 2 == 0) {
            tablero += " ";
            } else {
            tablero += "#";
            }
        }
        tablero += "\n";
    }

    console.log(tablero);
}