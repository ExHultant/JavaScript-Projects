// Condicionales
     let nam = "Pedro";
     prompt
     if (nam == "Jose") {
          alert("Tu eres Jose");
     } else if (nam == "Maria" ) {
          alert("Tu eres Maria");
     } else    {
          alert("¿Quien eres pana?");          
}
//Swicth Case
let nom = "Jose";
switch (nom) {
     case "Jose":
          console.log("You are Jose")
          break;
     case "Maria":
          console.log("You are Maria")
          break;

     default:
          console.log("¿Quien eres Pana?");
          break;
}
//Prueba Tecnica
for (let i = 1; i <= 100; i++)     {
     console.log(i);
if (i % 3 == 0) {
     console.log("Fizz")
}else if (i % 5 == 0)  {
     console.log("Buzz");
}
}
//Arreglos or Arrays
let nombre = ["Jose", " Maria", " Jesus", "Ricardo", "Daniel", "Jonas", "Papa Dio", "Papa Lui"];
console.log(nombre);
//el lenght sirve para contar cuantas variables se encuentran dentro del array
let numbers = [10,12,16,20];
console.log(numbers);
//QUOKKA Extension 
let number1 = 12;
let number2 = "12";
//al querer sber su boolean se le coloca un = mas 
console.log(number1===number2);
//contadores dentro de bucles
let count = 1;
while (count <= 50) {
     console.log(count + " " + "Hola Mundo");
     count++;
}
//For con array creciente 
for (let index = 0; index < nombre.length; index++) {
     console.log(nombre[index]);
}
//for con array descendiente
for (let i = nombre.length - 1; i >= 0; i--) {
     console.log(nombre[i]);
}
//funciones sin parametros
function saludo() {
     console.log("Hola como estas");
}
saludo();
saludo();
//Funciones con parametros 
function nombre1(nombrePersona) {
     console.log("Hola" + " " + nombrePersona)
}
nombre1("Jose");
function sumar(n1, n2) {
     console.log(n1+n2);
}
sumar(8, 9);