let ataqueJugador = "";
let ataqueEnemigo = "";



function ataqueFuego() {
    let spanAtaque = document.getElementById("span.ataque")
    ataqueJugador = "FUEGO"
    spanAtaque.innerHTML = ataqueJugador
    ataque_Enemigo()
}

function ataqueAgua() {
    let spanAtaque = document.getElementById("span.ataque")
    ataqueJugador = "AGUA"
    spanAtaque.innerHTML = ataqueJugador
    ataque_Enemigo()
}

function ataqueTierra() {
    let spanAtaque = document.getElementById("span.ataque")
    ataqueJugador = "TIERRA"
    spanAtaque.innerHTML = ataqueJugador
    ataque_Enemigo()
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
    let spanAtaque = document.getElementById("ataque_Enemigo")
    spanAtaque.innerHTML = ataqueEnemigo
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function inciar_juego() {
    let btn_mascota_jugador = document.getElementById("btn.mascota")
    btn_mascota_jugador.addEventListener("click", seleccionar_mascota_jugador)

    let btn_fuego = document.getElementById("btn.fuego")
    btn_fuego.addEventListener("click", ataqueFuego)
    let btn_tierra = document.getElementById("btn.tierra")
    btn_tierra.addEventListener("click", ataqueTierra)
    let btn_agua = document.getElementById("btn.agua")
    btn_agua.addEventListener("click", ataqueAgua)

}


function seleccionar_mascota_jugador() {

    let inputHipodoge = document.getElementById("Hipodoge")
    let inputCapipepo = document.getElementById("Capipepo")
    let inputRatigueya = document.getElementById("Ratigueya")

    let spanJugador = document.getElementById("mascota_jugador")

    if (inputHipodoge.checked) {
        alert("Seleccionaste a Hipodoge")
        spanJugador.innerHTML = "Hipodoge,"
    }
    else if (inputCapipepo.checked) {
        alert("Seleccionaste a Capipepo")
        spanJugador.innerHTML = "Capipepo,"
    }
    else if (inputRatigueya.checked) {
        alert("Seleccionaste a Ratigueya")
        spanJugador.innerHTML = "Ratigueya,"
    }
    else {
        alert("Porfa, seleccioná a un animal")
    }

    seleccionar_mascota_enemigo()
}

function seleccionar_mascota_enemigo() {

    let mascotaAleatorio = aleatorio(1, 3);
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
