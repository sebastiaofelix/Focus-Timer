const play = document.querySelector('.play')
const stop = document.querySelector('.stop')
const seconds = document.querySelector('.segundos')
const minuts = document.querySelector('.minutos')
const increased = document.querySelector('.increased')
const decreased = document.querySelector('.decreased')
let minutos = Number(minuts.textContent)
let stopTimer

function tempoAtualizado(minutos, segundos){
  minuts.textContent = String(minutos).padStart(2, "0")
  seconds.textContent = String(segundos).padStart(2, "0")
}

function resetarTempo(){
  if(minutos > 25){
    minutos = 25
  }
  tempoAtualizado(minutos, 0)
}

function countdown(){
    stopTimer = setTimeout(function() {
      let segundos =  Number(seconds.textContent)
      let minutos = Number(minuts.textContent)
  
      if( segundos <= 0 ) {
        segundos = 2
        --minutos
      }      
  
      tempoAtualizado(minutos, segundos -1)
      
      countdown()
    }, 1000)
  }

  function parar(){
    resetarTempo()
    clearTimeout(stopTimer)
  }

  function timeIncreased(){
    minuts.innerHTML = minutos += 5;
  }

  function timeDecreased(){
    minuts.innerHTML = minutos -= 5;
  }

 
play.addEventListener('click', function(){
    countdown()
},)

stop.addEventListener('click', function(){
  parar()
})

increased.addEventListener('click', function(){
  timeIncreased()
})

decreased.addEventListener('click', function(){
  timeDecreased()
})