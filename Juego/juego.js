function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function eleccion(jugada) {
    let resultado = "";
    if (jugada == 1) {
        resultado = "Piedra 🥌"
    } else if (jugada == 2) {
        resultado = "Papel 📜"
    } else if (jugada == 3) {
        resultado = "Tijera ✂"
    } else {
        resultado = "Mal elegido 👎"
    }
    return resultado;
}

function combate() {
    let completado = 0;
    if (jugador == 1 && pc == 3 || jugador == 2 && pc == 1 || jugador == 3 && pc == 2) {
        resultadoCombate = "GANASTE!"
    } else if (jugador == pc) {
        resultadoCombate = "EMPATE!"
    } else {
        resultadoCombate = "PERDISTE!"
    }
    alert(resultadoCombate)
}


let jugador = 0;
let pc = 0;
let triunfos = 0;
let perdidas = 0;
let empates = 0;
let completado = 0;


function jugar() {

    while (triunfos < 3 && perdidas < 3) {
        jugador = prompt("Elige un ataque, 1 para piedra, 2 para papel y 3 para tijera")
        pc = aleatorio(1, 3)
        alert("Haz elegido " + eleccion(jugador) + " y el pc ha elegido " + eleccion(pc))

        combate()
        if (resultadoCombate == "GANASTE!") {
            triunfos++
            completado++
        }
        if (resultadoCombate == "EMPATE!") {
            empates++
        }
        if (resultadoCombate == "PERDISTE!") {
            perdidas++
            completado++
        }
        document.getElementById("h2").innerHTML = "RESULTADOS"
        document.getElementById("p").innerHTML = "Tus resultados fueron: "
        document.getElementById("puntaje").innerHTML = "Ganaste " + triunfos + " veces, " + "perdiste " + perdidas + " veces y empataste " + empates + " veces"
    }
}

if (completado == 3) {

} 