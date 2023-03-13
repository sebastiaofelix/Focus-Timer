const play = document.querySelector('.play')
const stop = document.querySelector('.stop')
const seconds = document.querySelector('.segundos')
const minuts = document.querySelector('.minutos')
const increased = document.querySelector('.increased')
const decreased = document.querySelector('.decreased')
const arvore = document.querySelector('.florest')
const florest = new Audio('./assets/audio/Floresta.wav')
const chuva = document.querySelector('.rain')
const rain = new Audio('./assets/audio/Chuva.wav')
const fogo = document.querySelector('.fire')
const fire = new Audio('./assets/audio/Lareira.wav')
const mercado = document.querySelector('.market')
const market = new Audio('./assets/audio/Cafeteria.wav')
let minutos = Number(minuts.textContent)
let stopTimer

function removeClick(){
  play.disabled = true;
}

function enableClick(){
  play.disabled = false;
}

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
      
      if(minutos < 0) {
        return
      }
  
      tempoAtualizado(minutos, segundos -1)
      
      countdown()
    }, 1000)
  }

  function parar(){
    resetarTempo()
    clearTimeout(stopTimer)
    enableClick()
  }

  function timeIncreased(){
    minuts.innerHTML = minutos += 5;

    tempoAtualizado(minutos, 0)
  }

  function timeDecreased(){
    if(minutos <= 0){
      return
    }
    minuts.innerHTML = minutos -= 5;   

    tempoAtualizado(minutos, 0)
  }

  function playFlorest(){
    florest.play();
    rain.pause();
    fire.pause();
    market.pause();  
  }
 
  function playRain(){
    rain.play();
    florest.pause();
    fire.pause();
    market.pause();  
  }

  function playFire(){
    fire.play();
    florest.pause();
    rain.pause();
    market.pause();  
  }

  function playMarket(){
    market.play();
    florest.pause();
    rain.pause();
    fire.pause();
  }

  
play.addEventListener('click', function(){
    countdown()
    removeClick()
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

arvore.addEventListener('click', function(){
  playFlorest()
})

chuva.addEventListener('click', function(){
  playRain()
})

fogo.addEventListener('click', function(){
  playFire()
})

mercado.addEventListener('click', function(){
  playMarket()
})