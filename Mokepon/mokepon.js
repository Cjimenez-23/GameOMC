function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function inciar_juego(){
    let btn_mascota_jugador = document.getElementById("btn.mascota")
    btn_mascota_jugador.addEventListener("click", seleccionar_mascota_jugador)
     }


function seleccionar_mascota_jugador() {    

    let inputHipodoge = document.getElementById("Hipodoge")
    let inputCapipepo = document.getElementById("Capipepo")
    let inputRatigueya = document.getElementById("Ratigueya")

    let spanJugador = document.getElementById("mascota_jugador")

    if(inputHipodoge.checked){
        alert("Seleccionaste a Hipodoge")
        spanJugador.innerHTML = "Hipodoge,"
    }
    else if(inputCapipepo.checked){
        alert("Seleccionaste a Capipepo")
        spanJugador.innerHTML = "Capipepo,"
    }
    else if(inputRatigueya.checked){
        alert("Seleccionaste a Ratigueya")
        spanJugador.innerHTML = "Ratigueya,"
    }  
    else{
        alert("Porfa, seleccioná a un animal")
    }  
}

function seleccionar_mascota_enemigo() {    

    let inputHipodoge = document.getElementById("Hipodoge")
    let inputCapipepo = document.getElementById("Capipepo")
    let inputRatigueya = document.getElementById("Ratigueya")

    let spanEnemigo = document.getElementById("mascota_enemigo")
    let enemigo = aleatorio(1, 3)

    if(enemigo == 1 )
        {
            inputHipodoge.checked
        alert("Seleccionaste a Hipodoge")
        spanEnemigo.innerHTML = "Hipodoge,"
    }
    else if(inputCapipepo.checked){
        alert("Seleccionaste a Capipepo")
        spanEnemigo.innerHTML = "Capipepo,"
    }
    else if(inputRatigueya.checked){
        alert("Seleccionaste a Ratigueya")
        spanEnemigo.innerHTML = "Ratigueya,"
    }  
    else{
        alert("Porfa, seleccioná a un animal")
    }  
}

window.addEventListener("load", inciar_juego)


let btn_fuego = document.getElementById("btn.mascota")
let btn_tierra = document.getElementById("btn.mascota")
let btn_agua= document.getElementById("btn.mascota")

