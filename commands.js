//creas una variable con la fecha destino 
let fecha = new Date('December 10, 2025 00:00:00');
let miFecha = fecha.getTime();

let parrafoDias = document.querySelector("#dias");
let parrafoHoras = document.querySelector("#horas");
let parrafoMinutos = document.querySelector("#minutos");
let parrafoSegundos = document.querySelector("#segundos");
let spanFecha = document.querySelector("#fecha");

let intervalo = setInterval(() => {
    
    //Calculas la fecha actual casa segundo
    let hoy = new Date().getTime();

    let distancia = miFecha - hoy;

    let miDia = 1000 * 60 * 60 * 24;
    let miHoras = 1000 * 60 * 60;
    let miMinutos = 1000 * 60; 
    let miSegundos = 1000;

    let dias = Math.floor(distancia / miDia);
    let horas = Math.floor((distancia % miDia) / miHoras);
    let minutos = Math.floor((distancia % miHoras) / miMinutos);
    let segundos = Math.floor((distancia % miMinutos) / miSegundos);

    //console.log(dias, horas, minutos, segundos);

    parrafoDias.innerText = dias;
    parrafoHoras.innerText = horas < 10 ? "0" + horas : horas;
    parrafoMinutos.innerText = minutos < 10 ? "0" + minutos : minutos;
    parrafoSegundos.innerText = segundos < 10 ? "0" + segundos : segundos;


}, 1000);


let fecha2 = new Date('December 25, 2025 00:00:00');
let miFecha2 = fecha2.getTime();

let parrafoDias2 = document.querySelector("#dias2");
let parrafoHoras2 = document.querySelector("#horas2");
let parrafoMinutos2 = document.querySelector("#minutos2");
let parrafoSegundos2 = document.querySelector("#segundos2");

let intervalo2 = setInterval(() => {
    
    //Calculas la fecha actual casa segundo
    let hoy = new Date().getTime();

    let distancia = miFecha2 - hoy;

    let miDia = 1000 * 60 * 60 * 24;
    let miHoras = 1000 * 60 * 60;
    let miMinutos = 1000 * 60; 
    let miSegundos = 1000;

    let dias = Math.floor(distancia / miDia);
    let horas = Math.floor((distancia % miDia) / miHoras);
    let minutos = Math.floor((distancia % miHoras) / miMinutos);
    let segundos = Math.floor((distancia % miMinutos) / miSegundos);

    //console.log(dias, horas, minutos, segundos);

    parrafoDias2.innerText = dias;
    parrafoHoras2.innerText = horas < 10 ? "0" + horas : horas;
    parrafoMinutos2.innerText = minutos < 10 ? "0" + minutos : minutos;
    parrafoSegundos2.innerText = segundos < 10 ? "0" + segundos : segundos;


}, 1000);

let fecha3 = new Date('October 15, 2025 12:18:00');
let miFecha3 = fecha3.getTime();

//let parrafoDias3 = document.querySelector("#dias3");
let parrafoHoras3 = document.querySelector("#horas3");
let parrafoMinutos3 = document.querySelector("#minutos3");
let parrafoSegundos3 = document.querySelector("#segundos3");
let cuentaAtras = document.querySelector("#cuentaAtras")

let intervalo3 = setInterval(() => {
    
    //Calculas la fecha actual casa segundo
    let hoy = new Date().getTime();

    let distancia = miFecha3 - hoy;

    let miDia = 1000 * 60 * 60 * 24;
    let miHoras = 1000 * 60 * 60;
    let miMinutos = 1000 * 60; 
    let miSegundos = 1000;

    let dias = Math.floor(distancia / miDia);
    let horas = Math.floor((distancia % miDia) / miHoras);
    let minutos = Math.floor((distancia % miHoras) / miMinutos);
    let segundos = Math.floor((distancia % miMinutos) / miSegundos);

    //console.log(dias, horas, minutos, segundos);

    //parrafoDias3.innerText = dias;
    parrafoHoras3.innerText = horas < 10 ? "0" + horas : horas;
    parrafoMinutos3.innerText = minutos < 10 ? "0" + minutos : minutos;
    parrafoSegundos3.innerText = segundos < 10 ? "0" + segundos : segundos;

    if (distancia < 0) {
        clearInterval(intervalo3);
        cuentaAtras.innerHTML = "<p class='grande'>¡Correeeeeeee!</p>"
    }


}, 1000);