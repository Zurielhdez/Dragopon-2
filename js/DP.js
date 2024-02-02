let ataqueJugador 
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego() {
  
  let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
  sectionSeleccionarAtaque.style.display ='none'

  let sectionReiniciar = document.getElementById('reiniciar')
  sectionReiniciar.style.display ='none'

  let botonGuerreroJugador = document.getElementById('boton-guerrero')
  botonGuerreroJugador.addEventListener('click', seleccionarGuerreroJugador)

  let botonFuego = document.getElementById('boton-fuego')
  botonFuego.addEventListener('click', ataqueFuego)
  let botonAgua = document.getElementById("boton-agua")
  botonAgua.addEventListener('click', ataqueAgua)
  let botonTierra = document.getElementById('boton-tierra')
  botonTierra.addEventListener('click', ataqueTierra)

  let botonReiniciar = document.getElementById('boton-reiniciar')
  botonReiniciar.addEventListener('click', reiniciarJuego)
}


function seleccionarGuerreroJugador () {
  
  let sectionSeleccionarMascota=document.getElementById('seleccionar-mascota')
  sectionSeleccionarMascota.style.display='none'

  let sectionSeleccionarAtaque=document.getElementById('seleccionar-ataque')
  sectionSeleccionarAtaque.style.display='block'

  let inputGoku = document.getElementById('goku')
  let inputVegeta = document.getElementById('vegeta')
  let inputGohan = document.getElementById('gohan')
  let SpanGuerreroJugador = document.getElementById('guerrero-jugador')

  if (inputGoku.checked) {
   SpanGuerreroJugador.innerHTML ='Goku'
  } else if (inputVegeta.checked) {
   SpanGuerreroJugador.innerHTML ='Vegeta'
  } else if (inputGohan.checked) {
   SpanGuerreroJugador.innerHTML = 'Gohan'
  } else {
      alert ('seleciona un guerrero')
   }

seleccionarGuerreroEnemigo()

}
    function seleccionarGuerreroEnemigo () {
        let ataqueAleatorio = aleatorio(1,3)
        let SpanGuerreroEnemigo = document.getElementById('guerrero-enemigo')

       if (ataqueAleatorio == 1) {
          SpanGuerreroEnemigo.innerHTML = 'goku'
        } else if (ataqueAleatorio == 2) {
            SpanGuerreroEnemigo.innerHTML = 'vegeta'
        } else {
            SpanGuerreroEnemigo.innerHTML = 'gohan'
         }
}

function ataqueFuego() {
  ataqueJugador = 'FUEGO'
  ataqueAleatorioEnemigo()

}

function ataqueAgua() {
  ataqueJugador = 'AGUA'
  ataqueAleatorioEnemigo()

}

  function ataqueTierra() {
  ataqueJugador = 'TIERRA'
  ataqueAleatorioEnemigo()

}

 function ataqueAleatorioEnemigo(){
  let ataqueAleatorio = aleatorio(1,3)

    if(ataqueAleatorio == 1){
      ataqueEnemigo = 'FUEGO'
    } else if(ataqueAleatorio == 2){
      ataqueEnemigo = 'AGUA'
    }else {
      ataqueEnemigo ='TIERRA'
    }

    combate()
  
  }

  function combate(){
      let spanVidasJugador = document.getElementById('vidas-jugador')
      let spanVidasEnemigo = document.getElementById('vidas-enemigo')

    if (ataqueEnemigo == ataqueJugador) {
      crearMensaje("EMPATE")
  } else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA'){
    crearMensaje ("GANASTE")
    vidasEnemigo--
    spanVidasEnemigo.innerHTML = vidasEnemigo
  } else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO'){
    crearMensaje ("GANASTE")
    vidasEnemigo--
    spanVidasEnemigo.innerHTML = vidasEnemigo
  } else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA'){
    crearMensaje("GANASTE")
    vidasEnemigo--
    spanVidasEnemigo.innerHTML = vidasEnemigo
  } else {
    crearMensaje("PERDISTE")
    vidasJugador--
    spanVidasJugador.innerHTML = vidasJugador
  } 
  
  revisarVidas()

}
  function revisarVidas(){
    if (vidasEnemigo == 0){
      crearMensajeFinal ("FELICIDADES, GANASTE 😃")
    } else if (vidasJugador == 0){
      crearMensajeFinal ("Lo siento, perdiste 🙁")
    }
  }


  function  crearMensaje(resultado) {
    let sectionMensajes = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    
    parrafo.innerHTML = "Tu guerrero ataco con  "+ataqueJugador+"  , el guerrero de tu enemigo ataco con      "+ataqueEnemigo+" -  "+resultado

    sectionMensajes.appendChild(parrafo) 
  }

    function  crearMensajeFinal(resultadoFinal){
    let sectionMensajes = document.getElementById('mensajes')
    
    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal

    sectionMensajes.appendChild(parrafo) 
 
  let botonFuego = document.getElementById('boton-fuego')
  botonFuego.disabled = true
  let botonAgua = document.getElementById('boton-agua')
  botonAgua.disabled = true
  let botonTierra = document.getElementById('boton-tierra')
  botonTierra.disabled = true
  
  let sectionReiniciar = document.getElementById('reiniciar')
  sectionReiniciar.style.display='block'

}

  function reiniciarJuego() {
    location.reload()
  }

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener("load", iniciarJuego)