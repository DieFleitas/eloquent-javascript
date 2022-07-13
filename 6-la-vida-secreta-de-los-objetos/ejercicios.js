// 1)UN TIPO DE VECTOR
/*Escribe una clase Vec que represente un vector en un espacio de dos dimen-siones.Toma los parámetros (numericos)xyy, que debería guardar como propiedades del mismo nombre.
Dale al prototipo deVectordos métodos,masymenos, los cuales toman otro vector como parámetro y retornan un nuevo vector que tiene la suma o diferencia de los valores x y y de los dos vectores (thisy el parámetro).
Agrega una propiedad getter llamada longitud al prototipo que calcule la longitud del vector—es decir, la distancia del punto (x, y) desde el origen (0, 0). */
class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  plus(other) {
    return new Vec(this.x + other.x, this.y + other.y);
  }

  minus(other) {
    return new Vec(this.x - other.x, this.y - other.y);
  }

  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5

// 2)CONJUNTOS
/*El entorno de JavaScript estándar proporciona otra estructura de datos llamada Set(“Conjunto”). Al igual que una instancia deMap, un conjunto contiene una colección de valores. Pero a diferencia deMap, este no asocia valores con otros— este solo rastrea qué valores son parte del conjunto. Un valor solo puede ser parte de un conjunto una vez—agregarlo de nuevo no tiene ningún efecto.
Escribe una clase llamadaConjunto.ComoSet, debe tener los métodos add(“añadir”),delete(“eliminar”), yhas(“tiene”). Su constructor crea un conjunto vacío,añadiragrega un valor al conjunto (pero solo si no es ya un miembro),eliminarelimina su argumento del conjunto (si era un miembro) y tieneretorna un valor booleano que indica si su argumento es un miembro del conjunto.
Usa el operador===, o algo equivalente comoindexOf, para determinar si dos valores son iguales.
Proporcionale a la clase un método estáticodesdeque tome un objeto iterable como argumento y cree un grupo que contenga todos los valores producidos al iterar sobre el. */
class Group {
  constructor() {
    this.members = [];
  }

  add(value) {
    if (!this.has(value)) {
      this.members.push(value);
    }
  }

  delete(value) {
    this.members = this.members.filter((v) => v !== value);
  }

  has(value) {
    return this.members.includes(value);
  }

  static from(collection) {
    let group = new Group();
    for (let value of collection) {
      group.add(value);
    }
    return group;
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));

// 3)CONJUNTOS ITERABLES
/*Haz iterable la claseConjuntodel ejercicio anterior.Puedes remitirte a la sección acerca de la interfaz del iterador anteriormente en el capítulo si ya no recuerdas muy bien la forma exacta de la interfaz.
Si usaste un array para representar a los miembros del conjunto, no solo retornes el iterador creado llamando al métodoSymbol.iteratoren el array.
Eso funcionaría, pero frustra el propósito de este ejercicio.
Está bien si tu iterador se comporta de manera extraña cuando el conjunto es modif i cado durante la iteración. */
class Group {
  constructor() {
    this.members = [];
  }

  add(value) {
    if (!this.has(value)) {
      this.members.push(value);
    }
  }

  delete(value) {
    this.members = this.members.filter((v) => v !== value);
  }

  has(value) {
    return this.members.includes(value);
  }

  static from(collection) {
    let group = new Group();
    for (let value of collection) {
      group.add(value);
    }
    return group;
  }

  [Symbol.iterator]() {
    return new GroupIterator(this);
  }
}

class GroupIterator {
  constructor(group) {
    this.group = group;
    this.position = 0;
  }

  next() {
    if (this.position >= this.group.members.length) {
      return { done: true };
    } else {
      let result = { value: this.group.members[this.position], done: false };
      this.position++;
      return result;
    }
  }
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c

// 4)TOMANDO UN METODO PRESTADO
/*Anteriormente en el capítulo mencioné que el metodohasOwnPropertyde un objeto puede usarse como una alternativa más robusta al operadorincuando quieras ignorar las propiedades del prototipo. Pero, ¿y si tu mapa necesita incluir la palabra"hasOwnProperty"? Ya no podrás llamar a ese método ya que la propiedad del objeto oculta el valor del método.
¿Puedes pensar en una forma de llamarhasOwnPropertyen un objeto que tiene una propia propiedad con ese nombre? */
let map = {one: true, two: true, hasOwnProperty: true};

console.log(Object.prototype.hasOwnProperty.call(map, "one"));
// → true
