/*
let listaGenerica = [];
let lenguajesDeProgramacion = ['Javascript','C','C++','Kotlin','Phyton'];


 lenguajesDeProgramacion.push('Java','Ruby','GoLang')

 function mostrarFuncioresConsola (){
    for (var i=0; i<lenguajesDeProgramacion.length  ; i++)
    {
        console.log(lenguajesDeProgramacion[i]);
    }

}
mostrarFuncioresConsola();


function ostrarFuncioresInversasConsola (){
    for (var i=lenguajesDeProgramacion.length -1; i>=0  ; i--)
    {
        console.log(lenguajesDeProgramacion[i]);
    }

}
mostrarFuncioresInversasConsola();


let listaNumeros = [1, 2,4,5];
let resultado =promedioListaNumeros(listaNumeros );
function promedioListaNumeros() {
let resultadoSuma = 0;
for (var i=0; i<listaNumeros.length  ; i++){
    resultadoSuma = resultadoSuma + listaNumeros[i];
}
return resultadoSuma/listaNumeros.length ; 
}

//Crea una función que muestre en la consola el número mayor y menor en una lista.
function valorMayorOMenorLista(listaNumeros) {
     
    let valorMayor = listaNumeros[0];
    let valorMenor = listaNumeros[0];
  
    for (let i = 1; i < listaNumeros.length; i++) {
      valorMenor = (listaNumeros[i] < valorMenor) ? listaNumeros[i] : valorMenor;
      valorMayor = (listaNumeros[i] > valorMayor) ? listaNumeros[i] : valorMayor;
    }
  
    console.log("Valor mayor:", valorMayor);
    console.log("Valor menor:", valorMenor);
  }
  
  let listaNumeros2 = [10, 30, 50];
  valorMayorOMenorLista(listaNumeros2);
  



let listaNumeros3 = [1, 2,4,5];
let sumaTotal =sumaListaNumeros(listaNumeros3 );

function sumaListaNumeros() {
let resultadoSuma = 0;
for (var i=0; i<listaNumeros3.length  ; i++){
    resultadoSuma = resultadoSuma + listaNumeros3[i];
}
return resultadoSuma ; 
}

console.log(`la suma total de ${listaNumeros3}, "es", ${sumaTotal}`);


Crea una función que devuelva la posición en la lista donde se encuentra un
 elemento pasado como parámetro, o -1 si no existe en la lista. 

 
 function encontrarIndiceElemento(lista, elemento) {
    let posicionEncontrada = lista.indexOf(elemento);
    return posicionEncontrada !== -1 ? posicionEncontrada : -1;
  }
  
  let miLista = [10, 20, 30, 40, 50];
  let elementoBuscado = 30;
  
  let posicionEncontrada = encontrarIndiceElemento(miLista, elementoBuscado);
  
  console.log(
    posicionEncontrada !== -1
      ? `El elemento ${elementoBuscado} se encuentra en la posición ${posicionEncontrada}.`
      : `El elemento ${elementoBuscado} no se encuentra en la lista.`
  );




Crea una función que reciba dos listas de números 
del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno. 

function sumarDosListas(lista1, lista2) {
    var resultado = [];
  
    for (var i = 0; i < lista1.length; i++) {
      resultado[i] = lista1[i] + lista2[i];
    }
  
    return resultado;
  }
  var lista1 = [7, 14, 23, 32];
  var lista2 = [17, 10, 1, -8];
  var resultado = sumarDosListas(lista1, lista2);
  
  console.log(`Este es el resultado de sumar la lista ${lista1}, con la lista ${lista2}: ${resultado}`);

  */

  /* Crea una función que reciba una lista de números 
  y devuelva una nueva lista con el cuadrado de cada número. */
  function cuadradoValoresLista(lista1) {
    var resultado = [];
  
    for (var i = 0; i < lista1.length; i++) {
      resultado[i] = lista1[i]**2;
    }
  
    return resultado;
  }
  var lista1 = [7, 14, 23, 32];
  var resultado = cuadradoValoresLista(lista1);
  
  console.log(`El cuadrado  de los valores en la lista [${lista1}], son de: [${resultado}]`);