let length= document.getElementById('length')
let weight= document.getElementById('weight')
let calculate= document.getElementById('button')
let show= document.getElementById('displays')

function getBmi(){
    result= weight.value/Math.pow(length.value, 2)
   show.innerHTML= result
    
}

calculate.addEventListener('click' , function(){
getBmi() 


})
////////////////////
let feet= document.getElementById('space')
let calc= document.getElementById('show')
let textarea= document.getElementById('display')
let inch=3.37
function feetToMeter (){
    sol= (feet.value/3.37)
  
}

calc.addEventListener('click' , function(){
    feetToMeter ()
  
    textarea.innerHTML= sol
    
    })
    
    console.log(feet)