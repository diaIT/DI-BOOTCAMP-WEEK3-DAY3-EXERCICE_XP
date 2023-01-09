/*Copy the code above, to a structured HTML file.
In your Javascript file, use setInterval to move the <div id="animate"> to the right side of the <div id="container">, when the button is clicked on.
The <div id="animate"> should move 1px to the right every milisecond, until it reaches the end of the <div id="container">.
Hint : use clearInterval as soon as the box reaches the right end side of the container*/

let animate = document.getElementById('animate');

// click event
animate.addEventListener("click",myMove) //memoriser l'heure de debut
function myMove(){
     let start = Date.now()
     let timer = setInterval(function(){
        //combien de temps c'est écoulé depuis le debut ?
        let timePassed = Date.now() - start;
        console.log(timePassed);
        animate.style.left = timePassed/6 + 'px'// valeur de left en px
        if(timePassed > 2000){ // terminer l'animation apres 2 seconde
            clearInterval(timer)
        }
         
     } ,10 )
}