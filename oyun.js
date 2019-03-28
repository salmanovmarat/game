

var herfler =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
var guesses=9
var wins=0
var losses=0
var choice1=[]
var choice=null

var updateGuesses = function(){
   document.querySelector(".guesses").innerHTML = guesses
  

}

var updateChoice = function(){
    choice = herfler[Math.floor(Math.random()*herfler.length)]
   
    
    
}
var updateChoice1 = function(){
    document.querySelector(".guesses_far").innerHTML=choice1.join(", ")
  
}

updateChoice()
updateGuesses()

var reset =function(){
    guesses=9
    choice1 =[]
    updateChoice()
    updateGuesses()
    updateChoice1()
}



document.onkeydown = function(event){
    guesses--
 

    var a = String.fromCharCode(event.keyCode).toLowerCase()
    choice1.push(a)


    updateGuesses()
    updateChoice1()



    if(a===choice){
        wins++
        document.querySelector(".wins").innerHTML=wins
        reset()
    }

    if(guesses===0){
        losses++
        document.querySelector(".losses").innerHTML=losses
        reset()
    }
  }