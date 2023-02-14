/*for (let i = 1; i < 11 ; i++) {
    document.write(`numero: ${i} <br>`); 
    // el signo de dolar ($) señala en pantalla la variable que quiera mostrar
}*/

/*let sexo // = String; 
let resp // = String;
let cf = 0;
let cm = 0;
do {
    sexo = prompt("Diga su sexo F o M");
    if (sexo == "f" || sexo == "F") {
        cf = cf+1;
    }else if (sexo == "m" || sexo == "M") {
        cm = cm+1;
    }
    console.log(cm);
    console.log(cf);
    resp = confirm("¿Alguien mas?");
} while (resp == true);
document.write(`El total de Mujeres es de: ${cf} <br>`)
document.write(`El total de Hombres es de: ${cm}`)
*/
let sexo // = String; 
let resp // = String;
let cf = 0;
let cm = 0;
let cg = 0;
do {
    //el parseint es para numero enteros y el parse float sirve para numeros reales
    sexo = parseInt(prompt("Diga su sexo 1.Masculino 2.Femenino"));
    cg++;
    if (sexo == 2) {
        cf = cf+1;
    }else if (sexo == 1) {
        cm = cm+1;
    }
    console.log(cm);
    console.log(cf);
    resp = confirm("¿Alguien mas?");
} while (resp == true);
pf = parseInt(cf * 100)/cg;
pm = parseInt(cm * 100)/cg;
document.write(`La cuenta general es de: ${cg} <br>`)
document.write(`El total de Mujeres es de: ${cf} <br>`)
document.write(`El porcentaje de Mujeres es de: ${pf}% <br>`)
document.write(`El total de Hombres es de: ${cm} <br>`)
document.write(`El Porcentaje de Hombre es de: ${pm}% <br>`)
/*
//ACUMULADOR
let total = 0; 
cg = 0;
do {
    valor = parseInt(prompt("Introduzca un numero"));
    cg++;
    total = valor + total;
} while (confirm("¿Desea introducir otro numero?"));
prom = total / cg
document.write(`Se acumularon: ${cg} <br>`)
document.write(`El total de Valores acumalado es de: ${total} <br>`)
document.write(`El total de Promedio acumalado es de: ${prom} <br>`)*/