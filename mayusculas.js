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


//FUNCION TEXTO NORMAL A MAYUSCULAS
let Pokemones_UpperCase = pokemones.map(function(element) {
var nombre = element.nombre.toUpperCase();
var tipo = element.tipo.toUpperCase();
var Lista = { nombre, tipo };
return Lista;
});

console.log(Pokemones_UpperCase);