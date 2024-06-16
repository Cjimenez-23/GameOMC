let ataqueJugador = "";
let ataqueEnemigo = "";
let resultado = "";
let vidas_Jugador = 3;
let vidas_Enemigo = 3;

function combate() {
    if (ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA" ||
        ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO" ||
        ataqueJugador == "AGUA" && ataqueEnemigo == "TIERRA") {
        resultado = "GANASTE 🎉"
        vidas_Enemigo--
    } else if (ataqueJugador == ataqueEnemigo) {
        resultado = "EMPATE 🤝🏻"
    } else {
        resultado = "PERDISTE 👎🏿"
        vidas_Jugador--
    }

    mensajes()
}

function mensajes() {
    let span_Vidas_Jugador = document.getElementById("vidas_Jugador")
    let span_Vidas_Enemigo = document.getElementById("vidas_Enemigo")
    span_Vidas_Jugador.innerHTML = vidas_Jugador;
    span_Vidas_Enemigo.innerHTML = vidas_Enemigo;

    let sectionMensajes = document.getElementById("mensajes")
    let vidas = document.createElement("p")
    vidas.innerHTML = "Tus vidas son: " + vidas_Jugador + ", y las vidas del enemigo son: " + vidas_Enemigo;
    sectionMensajes.appendChild(vidas)

    let spanResultado = document.getElementById("resultado")
    let spanAtaque = document.getElementById("span.ataque")
    let escenario = "Tu mascota atacó con " + ataqueJugador
        + " y la mascota del enemigo atacó con "
        + ataqueEnemigo
    spanAtaque.innerHTML = escenario;
    spanResultado.innerHTML = resultado;
}


function ataqueFuego() {
    ataque_Enemigo()
    ataqueJugador = "FUEGO"
}

function ataqueAgua() {
    ataque_Enemigo()
    ataqueJugador = "AGUA"
}

function ataqueTierra() {
    ataque_Enemigo()
    ataqueJugador = "TIERRA"

}

function ataque_Enemigo() {
    let ataqueAleatorio = aleatorio(1, 3)

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = "FUEGO"
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = "AGUA"
    } else if (ataqueAleatorio == 3) {
        ataqueEnemigo = "TIERRA"
    }
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

/*Aquí se ubican todos los botones que dan inicio al juego, 
desde seleccionar mascota y poderes, hasta dar inicio al combate.*/

function inciar_juego() {
    let btn_mascota_jugador = document.getElementById("btn.mascota")
    btn_mascota_jugador.addEventListener("click", seleccionar_mascota_jugador)
    let btn_fuego = document.getElementById("btn.fuego")
    btn_fuego.addEventListener("click", ataqueFuego)
    let btn_tierra = document.getElementById("btn.tierra")
    btn_tierra.addEventListener("click", ataqueTierra)
    let btn_agua = document.getElementById("btn.agua")
    btn_agua.addEventListener("click", ataqueAgua)
    let btn_combate = document.getElementById("pelear")
    btn_combate.addEventListener("click", combate)
}


function seleccionar_mascota_jugador() {
    let numero = 0;
    let inputHipodoge = document.getElementById("Hipodoge")
    let inputCapipepo = document.getElementById("Capipepo")
    let inputRatigueya = document.getElementById("Ratigueya")

    let spanJugador = document.getElementById("mascota_jugador")

    if (inputHipodoge.checked) {
        alert("Seleccionaste a Hipodoge")
        spanJugador.innerHTML = "Hipodoge,"
        numero = 1
    }
    else if (inputCapipepo.checked) {
        alert("Seleccionaste a Capipepo")
        spanJugador.innerHTML = "Capipepo,"
        numero = 2
    }
    else if (inputRatigueya.checked) {
        alert("Seleccionaste a Ratigueya")
        spanJugador.innerHTML = "Ratigueya,"
        numero = 3
    }
    else {
        alert("Porfa, seleccioná a un animal")
    }

    seleccionar_mascota_enemigo(numero)
}

function seleccionar_mascota_enemigo(valor) {
    let mascotaAleatorio;
    do {
        mascotaAleatorio = aleatorio(1, 3)
    } while (mascotaAleatorio == valor)

    let spanEnemigo = document.getElementById("mascota_enemigo");


    if (mascotaAleatorio == 1) {
        spanEnemigo.innerHTML = "Hipodoge"
    } else if (mascotaAleatorio == 2) {
        spanEnemigo.innerHTML = "Capipepo"
    } else if (mascotaAleatorio == 3) {
        spanEnemigo.innerHTML = "Ratigueya"
    }
}

window.addEventListener("load", inciar_juego)
