/* El tecnologico IUTEPAL lo ha contratado a usted con la finalidad de que realice un programa 
que lleve el control de del proceso  de inscripcion de inscripcion para tal efecto se desea saber:
1.Total de alumnos inscritos en informatica 
2.Total de alumnos inscritos en administracion 
3. total de alumnos inscritos en enfermeria
Tambien:
Cantidad de Hombres que estudian en informatica 
Cantidad de mujeres que estudian informatica
porcentajes de alumnos de enfermeria 
entre las tres carreras ¿donde hubo mayor cantidad?
total de alumnos inscritos */
let infor = 0, admi = 0, enfer = 0
let resp1 = false
let ct = 0, cm = 0, ta = 0, cf = 0
alert('BUENOS DIAS BIENVENIDO A NUESTRO CONTROL DE ESTUDIO')

if(confirm('¿Desea Inscribir un Estudiante?'))    {
do {
    ci = prompt('Por favor ingrese El numero de Cedula del Estudiante')
    n = prompt('Ingrese Su nombre y apellido')
do {
    carre = prompt('¿Que carrera estudia?')    
    if(carre == "Informatica" || carre == "informatica")  {
     sexo = parseInt(prompt("Diga su sexo 1.Masculino 2.Femenino"));
     if (sexo == 2) {
          cf = cf+1
      }else if (sexo == 1) {
          cm = cm+1
      }
     resp1 = true
     infor = infor+1
     console.log(infor)
     } else if (carre == "Administracion" || carre == "administracion") {
          resp1 = true
          admi = admi+1
          console.log(admi)
     } else if (carre == "Enfermeria" || carre == "enfermeria")   {
     resp1 = true
     enfer = enfer+1
     pe = parseInt(enfer * ta)/100;
     console.log(enfer)
    } else     {
     alert('Por favor ingrese una carrera que estemos dictando (Informatica, Administracion, Enfermeria)')
     }
} while (resp1 == false);
     ta++
     resp = confirm('¿Alguien Mas?')
} while (resp == true);
document.write(`<h2>El total de estudiantes Inscritos en Informatica es de: ${infor}</h2> <br>`)
document.write(`<h2>El total de estudiantes Inscritos en Administracion es de: ${admi}</h2> <br>`)
document.write(`<h2>El total de estudiantes Inscritos en Enfermeria es de: ${enfer}</h2> <br>`)
document.write(`<h2>El total de estudiantes Hombres Inscritos en Informatica es de: ${cm}</h2> <br>`)
document.write(`<h2>El total de estudiantes Mujeres Inscritos en Informatica es de: ${cf}</h2> <br>`)
document.write(`<h2>El porcentaje de Alumnos de Enfermeria es de: ${pe}%</h2> <br>`)
if (infor > admi && infor > enfer) {
     document.write(`<h2>La cantidad mayor es de informaticos</h2> <br>`)
} else if (admi > infor && admi > enfer)    {
     document.write(`<h2>La cantidad mayor es de Administradores</h2> <br>`)
} else    {
     document.write(`<h2>La cantidad mayor es de Enfermeros</h2> <br>`)
}
document.write(`<h2>La cantidad total de Alumnos es de: ${ta}</h2> <br>`)


}
