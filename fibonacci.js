   //FUNCION FIBONACCI
   function lista_fibonacci(number) {
    var fibonacci = [];
    fibonacci[0] = 0;
    fibonacci[1] = 1;
    for (var i = 2; i < number; i++) {
        fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
    }
    return fibonacci;
}
var lista = lista_fibonacci(18);
var pares = lista.filter(function(numero) {
    return numero % 2 == 0;
});
var impares = lista.filter(function(numero) {
    return numero % 2 != 0;
});

// a. Entre los números 0 y 1000.
console.log(lista);

// b. Números pares entre 0 y 1000.
console.log(pares);

// c. Números impares entre 0 y 1000.
console.log(impares);
