/*en un proceso de elecciones que tiene 3 candidatos a,b,c se desea que usted realice un programa
que permita determianr cuantos votaron por el a b y c
que porcentaje obtuvo cada uno de los candidatos 
la suma de los votos de a b y c
y el candidato ganador */


alert('Bienvenido a Nuestro Proceso electoral')
let resp = true
let canditA = 0, canditB = 0, canditC = 0, tc = 0, tc1 = 0
let sum = 0
let pA = 0, pB = 0, pC = 0
let sum1 = 0
while (resp == true) {
     candit = prompt('¿Por cual candidato desea votar? \n 1. a \n 2. b \n 3. c') 
     if (candit == 1 || candit == "a" || candit == "A") {
          canditA = canditA+1
          
     } else if (candit == 2 || candit == "b" || candit == "B") {
          canditB = canditB+1
     } else if(candit == 3 || candit == "c" || candit == "C")   {
          canditC = canditC+1
     } else    {
          alert('Intente de nuevo')
          tc--
     }
     tc++ 
     resp = confirm('¿Alguien Mas?')    
}
tc1 = tc1+tc
     pA = parseInt(canditA * 100)/tc1;
     pB = parseInt(canditB * 100)/tc1;
     pC = parseInt(canditC * 100)/tc1;
sum = sum + tc
document.write(`<h2>Votaron por A: ${canditA}</h2> <br>`)
document.write(`<h2>Votaron por B: ${canditB}</h2> <br>`)
document.write(`<h2>Votaron por C: ${canditC}</h2> <br>`)
document.write(`<h2>El porcentaje de a es de: ${pA}%</h2> <br>`)
document.write(`<h2>El porcentaje de b es de: ${pB}%</h2> <br>`)
document.write(`<h2>El porcentaje de c es de: ${pC}%</h2> <br>`)
document.write(`<h2>La suma total de los votos fue de: ${sum}</h2> <br>`)
if (canditA > canditB && canditA > canditC && canditA == canditA) {
     document.write(`<h2>Gano el Candidato A</h2> <br>`)
} else if (canditB > canditA && canditB > canditC && canditB==canditB)    {
     document.write(`<h2>Gano el Candidato B</h2> <br>`)
} else if (canditC > canditA && canditC > canditB && canditC==canditC)    {
     document.write(`<h2>Gano el Candidato C</h2> <br>`)
} else if(canditA == canditB && canditA == canditC || canditB == canditA && canditB == canditC)    {
     document.write(`<h2>Empate</h2> <br>`)
} 


