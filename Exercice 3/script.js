/*Copy the code above, to a structured HTML file.
In your Javascript file add the functionality which will allow you to drag the box and drop
it into the target. Check out the Course Notes named DOM animations.*/

function allowDrop(ev){
    ev.preventDefault();
}
function drag(event) {
    event.dataTransfer.setData("text", event.target.id);
  }
  
  function drop(event) {
    event.preventDefault();
    var data = event.dataTransfer.getData("text");
    event.target.appendChild(document.getElementById(data));
  }

  let divTarget= document.getElementById("target");
  divTarget.setAttribute("ondrop","drop(event)")//ajouter un attribut ondrop=drop(event) à div
  divTarget.setAttribute("ondragover","allowDrop(event)") //ajouter un attribut ondragover=allowDrop(event) à div

  let divBox = document.getElementById("box");
  divBox.setAttribute("draggable","true"); //mettre draggable à true
  divBox.setAttribute("ondragstart","drag(event)");//ajouter un attribut ondragstart=drag(event)
  