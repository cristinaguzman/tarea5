// POKEMONES

let pokemones = [{
    nombre: 'Pikachu',
    tipo: 'Electrico'
},
{
    nombre: 'Charmander',
    tipo: 'Fuego',
},
{
    nombre: 'Bulbasaur',
    tipo: 'Planta'
},
{
    nombre: 'Squirtle',
    tipo: 'Agua'
},
{
    nombre: 'Charmeleon',
    tipo: 'Fuego'
},
{
    nombre: 'Weedle',
    tipo: 'bicho'
},
{
    nombre: 'Charizard',
    tipo: 'Fuego'
}
]

//FUNCION QUE TOMA LA FUNCION Pokemones_UpperCase Y LA FILTRA POR TIPO "FUEGO"
let showFuego = Pokemones_UpperCase.filter(function(element) {
    return element.tipo == "FUEGO";
});

console.log(showFuego)