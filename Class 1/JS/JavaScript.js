//Codigos con los que puedo mostrar en pantalla y consola
alert("Hello World");
document.write("Hello World");
console.log ("Hello World"); 
//Con f12 puedo abrir el inspeccionar de manera mas rapida
//Estas son codigos para declarar variables
let valueOne = 12; 
let valueTwo = 30.64;
let sex = "Femine";
    sex = "masculine";
const pi = 3.1416;
console.log(pi);
console.log(sex);
console.log(valueTwo);
console.log(valueOne);

//comando para comentar columnas Shift + alt + a 
//Concatenaciones
let say = "Hi";
let question = "How Are You";
let frase = say + " " + question;
console.log(frase); 
//Utilizacion del prompt
let nam = prompt("Escriba su nombre");
alert("Hola" + " " + nam); 
//operadores relacionales Booleanos
let a = 12;
let b = 13;
console.log(a==b); 
//Operadores Logicos
/* && = and;
|| = or;
! = not; */
let c = 2;
let d = 2;
let resp = a >= b;
let respTwo = a != b; 
result = resp || respTwo;
console.log(!result); 
//Operadores de Asignacion
/**
 * += : Suma la variable mas un numero que se le coloque
 * -= : Resta  un numero que se le ubique a la variable
 * **= : Potencia el numero por la variable
 * *= : Multiplica el X numero por la variable
 * /= : Divide X numero por la varibale
 */
 let number = 10;
 number **= 2;
 console.log(number);
//condiciones 
let e = 18;
let f = 3;
if (e<f) {
    alert("El numero " + a + " es menor a " + b);
}if(f>e)  {
    alert("El numero " + a + " es mayor a " + b);
} else  {
    alert("No cumple con las cantidad")
} 
//Ejercicicio numero dos de condicionales
let name = "Jose";
if (name == "Jose") {
    alert("Tu eres Jose");
} else if (name == "Maria") {
    alert("Tu eres maria");
} else {
    alert("no te conozco");
}