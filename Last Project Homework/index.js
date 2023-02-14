let cant1 = 0, cant2 = 0, cant3 = 0;
let lujo_1 = 0 , lujo_2 = 0;
let totalnomina = 0;
let pagototal = 0; 
do {
  let CountCA = 0, CountCAZ = 0, CountCB = 0, CountCC = 0, CountCCar = 0, CountCE = 0, CountCEGG = 0, CountCH = 0;
  let totalBotellas = 0, totalCarnes = 0, totalCigarros = 0, totalEnlatas = 0;
  let pA = 0, paz = 0, pb = 0, pcarnes = 0, pe = 0, pcc = 0, pegg = 0;
  let IVA_1 = 0, IVA_2 = 0, IVA_3 = 0, IVA_4 = 0;
    do {
    alert("Bienvenidos a Supermercados Maker");
    const name = prompt("Por favor ingrese su nombre y apellido");
    let ci = prompt("Ingrese su numero de Cedula de Identidad");
    do {
      categorias = parseInt(
        prompt(
          "Categorias: \n 1.Cigarrillos/Bebidas Alcoholicas \n 2.Enlatados/Carnes \n 3.Arroz/Azucar/Huevos"
        )
      );
      switch (categorias) {
        case 1:
          categorias1 = parseInt(prompt(
            "1.Bebidas Alcoholicas 50 Bs.S C/U \n2.Caja de Cigarros 30 Bs.S C/U"
          )); 
          if (categorias1 == 1) {
            do {
              cb = parseInt(prompt("¿Cuantas Botellas Deseara?"));
              if (cb <= 0) {
                alert("Error Por favor ingrese nuevamente la cantidad");
              }
            } while (cb <= 0);
            CountCB = CountCB + cb;
            pb = 50 * CountCB;
            IVA_1 = (pb * 16) / 100;
            lujo_1 = (pb * 10) / 100;
          } else if (categorias1 == 2) {
            do {
              cc = parseInt(prompt("¿Cuantas Cajas Desea?")); 
              if (cc <= 0) {
                alert("Error Por favor ingrese nuevamente la cantidad");
              }
            } while (cc <= 0);
            CountCC = CountCC + cc;
            pcc = 30 * CountCC;
            IVA_2 = (pcc * 16) / 100;
            lujo_2 = (pcc * 10) / 100;
          } else {
            alert("Disculpe, El articulo no se encuentra disponible");
          }
          cant1 = CountCB + CountCC;
          break;
        case 2:
          categorias2 = parseInt(prompt(
            "¿Que Desea? \n 1.Enlatados 20 Bs.S \n 2.Carnes 100 Bs.S "
          ));
          if (categorias2 == 1) {
            do {
              ce = parseInt(prompt("¿Cuantos Embutidos en Lata desea?"));
              if (ce <= 0) {
                alert("Error Por favor ingrese nuevamente la cantidad");
              }
            } while (ce <= 0);
            CountCE = CountCE + ce;
            pe = 20 * CountCE;
            IVA_3 = (pe * 16) / 100;
          } else if (categorias2 == 2) {
            do {
              cC = parseInt(prompt("¿Cuantos kilos desea de Carne?"));
              if (cC <= 0) {
                alert("Error Por favor ingrese nuevamente la cantidad");
              }
            } while (cC <= 0);
            CountCCar = CountCCar + cC;
            pcarnes = 100 * CountCCar;
            IVA_4 = (pcarnes * 16) / 100;
          } else {
            alert("Disculpe, El articulo no se encuentra disponible");
          }
          cant2 = CountCE + CountCCar;
          break;
        case 3:
          categorias3 = parseInt(prompt(
            "¿Que Desea? \n 1.Arroz 15 Bs.S \n 2.Azucar 20 Bs.S \n 3.Huevos 15 Bs.S"
          ));
          if (categorias3 == 1) {
            do {
              ca = parseInt(prompt("¿Cuantos Arroz desea?"));
              if (ca <= 0) {
                alert("Error Por favor ingrese nuevamente la cantidad");
              }
            } while (ca <= 0);
            CountCA = CountCA + ca;
            pA = 15 * CountCA;
          } else if (categorias3 == 2) {
            do {
              caz = parseInt(prompt("¿Cuantas Azucar desea?"));
              if (caz <= 0) {
                alert("Error Por favor ingrese nuevamente la cantidad");
              }
            } while (caz <= 0);
            CountCAZ = CountCAZ + caz;
            paz = 20 * CountCAZ;
          } else if (categorias3 == 3) {
            do {
              cegg = parseInt(prompt("¿Cuantas Cartones de Huevo desea?"));
              if (cegg <= 0) {
                alert("Error Por favor ingrese nuevamente la cantidad");
              }
            } while (cegg <= 0);
            CountCEGG = CountCEGG + cegg;
            pegg = 15 * CountCEGG;
          } else {
            alert("Disculpe, El articulo no se encuentra disponible");
          }
          cant3 = CountCH + CountCEGG + CountCA;
          break;
        default:
          alert("Este categoria no existe");
          break;
      }
    } while (confirm("¿Algo Mas?"));
    totalBotellas = pb + IVA_1 + lujo_1;
    totalCigarros = pcc + IVA_2 + lujo_2;
    totalEnlatas = pe + IVA_3;
    totalCarnes = pcarnes + IVA_4;
    pagototal = totalBotellas + totalCarnes + totalCigarros + totalEnlatas + pA + paz + pegg;
    alert(`Querido Usuario ${name} Portador de la cedula: ${ci}\nPor hacer una compra de Bebidas Alcoholicas con un monto de ${totalBotellas} Bs.S de ${CountCB} unidades. El IVA ${IVA_1}, Lujoso producto un añadido de ${lujo_1} Bs.S\nPor la compra de Cajas de Cigarros ${totalCigarros} Bs.S con ${CountCC} El IVA ${IVA_2}, Lujoso producto un añadido de ${lujo_2} Bs.S\nPor la compra de Enlatados tiene un precion de ${totalEnlatas} con ${CountCE} unidades Teniendo un Acumulado de IVA de ${IVA_3}, Por la compra de Carnes tiene un cobro de ${totalCarnes} con ${CountCCar} unidades teniendo un acumulado de IVA de ${IVA_4}\nPor la compra de Arroz tiene un monto de ${pA} Bs.S, del Azucar un monto de ${paz} Bs.S y de los huevos un monto de ${pegg} Bs.S\nEso le da un total de ${pagototal} Bs.S`);
    resp = confirm("¿Procesar Pago?");
    if (resp == false) {
      alert(`${name} Usted ha rechazado el proceso`)
    CountCA = 0,
    CountCAZ = 0,
    CountCB = 0,
    CountCC = 0,
    CountCCar = 0,
    CountCE = 0,
    CountCEGG = 0,
    CountCH = 0;
    totalBotellas = 0,
    totalCarnes = 0,
    totalCigarros = 0,
    totalEnlatas = 0,
    totalnomina = 0;
    pA = 0,
    paz = 0,
    pb = 0,
    pcarnes = 0,
    pe = 0,
    pcc = 0,
    pegg = 0,
    pagototal = 0;
    IVA_1 = 0,
    IVA_2 = 0,
    IVA_3 = 0,
    IVA_4 = 0;
    lujo_1 = 0;
    lujo_2 = 0;
    }
  } while (resp == false);
  do {
    pago = parseInt(prompt(`El monto a pagar es de: ${pagototal} Bs.S\nIngrese cantidad de Pago:`)); 
      if (pago < pagototal) {
        alert("Fondo insuficiente")
      }  else if (pago > pagototal){
        vuelto = parseInt(pago - pagototal); 
        alert(`Proceso Finalizado, Tiene un vuelto de ${vuelto} Bs.S`)
      }
  } while (pago < pagototal);
} while (confirm("¿Alguien Mas?"));

totalnomina = totalnomina + pagototal;

document.write(
  `Los productos vendidos de la categoria 1 tiene un total de ${cant1} </br>`
);
document.write(
  `Los productos vendidos de la categoria 2 tiene un total de ${cant2} </br>`
);
document.write(
  `Los productos vendidos de la categoria 3 tiene un total de ${cant3} </br>`
);
document.write(`Total de nomina acumulada: ${totalnomina} Bs.S </br>`);
