/*Part I
In your Javascript file, using setTimeout, call a function after 2 seconds.
The function will alert “Hello World */

function HelloW(){
    alert('Hello World');
}
setTimeout(HelloW,2000);

/*Part II
In your Javascript file, using setTimeout, call a function after 2 seconds.
The function will add a new paragraph <p>Hello World</p> to the <div id="container">*/
function NewParagraph(){
    let p = document.createElement("p")
    p.textContent='Hello World'
    document.getElementById("container").appendChild(p)
}
setInterval(NewParagraph,2000);
document.getElementById("clear").addEventListener("click",function()){
    clearInterval(interval)
}

/*Part III
Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">*/
 let numberParagraph= document.getElementById("container") //number paragraph
 if(numberParagraph==5){
    clearInterval(interval)
 }
