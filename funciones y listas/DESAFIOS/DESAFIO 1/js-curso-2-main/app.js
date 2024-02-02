let hora = document.querySelector('h1')
hora.innerHTML = "Hora del desafio";

function clicandoBoton(){
    console.log("El boton fue clicado");
}

function clickPrompt(){
    let click = prompt("Digita una ciudad de brasil ");
    console.log(click)
    alert (`estuve en "${click}" y me acorde de ti `)

}

function loveJs(){
    alert("yo amo JS");

}

function sumar(){
    let num1 = parseInt(prompt("Digita un numero "));
    let num2 = parseInt(prompt("Digita un segundo numero"));
    result = num1 +num2;
    console.log(num1);
    console.log(num2);
    alert (`el resultado de sumar ${num1}+ ${num2} es: ${result} `)

}